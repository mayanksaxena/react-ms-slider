import React, { useRef, useState, useEffect } from 'react';
import { arrayOf, element, number } from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import './slider.scss';

const Slider = ({ items, itemsPerPage, numberOfItemsMovable }) => {
  const ref = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [slidePosTemp, setSlidePosTemp] = useState(0);

  useEffect(() => {
    if (!ref.current || !ref.current.getBoundingClientRect().width) return;
    const singleItemWidth = ref.current.getBoundingClientRect().width;
    setContainerWidth(items.length * singleItemWidth);
  }, [items]);
  const slider = (direction) => {
    const singleItemWidth = containerWidth / items.length;
    const singleMoveableWidth = singleItemWidth * numberOfItemsMovable;
    const newPosition =
      direction === 'next'
        ? slidePosTemp - singleMoveableWidth
        : slidePosTemp + singleMoveableWidth;

    if (newPosition > 0) {
      return;
    }
    if (newPosition < -(containerWidth - itemsPerPage * singleItemWidth)) {
      return;
    }

    setSlidePosTemp(newPosition);
  };

  return (
    <section className="slider-section-container infinite-carousel">
      <div
        className="slider-content"
        style={{ width: (containerWidth / items.length) * itemsPerPage }}
      >
        <ul
          style={{ width: containerWidth, marginLeft: slidePosTemp }}
          className="carousel-ul"
        >
          {items.map((item) => (
            <li ref={ref} key={new Date()} className="carousel-li">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="slider-controls">
        <button type="button" className="next" onClick={() => slider('next')}>
          Next
        </button>
        <button type="button" className="prev" onClick={() => slider('prev')}>
          Prev
        </button>
      </div>
    </section>
  );
};

Slider.propTypes = {
  items: arrayOf(element).isRequired,
  itemsPerPage: number,
  numberOfItemsMovable: number,
};

Slider.defaultProps = {
  itemsPerPage: 2,
  numberOfItemsMovable: 2,
};

export default Slider;
