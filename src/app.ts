import express, { Request, Response } from "express";
import authRouter from "./routes/auth";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});
app.use("/api", authRouter);
export default app;
