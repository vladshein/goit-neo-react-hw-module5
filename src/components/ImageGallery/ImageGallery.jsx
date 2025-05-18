import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ photos, openModal }) => {
  return (
    <ul className={css.gallery}>
      {photos.map(photo => (
        <li key={photo.id}>
          <ImageCard photo={photo} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
