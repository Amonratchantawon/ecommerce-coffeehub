export class ProductDescriptionModel {
    productdescriptions: Descriptions = new Descriptions();
    logo:String;
}

export class Descriptions {

    name: String;
    image: Array<String>;
    detail: String;
    price:Array<Price>;
    normalprice: Number;
    discount: Number;
    discounttype: String;
}

export class Price{
    price:number;
    size: string;
}