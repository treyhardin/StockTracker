import React, {useState} from "react";
import "./Menu.css";

const Menu = ({ stocksOwnedHandler }) => {
  const [symName, setSymName] = useState("");
  const [symNumber, setSymNumber] = useState(1);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    stocksOwnedHandler({symName: symName, symNumber: symNumber})

    // reset the form
    setSymName("")
    setSymNumber("")
  };

  return (
    <nav className="nav">
      <div className="logo-container">
        <span>
          <i className="fas fa-robot"></i>
        </span>{" "}
      </div>
      <form onSubmit={formSubmitHandler}>
        <input
          name="symbol"
          className="stock-input"
          type="text"
          placeholder=" Stonk Symbol"
          minLength="1"
          maxLength="10"
          value={symName}
          onChange={(e) => setSymName(e.target.value)}
        />
        <input
          name="number"
          className="stock-input"
          type="number"
          placeholder="# of Stonks"
          min="1"
          value={symNumber}
          onChange={(e)=> setSymNumber(e.target.value)}
        />
        <button className="stock-input btn" type="submit">Add Stonk</button>
      </form>
    </nav>
  );
};

export default Menu;
