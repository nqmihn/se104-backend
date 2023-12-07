export interface UserOrder {
    userId: number
    address?: string
    phoneNumber?: string
    productPrice: number
    deliveryPrice: number
    deliveryId: number
    deliveryVoucherId?: number
    detail: {
        productId: number
        shopVoucherId?: number
        quantity: number
        price:number
    }[]
}