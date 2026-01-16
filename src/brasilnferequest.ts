import axios, { AxiosInstance } from 'axios';

export class BrasilNFeRequest {
    private _token: string;
    private _userToken: string;
    private _url: string;
    private _axiosInstance: AxiosInstance;

    constructor(token: string, url: string, userToken: string = "") {
        this._token = token;
        this._userToken = userToken;
        this._url = url;

        this._axiosInstance = axios.create({
            baseURL: this._url,
            timeout: 300000, // 5 minutos
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Token': this._token,
                'UserToken': this._userToken,
                'Package-Version': '1.22.3',
                'Package-Type': 'node.js'
            }
        });
    }

    protected async request<TReturn, TSender>(objectSender: TSender, metodo: string): Promise<TReturn> {
        try {
            const response = await this._axiosInstance.post<TReturn>(metodo, objectSender);
            return response.data;
        } catch (error: any) {
            const errorMessage = error.response?.data ? JSON.stringify(error.response.data) : error.message;
            throw new Error(`${new Date().toISOString()} - Erro ao efetuar requisição HTTPS com Brasil NFe: ${errorMessage}`);
        }
    }
}