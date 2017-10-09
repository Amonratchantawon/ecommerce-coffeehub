import { ListProductModel } from '../list-product/list-product.model';

export class OrdersModel {
    orderStatus: string;
    items: Array<itemArray>;
    shop: string; 
    date: Date;
    amount: number;
    discount: number;
    netamount: number;
    cupcoin: number;
    user : string; 

}

export class itemArray {
    product : ListProductModel = new ListProductModel();
    qty: number;
    selectedPrice: priceArrModel = new priceArrModel();
}

export class priceArrModel {
    // price: number;
    type: string;
    // discount: number;
    netprice: number;
    // _id:string;
}