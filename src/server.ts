import express from "express";
import 'express-async-errors';
import cors from "cors";
import dotenv from "dotenv";
import errorHandlingMiddleware from './Middleware/errorHandlingMiddleware';
import router from "./Routes/routes";

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

const PORT:number = Number(process.env.PORT) || 5000

app.use(router)
app.use(errorHandlingMiddleware)
app.use(router)


app.listen(PORT, () =>{
  console.log(`SERVER UP ON PORT ${PORT}`)
})