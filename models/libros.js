const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/biblioteca", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const librosSchema = new mongoose.Schema(
  {
    titulo: String,
    author: String,
  },
  { collection: "libros" }
);

const libros = mongoose.model("libros",librosSchema);

module.exports = libros;