import React from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
// import Modal from 'components/Modal/Modal';

const ImageGallery = ({ hits }) => {
  return (
    <ul className={css.gallery}>
      {Array.isArray(hits) &&
        hits.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            // onClick={() => onOpenModal()}
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            largeImageURL={largeImageURL}
          ></ImageGalleryItem>
        ))}
      {/* <Modal></Modal> */}
    </ul>
  );
};
export default ImageGallery;
