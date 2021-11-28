import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-uloha',
  templateUrl: './uloha.component.html',
  styleUrls: ['./uloha.component.css']
})
export class UlohaComponent implements OnInit {

  @Input() uloha?: String;

  @Output() mazanaUloha: EventEmitter<String> = new EventEmitter<String>()

  constructor() { }

  ngOnInit(): void {
  }

  odstranUlohu():void{
    this.mazanaUloha.emit(this.uloha)
  }
}