interface Product {
    id: number;
    name: string;
    price: number;
    url: string;
    description: string;
    quantity?: number | undefined;
    total?: number | undefined
}

export default Product