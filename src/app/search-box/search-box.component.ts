import { Component, OnInit } from '@angular/core';
import {Input, Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  searchText:string;
  @Output() searchcriteria = new EventEmitter<String>();
  searchThis() {
    this.searchcriteria.emit(this.searchText);
  }
}
