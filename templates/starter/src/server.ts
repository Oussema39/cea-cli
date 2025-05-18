import express, { Application } from "express";
import cors from "cors";
const app: Application = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "*",
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", (_,res) => {
  return res.status(200).send("Hello Fellow Developer!");
});

export default app;
