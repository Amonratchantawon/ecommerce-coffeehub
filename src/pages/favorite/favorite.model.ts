export class FavoriteModel {
    titel: string;
    productfavorite: Array<Productfavarite>;

}
export class Productfavarite {
    _id:any;
    name: string;
    image: Array<string>;
    descriptons: string;
    price: Array<PriceModel>;
    normalprice: number;
    discount: number;
    discounttype: string;

}
export class PriceModel {
    price: number;
    type: string;
    discount: number;
    netprice: number;
    _id: string;
}