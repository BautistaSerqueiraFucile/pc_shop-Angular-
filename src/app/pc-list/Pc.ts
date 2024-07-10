export interface Pc{
    name: string;
    type: string;
    price: number;
    stock: number;
    image: string;
    oferta: boolean;
    quantity: number;
}

export interface PcItem{
    pc: Pc;
    quantity: number;
}