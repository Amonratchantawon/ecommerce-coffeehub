// import { ProductItemModel } from "../../app/app.model";

// export class SearchModel {
//     items: Array<ProductItemModel>;
// }


// Product OK!!!!

export class ProductSearchModel {
    price: Price = new Price();
    image: Array<String>;
    name: String;
    description: String;
}

export class Price {
    price: Number;
    type: String;
    discount: Number;
    netprice: Number;
}