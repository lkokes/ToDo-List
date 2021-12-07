import { Component } from '@angular/core';
import { Uloha } from './uloha';
import { UlohaComponent } from './uloha/uloha.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  zoznamUloh: Uloha[] = [];

  inputDescription: String = '';

  pridajUlohu(): void {

    if(this.inputDescription !== ''){

      if(this.zoznamUloh.length > 0){
        var uloha: Uloha = {id: Number(this.zoznamUloh[this.zoznamUloh.length-1].id)+1, text: this.inputDescription};
        this.zoznamUloh.push(uloha);
      } 
      else {
        this.zoznamUloh.push( { id: 0, text: this.inputDescription}); 
      }

      this.inputDescription = '';
    }
  }

  handleKeyboardEvent(event: any) {
    if (event.keyCode === 13) {
      this.pridajUlohu()
    }
  }

  odstranUlohu(pridanaUloha: Uloha): void {
   this.zoznamUloh = this.zoznamUloh.filter(it => it !== pridanaUloha)
  }
}
