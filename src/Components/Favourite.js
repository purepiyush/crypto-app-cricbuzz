import React from "react";
import intToString from "../utils/intToString";
import "./Favourite.css";
const Favourite = ({ coin, removeFav }) => {
  return (
    <tr>
      <td>{coin.rank}</td>
      <td className="name-image-symbol">
        <img src={coin.icon} />
        <div className="name-symbol">
          <span className="name">
            <b>{coin.name}</b>
          </span>
          <span className="symbol">{coin.symbol}</span>
        </div>
      </td>
      <td>${coin.price.toFixed(2)}</td>
      <td className="hide">${intToString(coin.marketCap)}</td>
      <td className="hide">${intToString(coin.volume)}</td>
      <td className="hide">${intToString(coin.totalSupply)}</td>
      <td className="hide">{coin.priceChange1h}%</td>
      <td className="hide">{coin.priceChange1d}%</td>
      <td className="hide">{coin.priceChange1w}%</td>
      <td>
        <button onClick={() => removeFav(coin)} className="removeBtn">
          remove
        </button>
      </td>
    </tr>
  );
};

export default Favourite;
