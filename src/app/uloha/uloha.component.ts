import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Uloha } from '../uloha'

@Component({
  selector: 'app-uloha',
  templateUrl: './uloha.component.html',
  styleUrls: ['./uloha.component.css']
})
export class UlohaComponent implements OnInit {

  @Input() uloha: Uloha = {id: 0, text: ''};

  @Output() mazanaUloha: EventEmitter<Uloha> = new EventEmitter<Uloha>()

  constructor() { }

  ngOnInit(): void {
  }

  odstranUlohu():void{
   this.mazanaUloha.emit(this.uloha)
  }
}