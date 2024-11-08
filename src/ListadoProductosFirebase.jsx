import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from './FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore'; 
import './css/ListadoProductos.css'; 

const ListadoProductosFirebase = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "productos"));
        
        const productsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data() 
        }));
        
        setProducts(productsData);
      } catch (error) {
        console.error("Error al obtener productos de Firebase:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      <h1>Listado de Productos Firebase</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <div className="product-container">
              <div className="product-details-firebase">
                <h2>{product.nombre}</h2>
                <p>Precio: ${product.precio}</p>
                <button className="product-button" >Ver detalle</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListadoProductosFirebase;
