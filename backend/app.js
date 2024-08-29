import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import MongoDB_connection from "./DB/MondoDB_conection.js";
import contactRoute from "./routes/contactRoute.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
//deployement start
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// app.use(express.static(path.join(__dirname, "/frontend/dist")));
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "/frontend/dist", "index.html"));
// });
//deployement end

dotenv.config();
const corsOptions = {
  origin: true,
  methods: ["POST", "GET"],
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.port || 5000;

app.use("/api", contactRoute);

app.use('/', express.static(path.join(__dirname, '../frontend/dist'), {maxAge: 0}));
app.get('/*', (req, res) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.sendFile(path.join(__dirname, '../../frontend/dist', 'index.html'));
});


app.listen(PORT, () => {
  MongoDB_connection();
  console.log(`Server listening on the port ${PORT}`);
});
