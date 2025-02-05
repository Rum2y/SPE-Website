import express from "express";
import axios from "axios";
import cors from "cors";
import { configDotenv } from "dotenv";

configDotenv();
const app = express();

app.use(express.json());
const port = 3001;

app.use(cors());

app.get("/api/spe_members", async (req, res) => {
  try {
    const sheetId = process.env.SPE_SHEET_ID;
    const apiKey = process.env.API_KEY;
    const range = "Sheet1";

    const response = await axios.get(
      `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`
    );
    res.json(response.data.values);
  } catch (error) {
    console.error("Error fetching data", error);
    res.status(500).send("Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
