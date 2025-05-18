import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const photos = form.elements.input.value;

    if (photos.trim() === "") {
      toast.error("Please enter your query.");
      return;
    }

    onSubmit(photos);
    form.reset();
  };

  return (
    <header>
      <Toaster />
      <form className={css.searchbar} onSubmit={handleSubmit}>
        <input
          className={css.forminput}
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
