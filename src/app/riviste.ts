export interface Riviste {
    id: number;
    titolo: string;
    anno: number;
}

export interface Rivista {
    id: number;
    rivista_id: number;
    anno: string;
    periodicita?: string;
    annata?: number;
    numero_fasc?: number;
    data_di_arrivo?: Date;
    note?: string;
    manca?: string;
}
