import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/ListadoProductos.css'; 

const ListadoProductos = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'https://api.mercadolibre.com/sites/MLA/search?q=playstation&limit=4'
        );
        setProducts(response.data.results);
      } catch (error) {
        console.error('Error MercadoLibre API:', error);
      }
    };

    fetchProducts();
  }, []);

  const VerDetalle = (id) => {
    navigate(`/productos/${id}`); 
  };

  return (
    <div className="product-list">
      <h1>Listado de Productos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <div className="product-container">
              <div className="product-image">
                <img src={product.thumbnail} alt={product.title} />
              </div>
              <div className="product-details">
                <h2>{product.title}</h2>
                <button className="product-button" onClick={() => VerDetalle(product.id)}>Ver detalle</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListadoProductos;
