import React, {useState} from "react";
import Search from "./SearchForm.module.css"

const SearchForm = ({ filterPokemon, inputChangeHandler }) => {
  const [input, setInput] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value.toLowerCase());
  };

  const submitForm = ((e) => {
	e.preventDefault()
	filterPokemon(input)
	setInput("")

  })

  const resetForm = ((e) => {
	e.preventDefault()
	filterPokemon(input)
	setInput("")

  })

  return (
    <form className={Search.form}>
      <input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={onInputChange}
      />
      <button className={Search.btn} type="submit" onClick={submitForm}>Search</button>
      <button className={Search.btnHome} type="button" onClick={resetForm}>Home</button>
    </form>
  );
};

export default SearchForm;
