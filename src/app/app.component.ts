import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  novaUloha: String = '';
  zoznamUloh: String[] = [];

  pridajUlohu() {

    if(this.novaUloha !== ''){
      this.zoznamUloh.push(this.novaUloha)
      }
    for (var i=0; i<this.zoznamUloh.length; i++){
      console.log(this.zoznamUloh[i])
    }
  }
}
