import { Error } from './error';
export interface Response<T> {
    //meta: string;
    data: Array<T>;
    //message: string;
    errors?: Error;
}