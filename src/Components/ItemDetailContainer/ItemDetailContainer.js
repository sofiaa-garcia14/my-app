import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import './styles.css';

const ItemDetailContainer = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const baseUrl = 'https://fakestoreapi.com';

  useEffect(() => {
    fetch(`${baseUrl}/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
