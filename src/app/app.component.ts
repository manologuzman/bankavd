import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from './services/product.service';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Bank AVD';
  mostrarOtros = false;
  banco = 'BANCO_1';
  product: any[] = [];
  productosVisibles: any[] = [];
  totalAhorro = 0;

  private subscription = new Subscription();

  // Chart properties
  public doughnutChartLabels: Label[] = ['Ahorros', 'Corriente', 'CDT'];
  public doughnutChartData: MultiDataSet = [ [0, 0, 0] ];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartColors = [
    {
      backgroundColor: ['#10B981', '#F59E0B', '#8B5CF6'],
      borderWidth: 0
    }
  ];
  public doughnutChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    cutoutPercentage: 70,
    legend: {
      position: 'right',
      labels: { fontColor: 'rgba(255, 255, 255, 0.9)', boxWidth: 12, padding: 15 }
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem: any, data: any) {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const val = dataset.data[tooltipItem.index];
          return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(val);
        }
      }
    }
  };

  constructor(private productService: ProductService) {}

  ngOnInit() {
    // Suscribirse a la carga inicial de datos
    this.subscription.add(
      this.productService.getJsons().subscribe(
        () => {}, // El fetch alimenta el BehaviorSubject
        (error) => console.error(error)
      )
    );

    // Suscribirse al estado reactivo (esto actualiza la UI automáticamente ante cualquier pago)
    this.subscription.add(
      this.productService.products$.subscribe((data) => {
        this.product = data;
        this.actualizarVista();
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onToggleOtros() {
    this.actualizarVista();
  }

  private actualizarVista() {
    this.productosVisibles = this.mostrarOtros
      ? this.product
      : this.product.filter((item) => item.accountInformation.bank === this.banco);

    let ahorro = 0;
    let corriente = 0;
    let cdt = 0;

    this.productosVisibles.forEach(item => {
      const type = item.accountInformation.productType;
      const amount = this.obtenerMontoAhorro(item);
      
      if (type === 'DEPOSIT_ACCOUNT') ahorro += amount;
      if (type === 'CURRENT_ACCOUNT') corriente += amount;
      if (type === 'CERTIFIED_DEPOSIT_TERM') cdt += amount;
    });

    this.totalAhorro = ahorro + corriente + cdt;
    // Asignar una nueva referencia al array para forzar el repintado de la gráfica
    this.doughnutChartData = [ [ahorro, corriente, cdt] ];
  }

  private obtenerMontoAhorro(item: any): number {
    const balances = item.productAccountBalances || {};
    if (balances.saldo_disponible && typeof balances.saldo_disponible.amount === 'number') {
      return balances.saldo_disponible.amount;
    }
    if (balances.valor_constitucion && typeof balances.valor_constitucion.amount === 'number') {
      return balances.valor_constitucion.amount;
    }
    return 0;
  }
}
