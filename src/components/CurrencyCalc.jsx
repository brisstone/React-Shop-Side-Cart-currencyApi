import React, { useState, useEffect } from "react";
import { EXCHANGE_RATES } from "../graphql/Queries";
import { useQuery } from '@apollo/client';
import styled from 'styled-components';


export default function CurrencyCalc(props) {

  const [currency1, setCurrency1] = useState('USD');




  // get updatedcurrency1 somewhere
//   var updatedcurrency1 = setCurrency1

//  useEffect(() => {

//   handleCurrencyChange();
    
//     // at this point, currentItem will always be the latest state, as it runs when currentItem changes
//   }, [updatedcurrency1]) 



  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;


  const handleCurrencyChange = (e) => {

    setCurrency1(e.target.value)


    console.log(e.target.value)

    data.rates.filter(e => {

      if (e.currency === currency1) {
        console.log(e.rate)
        console.log(e.currency)


       //sumup total
        const itemsPrice = Number(props.itemsPrice) * Number(e.rate)
        console.log(itemsPrice)
        var exchangeRate = e.rate;

        props.pull_ItemsPrice(exchangeRate, currency1);

        return currency1;

      } else {
        return "CURENCY NOT FOUND"
      }

    })
  }



  return error ? <CurrencyCalcStyle>
    <select className="selectOption" >
      <option className="currencyOption">USD</option>
    </select>
  </CurrencyCalcStyle> :

    <CurrencyCalcStyle>
      <select className="selectOption" value={currency1} onChange={(e) => handleCurrencyChange(e)}>

        {data.rates.map((item) => (<option className="currencyOption" key={item.currency} value={item.currency}>{item.currency}</option>))

        }
      </select>
    </CurrencyCalcStyle>
}


const CurrencyCalcStyle = styled.div`
  /* background-color: #7a776b; */
  color: white;

  .selectOption{
      background-color: white;
      height: 30px;
      border: none;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      width: 75px;
      font-size: 15px;
  }

  .currencyOption{

  }

`;
