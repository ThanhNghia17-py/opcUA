const axios = require("axios");

const data = {
  number1: 123,
  number2: 456
};

axios.post("https://opcua-2.onrender.com/data", data)
  .then(response => {
    console.log("✅ Đã gửi dữ liệu thành công:", response.data);
  })
  .catch(error => {
    console.error("❌ Lỗi khi gửi dữ liệu:", error.message);
  });
