import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-button',
  templateUrl: './table-button.component.html',
  styleUrls: ['./table-button.component.css']
})
export class TableButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() buttonName:String;
  @Input() iconName:String;

}
