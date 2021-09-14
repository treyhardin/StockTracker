import React, {useState} from "react";
import "./App.css";
import StockList from "./Components/StockList/StockList";
import Menu from "./Components/MenuBar/Menu";

const { REACT_APP_API_KEY } = process.env;

function App() {
  // State for object of arrays
  const [stocksOwned, setStocksOwned]= useState([]);
  const [stockDataBank, setStockDataBank] = useState([]);



  const stocksOwnedHandler = (stockObj) => {
    setStocksOwned([...stocksOwned, stockObj]);
  }

  return (
    <div className="App">
      <Menu stocksOwnedHandler={stocksOwnedHandler} />
      <header className="App-header"></header>
      <StockList stocksOwned={stocksOwned}/>
    </div>
  );
}

export default App;
