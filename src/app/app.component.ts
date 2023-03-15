import { Component } from '@angular/core';
import { Calculator } from 'miguel-malqui-calculator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Calculator';

  calculator: Calculator = new Calculator();

  operandA: number = 0;
  operandB: number = 0;
  result: number = 0;

  add(): void {
    this.result = this.calculator.add(this.operandA, this.operandB);
  }

  subtract(): void {
    this.result = this.calculator.subtract(this.operandA, this.operandB);
  }

  multiply(): void {
    this.result = this.calculator.multiply(this.operandA, this.operandB);
  }

  divide(): void {
    this.result = this.calculator.divide(this.operandA, this.operandB);
  }
}
