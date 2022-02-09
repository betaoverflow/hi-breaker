import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();
const PORT: number = 8080;
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send({ teamName: "Betaoverflow" });
});

app.listen(PORT, () => console.log("Server running at: " + PORT));
