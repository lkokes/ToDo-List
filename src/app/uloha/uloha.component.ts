import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-uloha',
  templateUrl: './uloha.component.html',
  styleUrls: ['./uloha.component.css']
})
export class UlohaComponent implements OnInit {

  @Input() uloha?: String;

  constructor() { }

  ngOnInit(): void {
  }

}