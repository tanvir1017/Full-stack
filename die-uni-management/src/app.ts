// ********** IMPORTING PACKAGES**********************
import cors from "cors";
import express, { Application, Request, Response } from "express";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";
import routes from "./app/routes";

// ** making app variable and store it into express functions
const app: Application = express();

// ** Parser
app.use(express.json());
app.use(cors());

//** Routing
app.get("/", async (__req: Request, res: Response) => {
  res.status(200).json({ message: "Hello from the server!" });
});

// TODO => Using routes for whole application
app.use("/api/v1", routes);

// TODO => Global error handler Function
app.use(globalErrorHandler);

// TODO  => Not Found handler route
app.use(notFound);

export default app;