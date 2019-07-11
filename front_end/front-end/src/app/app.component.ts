import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DataService } from './data/data.service';

import { collection } from './collection';

import { Product } from './model/product';
import { Family } from './model/family';
import { Location } from './model/location';
import { Transaction } from './model/transaction';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;

  private products : Product[] = [];
  private families : Family[] = [];
  private locations : Location[] = [];
  private transactions : Transaction[] = [];

  private productsObservable: Observable<object>;
  private familiesObservable: Observable<object>;
  private locationsObservable: Observable<object>;
  private transactionsObservable: Observable<object>;


  constructor(private dataService: DataService){

    
    this.familiesObservable = dataService.getCollections(collection.family);
    this.locationsObservable = dataService.getCollections(collection.location);
    this.transactionsObservable = dataService.getCollections(collection.transaction);

  }

  get_products(){
    this.productsObservable = this.dataService.getCollections(collection.product);
  }
  get_families(){
    
  }
}
