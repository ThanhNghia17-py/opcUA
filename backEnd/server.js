const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
// Dữ liệu tạm giữ trong RAM
let latestData = {
  number1: "--",
  number2: "--"
};
// Middleware
app.use(cors());
app.use(express.json());
// Nhận dữ liệu từ PLC (gateway)
app.post("/data", (req, res) => {
  latestData = req.body;
  console.log("Dữ liệu nhận được:", latestData);
  res.json({ status: "received", data: latestData });
});
// WebApp gọi để hiển thị
app.get("/data", (req, res) => {
  res.json(latestData);
});
// Khởi chạy server
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
