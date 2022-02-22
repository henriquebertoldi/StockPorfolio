export interface Stock {
    id: number;
    ticker: string;
    name: string;
}

export interface StockPorfolio {
    id: number;
    stock: string;
    pm: number;
    date: Date;
}
