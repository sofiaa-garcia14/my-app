import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFirebase from '../../hook/useFirebase';
import ItemDetail from '../ItemDetail/ItemDetail';
import './styles.css';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { product, getProduct } = useFirebase();

  useEffect(() => {
    getProduct(id);
  }, []);

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
