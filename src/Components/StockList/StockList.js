import React, { useState, useEffect } from "react";
import "./StockList.css";
import StockCard from "../StockCard/StockCard";

function StockList({ stocksOwned }) {
  return (
    <table className="StockList">
      <thead>
        <tr>
          <th className="caption">Symbol</th>
          <th className="caption">Equity</th>
          <th className="caption">Dividends</th>
          <th className="caption">Price</th>
        </tr>
      </thead>
      <tbody>
        {stocksOwned.length >= 1 &&
          stocksOwned.map((stockObj) =>
          <StockCard key={stockObj.symName} symbol={`${stockObj.symName}`} shares={`${stockObj.symNumber}`} avgPrice="25.00" />
          )}

        {/* <StockCard symbol="BXMT" shares="4" avgPrice="52.49" />
        <StockCard symbol="SHOP" shares="10" avgPrice="120.12" /> */}
      </tbody>
    </table>
  );
}

export default StockList;
