export class FavoriteModel {
    titel: String;
    productfavorite: Array<Productfavarite>;

}
export class Productfavarite {
    _id:any;
    name: String;
    image: String;
    descriptons: String;
    price: Number;
    normalprice: Number;
    discount: Number;
    discounttype: String;

}