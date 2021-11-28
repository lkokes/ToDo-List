import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  novaUloha: String = '';
  zoznamUloh: String[] = [];

  pridajUlohu(): void {

    if(this.novaUloha !== ''){
      this.zoznamUloh.push(this.novaUloha)
      }
  }

  odstranUlohu(pridanaUloha: String): void {
    this.zoznamUloh = this.zoznamUloh.filter(it => it !== pridanaUloha)
  }
}
