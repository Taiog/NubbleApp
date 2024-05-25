import axios from "axios";

export const api = axios.create({
    baseURL: 'http://127.0.0.1:3333/',
    headers: {
        Authorization: 'Bearer MQ.-jy4_O1poxkFvjhYd0ylQOnFKSDhNYhTHRSLW7yZ70pq5tdqA3bVxjBv4Nao'
    }
})