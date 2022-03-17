import {useState, useEffect} from "react";

function App(){
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [selected, setResult] = useState(0);
  const hadleInput = (event) => setMoney(event.target.value);
  const setChange = (event) => setResult(event.target.value);
   useEffect(()=> {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response)=> response.json())
      .then((json)=> {
        setCoins(json);
        setLoading(false);
      });
      
   },[])
  return(
    <div>
      <h1>The Coins! {loading ? "": `(${coins.length})`}</h1>
        <input 
          onChange={hadleInput}
          type= "number"
          placeholder="How much money are you going to exchange?"
          style={{
            width:"300px"
          }}
          />USD 
       <br/>
      {loading ? <strong>loading...</strong> : (
         <select onChange={setChange}>
         {coins.map(
           (coin, index) =>( 
           <option key={index} value={coin.quotes.USD.price}>
             {coin.name} ({coin.symbol}: ${coin.quotes.USD.price}USD)
             </option>
            ))}
       </select>
      )}
      <br/>
     <h3> you can get {selected == 0 ? "0" : money / selected} coins!</h3>
    </div>
  )
}
export default App;
