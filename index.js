const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "this was just a test v2" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
