import React from "react";
import intToString from "../utils/intToString";

const TableBody = ({ coin, addFav }) => {
  return (
    <tr>
      <td>{coin.rank}</td>
      <td className="name-image-symbol">
        <img src={coin.icon} />
        <div className="name-symbol" onClick={() => addFav(coin)}>
          <span className="name"><b>{coin.name}</b></span>
          <span className="symbol">{coin.symbol}</span>
        </div>
      </td>
      <td className="numericalText">${coin.price.toFixed(2)}</td>
      <td className="numericalText">${intToString(coin.marketCap)}</td>
      <td className="numericalText">${intToString(coin.volume)}</td>
      <td className="numericalText">${intToString(coin.totalSupply)}</td>
      <td className="numericalText" className={coin.priceChange1d>0 ? "green" : "red"} >{coin.priceChange1h}%</td>
      <td className="numericalText" className={coin.priceChange1d>0 ? "green" : "red"}>{coin.priceChange1d}%</td>
      <td className="numericalText" className={coin.priceChange1d>0 ? "green" : "red"}>{coin.priceChange1w}%</td>
    </tr>
  );
};

export default TableBody;
