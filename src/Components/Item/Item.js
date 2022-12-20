import { useNavigate } from 'react-router-dom';
import './styles.css';

const Item = (props) => {
  const { id, title, description, price, pictureUrl } = props;

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/item/${id}`;
    navigate(path);
  };

  return (
    <>
      <div className='card card-hover-shadow m-3' style={{ width: '18rem' }} onClick={routeChange}>
        <img src={pictureUrl} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{title.length > 29 ? `${title.slice(0, 29)}...` : title}</h5>
          <p className='card-text'>
            {description.length > 29 ? `${description.slice(0, 29)}...` : description}
          </p>
          <p className='card-text'>${price}</p>
        </div>
      </div>
    </>
  );
};

export default Item;
