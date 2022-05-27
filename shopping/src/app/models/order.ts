import { BasketModel } from 'src/app/models/basket';

    export class OrderModel {
        baskets : BasketModel[]
        date : Date
        orderNumber : number
    }