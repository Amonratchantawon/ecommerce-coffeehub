
export class ListProductModel {
    _id: string
    category: string;
    subcate: string;
    description: string;
    shop_id: string;
    price: Array<PriceModel>;
    image: Array<string>;
    name: string;
}

export class PriceModel {
    price: number;
    type: string;
    discount: number;
    netprice: number;
    _id: string;
}