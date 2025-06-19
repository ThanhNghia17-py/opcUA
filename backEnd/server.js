const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
let latestData = { number1: "--", number2: "--" };
app.post("/data", (req, res) => {
  latestData = req.body;
  console.log("📥 Dữ liệu nhận được:", latestData);
  res.json({ status: "received", data: latestData });
});
app.get("/data", (req, res) => {
  res.json(latestData);
});
app.listen(PORT, () => {
  console.log(`✅ Server đang chạy tại PORT: ${PORT}`);
});
