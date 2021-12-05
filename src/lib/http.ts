import http from 'http';

export type Request = http.IncomingMessage;
export type Response = http.ServerResponse;

export default http;
