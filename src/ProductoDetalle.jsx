import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './css/ProductoDetalle.css'; 

const ProductoDetalle = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(`https://api.mercadolibre.com/items/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error al obtener detalles del producto:', error);
      }
    };

    fetchProductDetail();
  }, [id]);

  const formatoPrecio = (price) => {
    return new Intl.NumberFormat('es-ES').format(price);
  };

  if (!product) {
    return <div>Cargando detalles del producto...</div>;
  }

  return (
    <div className="producto-detalle">
      <img src={product.pictures?.[0]?.url || product.thumbnail} alt={product.title} className="producto-imagen" />
      <div className="producto-info">
        <h1 className="producto-nombre">{product.title}</h1>
        <p className="producto-descripcion">
          La consola es marca <b>{product.attributes.find(attr => attr.id === 'BRAND')?.value_name || 'No disponible'}</b>,
          modelo <b>{product.attributes.find(attr => attr.id === 'MODEL')?.value_name || 'No disponible'} </b>
          de color <b>{product.attributes.find(attr => attr.id === 'COLOR')?.value_name || 'No disponible'} </b>
          con un peso aproximado de <b>{product.attributes.find(attr => attr.id === 'WEIGHT')?.value_name || 'No disponible'} </b>
          y su condición es <b>{product.condition === 'new' ? 'Nuevo' : 'Usado'}</b>.
        </p>
        <p className="producto-precio">Precio: ${formatoPrecio(product.price)}</p>
        <p className="producto-sku">SKU: {product.sku || 'No disponible'}</p>
        <button className="producto-button"> Comprar</button>
      </div>
    </div>
  );
};

export default ProductoDetalle;
