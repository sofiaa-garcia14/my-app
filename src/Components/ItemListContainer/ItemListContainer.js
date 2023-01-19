import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  const { id } = useParams();
  return <ItemList id={id} />;
};

export default ItemListContainer;
