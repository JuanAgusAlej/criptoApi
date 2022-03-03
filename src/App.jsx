import React, { useEffect, useState } from "react";

import "./css/styles.css";
import { getCoins } from "./helpers/coinFetch";

function App() {
  const [coins, Setcoins] = useState({
    loading: true,
    datos: [],
  });

  useEffect(() => {
    getCoins().then((respuesta) => {
      console.log(respuesta);
      Setcoins({
        loading: false,
        datos: respuesta,
      });
    });
  }, []);

  return (
    <div children="container">
      <div className="row">
        <div className="col">
          <h1>CoinCap App</h1>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <table className="table table-coin">
            <thead>
              <tr>
                <th>Ranked</th>
                <th>Name</th>
                <th>Price Usd</th>
                <th>Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {coins.datos.map((coin) => (
                <tr key={coin.name}>
                  <td>{coin.rank}</td>
                  <td>{coin.name}</td>
                  <td>{coin.priceUsd}</td>
                  <td>{coin.marketCapUsd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
