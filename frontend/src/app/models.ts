export interface Category {
    id: number;
    name: string;
    description: string;
}

export interface Product {
    id: number;
    name: string;
    description: string;
    rating: string;
    image_url: string;
    categoryId: number;
    price: BigInteger;
}

export interface Token {
    access: string;
    refresh: string;
}