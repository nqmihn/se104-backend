export interface UserOrder {
    userId: number
    name: string
    address: string
    phoneNumber: string
    productPrice: number
    deliveryPrice: number
    deliveryId: number
    deliveryVoucherId?: number
    detail: {
        productId: number
        shopId: number
        shopVoucherId?: number
        quantity: number
        price: number
    }[]
}
export interface DashboardQuery {
    month?:string;
    year?:string;
}