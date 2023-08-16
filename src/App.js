import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/bill.routes.js";
import cookieParser from "cookie-parser";

const App = express();

App.use(morgan("dev"));
App.use(express.json());
App.use(cookieParser());
App.use("/api", authRoutes);
App.use("/api", taskRoutes);

export default App;
