export class ProductDescriptionModel {
    productdescriptions: Descriptions = new Descriptions();
}

export class Descriptions {

    name: String;
    image: String;
    detail: String;
    price:Number;
    normalprice: Number;
    discount: Number;
    discounttype: String;
}