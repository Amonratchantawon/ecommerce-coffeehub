import { ProductItemModel } from "../../app/app.model";

export class CartModel {
    items:Array<CartItemModel>;
    totalamount:number;
};
export class CartItemModel{
    product: ProductItemModel;
    price:number;
    qty:number;
    amount:number;
};
