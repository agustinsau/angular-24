export interface Product {
    name: string;
    stock: number;
    price: number;
    image: string;
    discount: boolean;
    quantity: number; 
}

export interface CartProduct extends Product{
    totalPrice: number; 

}

