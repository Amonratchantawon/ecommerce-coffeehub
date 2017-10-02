export class ProductItemModel {
  _id: string;
  name: string;
  image: string;
  price: number;
  normalprice: number;
  discount: number;
  discounttype: string;
  currency: string;
  rate: number;
  description: string;
}

export class ShopItemModel {
  name: string;
  image: string;
}