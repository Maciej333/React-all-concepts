import axios from 'axios';
import { IHttpResponse } from '../models/HttpResponse';

export const getServer = (url: string) => {
    return axios.get(url);
}

export const postServer = (url: string, postData: any) => {
    return axios.post<IHttpResponse>(
        url,
        postData,
        {
            headers: {
                'content-type': 'application/json;charset=UTF-8',
            }
        }
    )
}

export const putServer = (url: string, putData: any) => {
    return axios.put<IHttpResponse>(
        url,
        putData,
        {
            headers: {
                'content-type': 'application/json;charset=UTF-8',
            }
        }
    )
}

export const deleteServer = (url: string) => {
    return axios.delete<IHttpResponse>(
        url,
        {
            headers: {
                'content-type': 'application/json;charset=UTF-8',
            }
        }
    )
}