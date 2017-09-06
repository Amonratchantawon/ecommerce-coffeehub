export class ProductDescriptionModel {
    productdescriptions: Descriptions = new Descriptions();
    logo:String;
}

export class Descriptions {

    name: String;
    image: Array<String>;
    detail: String;
    price:Number;
    normalprice: Number;
    discount: Number;
    discounttype: String;
}