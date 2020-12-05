import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CompanyDetail, Detail } from './companyDetails.modal';
import {companyList}  from './companyList';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Project';
  selectedItem=null;
  currIndex;
  items: CompanyDetail[];
  searchText: string;
  searchcriteria;
  constructor() {

  }
  ngOnInit(): void {
    this.items = companyList;
    console.log(this.items[0].details);
  }







  savedList = "SAVED LISTS";
  savedListIcon = "fa fa-list-ul";

  savedFilters = "SAVED FILTERS";
  savedFiltersIcon = "fa fa-filter";


  savedHistory = "SAVED HISTORY";
  savedHistoryIcon = "fa fa-history";


  showDescription(event:Event, clickItem, index)
  {
      console.log(clickItem);
      this.selectedItem=clickItem;
      this.currIndex=index;
  }


  searchThis(data)
  {
      this.searchText=data;
      this.selectedItem=null;
  }
}
