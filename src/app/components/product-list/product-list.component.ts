import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { ProductType } from 'src/app/models/product.model';
import { SortOrder } from 'src/app/enums/sortOrder.enum';
import { faTh, faList, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Observable<Array<ProductType>>;
  viewType: string = 'grid';
  sortOrder: SortOrder = SortOrder.NO_SORT;
  gridIcon: IconDefinition = faTh;
  listIcon: IconDefinition = faList;
  sortOptions: Array<any> = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getProducts();
    this.initializeSortOptions();
  }

  getProducts ():void {
    this.products = this.dataService.getData();
  }

  initializeSortOptions () {
    this.sortOptions.push({
      label: 'Select',
      value: SortOrder.NO_SORT
    });
    this.sortOptions.push({
      label: 'Price Low To High',
      value: SortOrder.ASC
    });
    this.sortOptions.push({
      label: 'Price High To Low',
      value: SortOrder.DESC
    });
  }

  sort(event) {
    this.sortOrder = parseInt(event.target.value);
  }

  updateView (viewType: string) {
    this.viewType = viewType;
  }

}
