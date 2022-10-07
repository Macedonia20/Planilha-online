import axios from 'axios';

export const api = axios.create({

    baseURL: 'http://planilhasonline.s3-website-sa-east-1.amazonaws.com//api',
})