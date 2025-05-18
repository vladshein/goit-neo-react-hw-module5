import { useState, useEffect } from "react";

import SearchBar from "./SearchBar/SearchBar";
import searchbar from "./SearchBar/SearchBar.module.css";
import css from "./App.module.css";
import ImageGallery from "./ImageGallery/ImageGallery";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { fetchPhotos } from "./api/api";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import Loader from "./Loader/Loader";
import ImageModal from "./ImageModal/ImageModal";

const App = () => {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modal, setModalOpen] = useState(false);
  const [selectedPhoto, setselectedPhoto] = useState(null);

  const handleQuery = inputQuery => {
    setQuery(inputQuery);
    setPage(1);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  const openModal = photo => {
    setselectedPhoto(photo);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setselectedPhoto(null);
  };

  useEffect(() => {
    if (!query) return;
    const getPhotos = async () => {
      try {
        setLoading(true);
        setError(false);
        const { data } = await fetchPhotos(query, page);
        console.log("Data is", data);
        setPhotos(prev =>
          page === 1 ? [...data.results] : [...prev, ...data.results]
        );
      } catch (error) {
        setError(true);
        setPhotos([]);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getPhotos();
  }, [query, page]);

  return (
    <div className={css.app}>
      <SearchBar
        className={searchbar.searchbar}
        onSubmit={handleQuery}
        isDisabled={loading}
      />
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {!photos.length && !loading ? (
        <h2>No results, please enter new query.</h2>
      ) : (
        <ImageGallery photos={photos} openModal={openModal} />
      )}

      {photos.length > 0 && <LoadMoreBtn handleMore={handleLoadMore} />}
      <ImageModal
        modalOpen={modal}
        closeModal={closeModal}
        selectedPhoto={selectedPhoto}
      />
    </div>
  );
};

export default App;
