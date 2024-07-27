const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = 8080;
const lineData = {
  labels: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
  datasets: [
    {
      label: "Dataset 1",
      data: [65, 59, 80, 81, 56, 55],
      fill: false,
      borderColor: "#7F00FF",
      tension: 0.1,
    },
    {
      label: "Dataset 2",
      data: [28, 48, 40, 19, 86, 27],
      fill: false,
      borderColor: "#00D1FF",
      tension: 0.1,
    },
  ],
};

const barData = {
  labels: ["17", "18", "19", "20", "21", "22", "23", "24", "25"],
  datasets: [
    {
      label: "Dataset 1",
      data: [12, 19, 3, 5, 2, 3, 7, 8, 9],
      backgroundColor: "#7F00FF",
    },
    {
      label: "Dataset 2",
      data: [2, 3, 20, 5, 1, 4, 8, 9, 10],
      backgroundColor: "#00D1FF",
    },
  ],
};
app.get("/tableData", (req, res) => {
  try {
    res.status(200).json({ barData, lineData });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
