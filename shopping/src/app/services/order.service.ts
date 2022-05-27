import { Injectable } from "@angular/core"
import { OrderModel } from './../models/order';
import { BasketModel } from 'src/app/models/basket';


@Injectable({
    providedIn: 'root'
})
export class OrderService {

    orders: OrderModel[] = []

    constructor() { }

    addOrder(baskets : BasketModel[]) {
        let order = new OrderModel()
        order.baskets = baskets
        order.date = new Date()
        order.orderNumber = Math.floor(Math.random() * 1000000000)
        this.orders.push(order)
    }

}