import React, { useEffect, useState } from "react";
import "./App.css";
import Favourite from "./Components/Favourite";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import TableBody from "./Components/TableBody";

const getLocalFav = () => {
  const list = localStorage.getItem("fav");
  // console.log(list);
  return list ? JSON.parse(list) : [];
};

const App = () => {
  const [coins, setCoins] = useState([]);
  const [coinsCount, setCoinsCount] = useState(20);
  const [order, setOrder] = useState("ASC");
  const [fav, setFav] = useState(getLocalFav());
  const [search, setSearch] = useState("");


  const addFav = (coin) => {
    if (fav.length >= 3) return;
    if (fav.some((elem) => coin.name == elem.name)) return;
    setFav([...fav, coin]);
  };

  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(fav));
  }, [fav]);

  const removeFav = (coin) => {
    if (fav.length == 0) return;
    const index = fav.findIndex((elem) => elem.id === coin.id);
    const arr = [...fav];
    // console.log(index);
    arr.splice(index, 1);
    setFav(arr);
  };

  const sortString = (col) => {
    if (order == "ASC") {
      const sort = [...coins].sort((a, b) => {
        console.log(a[col]);
        return a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1;
      });
      setCoins(sort);
      setOrder("DSC");
    }
    if (order == "DSC") {
      const sort = [...coins].sort((a, b) => {
        return a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1;
      });
      setCoins(sort);
      setOrder("ASC");
    }
  };

  const sortNum = (col) => {
    if (order == "ASC") {
      const sort = [...coins].sort((a, b) => {
        console.log(a[col]);
        if (col != "rank") return a[col] > b[col] ? 1 : -1;
        else return a[col] < b[col] ? 1 : -1;
      });
      setCoins(sort);
      setOrder("DSC");
    }
    if (order == "DSC") {
      const sort = [...coins].sort((a, b) => {
        if (col != "rank") return a[col] < b[col] ? 1 : -1;
        else return a[col] > b[col] ? 1 : -1;
      });
      setCoins(sort);
      setOrder("ASC");
    }
  };

  // let filteredCoins = coins;

  // const searchCall = (val) => {
  //   console.log(val);
  //   val = val.toLowerCase();
    
  //   // setCoins((coins) => filteredCoins);
    
  // };

  let filteredCoins = coins.filter((coin) => {
    // if (coin.name.toLowerCase().includes(val)) console.log(coin.name);
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });


  useEffect(() => {
    fetch(
      `https://api.coinstats.app/public/v1/coins?skip=0&limit=${coinsCount}`
    )
      .then((res) => res.json())
      .then((data) => setCoins(data.coins));
  }, [coinsCount]);

  return (
    <>
      <Navbar setSearch={setSearch} />
      <div className="main">
        <div className="background">
          <div className="para">
            <h3>
              List of Your Favourite crypto will be shown here, click on them to
              add now
            </h3>
          </div>
          {fav.length > 0 && (
            <table className="tableFav">
              <thead>
                <tr>
                  <td>Rank</td>
                  <td>Name</td>
                  <td className="numericalText">Price</td>
                  <td className="numericalText hide">Market Cap</td>
                  <td className="numericalText hide">Volume</td>
                  <td className="numericalText hide">Supply</td>
                  <td className="numericalText hide">Price Change(1H)</td>
                  <td className="numericalText hide">Price Change(1D)</td>
                  <td className="numericalText hide">Price Change(1W)</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {fav.map((coin) => (
                  <Favourite key={coin.id} coin={coin} removeFav={removeFav} />
                ))}
              </tbody>
            </table>
          )}
        </div>

        <table className="tableCoins">
          <thead>
            <tr>
              <td onClick={() => sortNum("rank")}>Rank</td>
              <td onClick={() => sortString("name")}>Name</td>
              <td onClick={() => sortNum("price")} className="numericalText">
                Price
              </td>
              <td
                onClick={() => sortNum("marketCap")}
                className="numericalText"
              >
                Market Cap
              </td>
              <td
                onClick={() => sortNum("volume")}
                className="numericalText hide"
              >
                Volume
              </td>
              <td
                onClick={() => sortNum("supply")}
                className="numericalText hide"
              >
                Supply
              </td>
              <td
                onClick={() => sortNum("priceChange1h")}
                className="numericalText hide"
              >
                Price Change(1H)
              </td>
              <td
                onClick={() => sortNum("priceChange1d")}
                className="numericalText hide"
              >
                Price Change(1D)
              </td>
              <td
                onClick={() => sortNum("priceChange1w")}
                className="numericalText hide"
              >
                Price Change(1W)
              </td>
            </tr>
          </thead>
          <tbody>
            {filteredCoins.map((coin, index) => (
              <TableBody key={coin.id} coin={coin} addFav={addFav} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="btnMore">
        <button onClick={() => setCoinsCount((e) => e + 20)} className="">
          Show more
        </button>
      </div>
      <Footer />
    </>
  );
};

export default App;
