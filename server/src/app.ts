import express from 'express';
import cors from 'cors';
import CharacterController from './controllers/CharacterController';

const app = express();

app.use(cors());
app.use(express.json());

const characterController = new CharacterController();
app.get('/humans', characterController.humansFromEarthC137);

export default app;
