import { useState } from "react";

export const Header = (props) => {
  const [search, setSearch] = useState("");
  const changing = (event) => {
    setSearch(event.target.value);
    props.filter(event.target.value);
  };

  return (
    <header>
      <img src="" alt="react ecommerce"></img>
      <form>
        <input
          value={search}
          onChange={changing}
          type="text"
          placeholder="Search..."
        ></input>
      </form>
    </header>
  );
};
