import { Component, OnInit, Input } from '@angular/core';
import { ProductType } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input()
  productInfo: ProductType;

  @Input('view')
  viewType: string;

  constructor() { }

  ngOnInit(): void {
  }

}
