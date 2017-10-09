import { ListProductModel } from '../list-product/list-product.model';

export class CartModel {
    items:Array<CartItemModel>;
    totalamount:number;
};
export class CartItemModel{
    product: ListProductModel = new ListProductModel();
    price:number;
    qty:number;
    amount:number;
};



