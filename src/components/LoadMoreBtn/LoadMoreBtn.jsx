import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handleMore }) => {
  return (
    <button className={css.btn} onClick={handleMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
