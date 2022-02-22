import { StockPorfolio, Stock } from "./stocks";

const stocks: Stock[] = [
    {
        id: 1,
        ticker: 'PETR4',
        name: 'Petrobrás'
    },
    {
        id: 2,
        ticker: 'BBAS3',
        name: 'Banco do Brasil',
    },
    {
        id: 3,
        ticker: 'VIIA3',
        name: 'Via Varejo'
    }
];

export const STOCKPORTFOLIO: StockPorfolio[] = [
    { id: 1, stock: 'PTBR4', pm: 10, date: new Date('10/10/2021')},
    { id: 22, stock: 'BBDC4', pm: 20, date: new Date('05/08/2021')}
];
