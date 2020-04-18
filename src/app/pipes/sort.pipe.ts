import { Pipe, PipeTransform } from '@angular/core';
import { SortOrder } from '../enums/sortOrder.enum';
import { ProductType } from '../models/product.model';

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {
    transform (array: Array<ProductType>, sortOrder: SortOrder = SortOrder.NO_SORT) {
        if (!array || sortOrder === SortOrder.NO_SORT) {
            return array;
        }
        array = [...array];

        let sortedArray: Array<ProductType> = array.sort((current: ProductType, next: ProductType) => {
            if (!current || !next) {
                return 0;
            }
            let result = (current.price || 0) - (next.price || 0);
            if (sortOrder === SortOrder.ASC) {
                return result;
            } else {
                return -result;
            }
        });

        return sortedArray;
    }
}
