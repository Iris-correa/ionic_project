import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  result;

   SUM(formu) {
    let num1 = formu.value.n1;
    let num2 = formu.value.n2;
    
    this.result = parseFloat(num1)+parseFloat(num2)
  }
SUB(formu){
  let num1 = formu.value.n1;
  let num2 = formu.value.n2;
  this.result = parseFloat(num1)-parseFloat(num2)
}
MULT(formu){
  let num1 = formu.value.n1;
  let num2 = formu.value.n2;
  this.result = parseFloat(num1)*parseFloat(num2)
}
DIV(formu){
  let num1 = formu.value.n1;
  let num2 = formu.value.n2;
  this.result = parseFloat(num1)/parseFloat(num2)
}

}
