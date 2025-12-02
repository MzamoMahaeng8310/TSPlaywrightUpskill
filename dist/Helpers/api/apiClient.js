"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiClient = void 0;
class ApiClient {
    request;
    baseURL;
    token = null;
    constructor(request, baseURL) {
        this.request = request;
        this.baseURL = baseURL;
    }
    async authenticate(email, password) {
        const response = await this.request.post(`${this.baseURL}/auth`, {
            data: { email, password }
        });
        const body = await response.json();
        this.token = body.token;
        return body;
    }
    authHeaders() {
        return this.token ? { Cookie: `token=${this.token}` }
            : undefined;
    }
    async createBooking(data) {
        return this.request.post(`${this.baseURL}/booking`, { data });
    }
    async getBooking(id) {
        return this.request.get(`${this.baseURL}/booking/${id}`);
    }
    async updateBooking(id, data) {
        return this.request.put(`${this.baseURL}/booking/${id}`, {
            headers: this.authHeaders(),
            data
        });
    }
    async deleteBooking(id) {
        return this.request.delete(`${this.baseURL}/booking/${id}`, {
            headers: this.authHeaders()
        });
    }
}
exports.ApiClient = ApiClient;
