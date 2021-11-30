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

  handleKeyboardEvent(event: any) {
    if (event.keyCode === 13) {
      this.pridajUlohu()
    }
  }

  odstranUlohu(pridanaUloha: String): void {
    this.zoznamUloh = this.zoznamUloh.filter(it => it !== pridanaUloha)
  }
}
