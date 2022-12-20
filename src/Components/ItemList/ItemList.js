import { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './styles.css';

const ItemList = (props) => {
  const { id } = props;
  const baseUrl = 'https://fakestoreapi.com';
  const [loading, setLoading] = useState(true);
  const [productItems, setproductItems] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/products${id ? '/category/' + id : ''}`)
      .then((res) => res.json())
      .then((data) => setproductItems(data));
    setLoading(false);
  }, [id]);

  const items = productItems.map(({ id, title, description, price, image }) => {
    return (
      <Item
        key={id}
        id={id}
        title={title}
        description={description}
        price={price}
        pictureUrl={image}
      />
    );
  });

  return <div className='container'>{loading ? <p>Loading...</p> : items}</div>;
};

export default ItemList;
