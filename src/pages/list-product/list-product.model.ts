// import { ProductItemModel } from "../../app/app.model";

// export class ListProductModel {
//     items: Array<ProductItemModel>;
// }
export class ListProductModel {
    _id: String
    category: String;
    subcate: String;
    description: String;
    shop_id: String;
    price: Array<PriceModel>;
    image: Array<string>;
    name: String;
}

export class PriceModel {
    price: number;
    type: String;
    discount: Number;
    netprice: Number;
    _id: String;
}