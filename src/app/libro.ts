import { Data } from '@angular/router';

export interface Libro {
    N: number;
    ISBN: string;
    n_facile_consumo: number;
    n_inventario: number;
    n_registro_ingressi: number;
    altre_responsabilita: string;
    annotazioni: string;
    autore: string;
    collocazione: string;
    curatore: string;
    data: Date;
    data_scheda: Date;
    descrizione_fisica: string;
    fapartedi: string;
    note: string;
    prezzo: number;
    prezzo_euro: number;
    pubblicazione: string;
    serie: string;
    soggetto: string;
    titolo: string;
    traduzione_da: string;
}
