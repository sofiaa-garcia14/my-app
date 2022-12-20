import React, { useState } from 'react';

const ItemCount = (props) => {
  const [counter, setCounter] = useState(1);
  const onAdd = () => counter < props.stock && setCounter(counter + 1);
  const onSubtract = () => setCounter(counter - 1);
  const handleChange = (e) => setCounter(e.target.value);

  return (
    <div className='d-flex justify-content-center'>
      <button className='btn btn-dark' onClick={onSubtract} disabled={counter > 1 ? false : true}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='bi bi-dash-lg'
          viewBox='0 0 16 16'
        >
          <path
            fillRule='evenodd'
            d='M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z'
          />
        </svg>
      </button>
      <input
        type='number'
        className='form-control'
        value={counter}
        onChange={handleChange}
        style={{ textAlign: 'center' }}
      />
      <button
        className='btn btn-dark'
        onClick={onAdd}
        disabled={counter < props.stock ? false : true}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='bi bi-plus-lg'
          viewBox='0 0 16 16'
        >
          <path
            fillRule='evenodd'
            d='M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z'
          />
        </svg>
      </button>
    </div>
  );
};

export default ItemCount;
