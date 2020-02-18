import { create } from 'apisauce';

export const apiWrapper = create({
    baseURL: 'http://lzone.isfb.ru/api/v2/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});
