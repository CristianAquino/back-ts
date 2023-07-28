import express, { response } from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import { authRouter, infoRouter, itemRouter, uploadRouter } from "./routes";

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "storage/",
  })
);

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/item", itemRouter);
app.use("/api/v1/info", infoRouter);
app.use("/api/v1/uploads", uploadRouter);

export { app };
