// import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const query = form.elements.input.value;

    if (query.trim() === "") {
      toast.error("Please enter your query.");
      return;
    }

    onSubmit(query);
    form.reset();
  };

  return (
    <header>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <input
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
