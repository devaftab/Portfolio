import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import MongoDB_connection from "./DB/MondoDB_conection.js";
import contactRoute from "./routes/contactRoute.js";
// import path from "path";
// import { fileURLToPath } from "url";
module.exports = (req, res) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://my-portfolio-1k7cxgcsq-technophile.vercel.app"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Handle your POST request here
  res.status(200).json({ message: "Success" });
};

const app = express();
//deployement start
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use(express.static(path.join(__dirname, "/frontend/dist")));
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "/frontend/dist", "index.html"));
// });
//deployement end

dotenv.config();
const corsOptions = {
  origin: ["https://my-portfolio-nkbfo3rgx-technophile.vercel.app/"],
  methods: ["POST", "GET"],
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.port || 5000;

app.use("/api", contactRoute);

app.listen(PORT, () => {
  MongoDB_connection();
  console.log(`server listening on port ${PORT}`);
});
