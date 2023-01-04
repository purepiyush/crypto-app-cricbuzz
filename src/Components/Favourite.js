import React from "react";
import intToString from "../utils/intToString";
import "./Favourite.css"
const Favourite = ({ coin,removeFav }) => {
  return (
    // <div>
    //   <div className='favName'>
    //     <div>
    //         <img src={coin.icon}/>
    //     </div>
    //     <div>{coin.name}</div>
    //     <div>{coin.symbol}</div>
    //   </div>
    //   <div className='favPrice'>
    //     <div>Price</div>
    //     <div>${intToString(coin.price)}</div>
    //   </div>
    //   <div className='favMarketCap'>
    //     <div>Market Cap</div>
    //     <div>${intToString(coin.marketCap)}</div>
    //   </div>
    //   <div className='favVolume'>
    //     <div>Volume</div>
    //     <div>${intToString(coin.volume)}</div>
    //   </div>
    //   <div className='favSupply'>
    //     <div>Supply</div>
    //     <div>${intToString(coin.totalSupply)}</div>
    //   </div>
    //   <div className='favPCH'>
    //     <div>Price Change(1H)</div>
    //     <div>{coin.priceChange1h}%</div>
    //   </div>
    //   <div className='favPCD'>
    //     <div>Price Change(1D)</div>
    //     <div>{coin.priceChange1d}%</div>
    //   </div>
    //   <div  className='favPCW'>
    //     <div>Price Change(1W)</div>
    //     <div>{coin.priceChange1w}%</div>
    //   </div>
    //   <div>
    //     <button>
    //         remove
    //     </button>
    //   </div>
    // </div>

      
          <tr>
            <td>{coin.rank}</td>
            <td className="name-image-symbol">
              <img src={coin.icon} />
              <div className="name-symbol">
                <span className="name"><b>{coin.name}</b></span>
                <span className="symbol">{coin.symbol}</span>
              </div>
            </td>
            <td>${coin.price.toFixed(2)}</td>
            <td>${intToString(coin.marketCap)}</td>
            <td>${intToString(coin.volume)}</td>
            <td>${intToString(coin.totalSupply)}</td>
            <td>{coin.priceChange1h}%</td>
            <td>{coin.priceChange1d}%</td>
            <td>{coin.priceChange1w}%</td>
            <td>
              <button onClick={()=>removeFav(coin)} className="removeBtn">remove</button>
            </td>
          </tr>
  );
};

export default Favourite;
