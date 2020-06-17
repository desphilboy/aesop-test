import express from 'express';
import cors from 'cors';
import { API_RESP } from './fixture.js';

const server = express();

server.use(cors());

server.get('/api/v1/nav/shop', (req, res) => {
	console.log('received a request to /api/v1/nav/shop/');
	return res.send(API_RESP);
});

server.listen(process.env.PORT || 3010);
console.log('listenning on port: ', process.env.PORT || 3010);
