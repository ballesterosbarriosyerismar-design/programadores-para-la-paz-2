const express = require("express");

const app = express();

app.use(express.json());

app.post("/registro", (req, res) => {
  const datos = req.body;

  console.log("Datos recibidos:", datos);

  res.json({
    mensaje: "Registro recibido correctamente",
    datos: datos
  });
});

app.post("/incidencia", (req, res) => {
  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;

  res.json({
    mensaje: "Incidencia registrada",
    tipo: tipo,
    descripcion: descripcion
  });
});

app.listen(3000, () => {
  console.log("Servidor ejecutándose en puerto 3000");
});
