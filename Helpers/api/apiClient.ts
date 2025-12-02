import { APIRequestContext } from '@playwright/test';

export class ApiClient {
    private request: APIRequestContext;
    private baseURL: string;
    private token: string | null = null;

    constructor(request: APIRequestContext, baseURL: string) {
        this.request = request;
        this.baseURL = baseURL;
    }

    async authenticate(username: string, password: string) {
        const response = await this.request.post(`${this.baseURL}/auth`,
            {
                data: { username, password }
            });
        const body = await response.json();
        this.token = body.token;
        console.log("Authentication token:", this.token);
        return body;
    }

    private authHeaders() {
        return this.token ? { Cookie: `token=${this.token}` }
            : undefined
    }

    async createBooking(data: any) {
        return this.request.post(`${this.baseURL}/booking`, { data })
    }

    async getBooking(id: number) {
        return this.request.get(`${this.baseURL}/booking/${id}`)
    }

    async updateBooking(id: number, data: any) {
        return this.request.put(`${this.baseURL}/booking/${id}`, {
            headers: this.authHeaders(),
            data
        });
    }

    async deleteBooking (id :number){
        return this.request.delete(`${this.baseURL}/booking/${id}` , {
            headers : this.authHeaders()
        })
    }

}