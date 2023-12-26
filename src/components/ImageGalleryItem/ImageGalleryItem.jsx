import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, tags }) => {
  return (
    <li className={css.galleryItem}>
      <img className={css.itemImage} src={webformatURL} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;
