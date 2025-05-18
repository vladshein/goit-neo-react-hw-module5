import css from "./ImageCard.module.css";
import ReactModal from "react-modal";

const ImageCard = ({ photo, openModal }) => {
  return (
    <img
      src={photo.urls.small}
      alt={photo.alt_description}
      className={css.card}
      onClick={() => openModal(photo)}
    />
  );
};

export default ImageCard;
