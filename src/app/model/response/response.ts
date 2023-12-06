import { Error } from './error';
import { Paginacion } from './paginacion';
export interface Response<T> {
    paginacion: Paginacion;
    data: Array<T>;
    esExitoso: boolean;
    errors?: Error;
}