import React, {useState, useEffect} from 'react';
import { EXCHANGE_RATES } from '../graphql/Queries';
import { useQuery, useLazyQuery, from } from '@apollo/client';

import axios from 'axios';



export default function ExchangeRates() {
  const [currencyoptions, setCurrencyoptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState();


  const baseUrl = "http://api.exchangeratesapi.io/v1/latest?access_key=854cef511f8da19ae4ab44a17c552c08"
  console.log(exchangeRate);
  console.log(fromCurrency)
  // const { loading, error, data } = useQuery(EXCHANGE_RATES);
  //    console.log(data.rates);
  //    if (loading) return <p>Loading...</p>;
  //    if (error) return <p>Error :(</p>;


      // const [getCurrency, {loading, error, data} ] = useLazyQuery(EXCHANGE_RATES);
      // // console.log(data.rates);
      // if (loading) return <p>Loading...</p>;
      // if (error) return <p>Error :(</p>;
 
  useEffect(() => {
    if(fromCurrency != null && toCurrency != null){
      axios(`${baseUrl}?base=${fromCurrency}&symbols=${toCurrency}`)
      .then(res =>{
        setExchangeRate(res.data.rates[toCurrency]);
      } )
    }
   
  }, [fromCurrency, toCurrency])

  useEffect(() => {
    axios("http://api.exchangeratesapi.io/v1/latest?access_key=854cef511f8da19ae4ab44a17c552c08 ")
    .then(response =>{
      const firstCurrency = Object.keys(response.data.rates)[0];
      console.log(response.data.base);
      setCurrencyoptions([response.data.base, ...Object.keys(response.data.rates)]);
      // setFromCurrency([response.data.base]);
      setFromCurrency(Object.keys(response.data.rates)[106]);
      setToCurrency(firstCurrency);
      setExchangeRate(response.data.rates[firstCurrency]);
    })
    
  }, [])

  http://api.exchangeratesapi.io/v1/convert?access_key=854cef511f8da19ae4ab44a17c552c08&from=GBP&to=JPY&amount=25

  // let toAmount;
  // const outputCurrent = ()=>{
  //   toAmount = fromCurrency
  // }
  
  //  console.log(setCurrencyoptions)

      // const currencyy = data.rates;
      // console.log(data)
      // console.log(currencyy);

      // console.log(setCurrencyoptions);


    // return data.rates.map(({ currency, rate }) => (
    //   <div key={currency}>
    //     <p>


    //       {currency}: {rate}
    //       <Conversion currency={currency} rate={rate} />
    //     </p>

    //   </div>


    // ));


    // data.rates.map((d)=> setCurrencyoptions(d.keys[0])  );
    //   console.log(currencyoptions);

    // setCurrencyoptions([...Object.keys(data.rates)]);

    return (
      <>

        
        <h2>converter</h2>

        <div>
          <input type="text"  />
          {/* onChange={(e) =>{setFromCurrency(e.target.value) }} */}
          <select name="" id=""  >

          <option value={fromCurrency} >{fromCurrency}</option>

            {/* {currencyoptions.map(option =>(
              <option key={option} value={fromCurrency}>{fromCurrency}</option>
            ))} */}

          </select>


          <input type="text"  />
          <select name="" id="" onChange={(e) =>{setToCurrency(e.target.value) }}>
            {currencyoptions.map(option =>(
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {/* <button onClick={()=> getCurrency(setCurrencyoptions)} >SUBMIT</button> */}
        </div>

        {/* {console.log(data)} */}

      </>
    )
}



