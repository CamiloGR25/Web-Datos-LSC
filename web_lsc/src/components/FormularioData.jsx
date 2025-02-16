import React, { useState } from "react";
import '../styles/FormularioData.css';

const categorias = ["A", "B", "C"];

export default function FormularioData() {
  const [formData, setFormData] = useState({
    categoria: "",
    subcategoria: "",
    img: "",
    imgExplicacion: "",
    movimiento: "",
    posicion: "",
    titulo: "",
    video: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Subir datos:", formData);
  };

  return (
    <div className="form-container">
      <h1 className="titulo">AÑADIR NUEVA PALABRA</h1>
      <h3 className="text">Ingresa el nombre de la palabra:</h3>
      <input
        type="text"
        name="titulo"
        placeholder="Título"
        value={formData.titulo}
        onChange={handleChange}
        className="form-input"
      />
      <h3 className="text">Selecciona la categoría de la palabra:</h3>
      <select
        name="categoria"
        value={formData.categoria}
        onChange={handleChange}
        className="form-select"
      >
        <option value="">Seleccionar Categoría:</option>
        {categorias.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <h3 className="text">Ingresa el texto explicativo del movimiento de las manos:</h3>
      <input
        type="text"
        name="movimiento"
        placeholder="Movimiento"
        value={formData.movimiento}
        onChange={handleChange}
        className="form-input"
      />
      <h3 className="text">Ingresa el texto explicativo de la posición de manos:</h3>
      <input
        type="text"
        name="posicion"
        placeholder="Posición"
        value={formData.posicion}
        onChange={handleChange}
        className="form-input"
      />
      <h3 className="text">Ingresa la URL de la imagen/simbolo de la palabra:</h3>
      <input
        type="text"
        name="img"
        placeholder="URL Imagen"
        value={formData.img}
        onChange={handleChange}
        className="form-input"
      />
      <h3 className="text">Ingresa la URL de la imagen explicativa:</h3>
      <input
        type="text"
        name="imgExplicacion"
        placeholder="URL Imagen Explicación"
        value={formData.imgExplicacion}
        onChange={handleChange}
        className="form-input"
      />
      <h3 className="text">Ingresa la URL del video explicativo:</h3>
      <input
        type="text"
        name="video"
        placeholder="URL Video"
        value={formData.video}
        onChange={handleChange}
        className="form-input"
      />
      <div className="botones-container">
        <button onClick={handleSubmit} name="añadir" className="form-button añadir">
          Añadir
        </button>
        <button name="eliminar" className="form-button eliminar">
          Eliminar
        </button>
      </div>
    </div>
  );
}