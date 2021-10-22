import React, { useState, useEffect } from "react";
import { EXCHANGE_RATES } from "../graphql/Queries";
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import CurrencyOption from "./CurrencyOption";


export default function CurrencyCalc(props) {

  const [currency1, setCurrency1] = useState('USD');



  useEffect(() => {

    if (data) {
      const initialcurrency = data.rates[0].currency;
      setCurrency1(data.rates[initialcurrency]);
      // console.log(currency1);

      data.rates.filter(item => {


        if (item.currency === currency1) {
          // console.log(item.rate)
          // console.log(item.currency)

          //sumup total
          // const itemsPrice = Number(props.itemsPrice) * Number(item.rate)
          // console.log(itemsPrice)
          var exchangeRate = item.rate;

          props.pull_ItemsPrice(exchangeRate, currency1);

          return currency1;
        } else {
          return "CURENCY NOT FOUND"
        }

      })
    }

  }, [props, currency1])


  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;



  const handleCurrencyChange = (e) => {

    setCurrency1(e.target.value)


    // console.log(e.target.value)

    data.rates.filter(e => {

      if (e.currency === currency1) {
        // console.log(e.rate)
        // console.log(e.currency)


        //sumup total
        // const itemsPrice = Number(props.itemsPrice) * Number(e.rate)
        // console.log(itemsPrice)
        var exchangeRate = e.rate;

        props.pull_ItemsPrice(exchangeRate, currency1);

        return currency1;

      } else {
        return "CURENCY NOT FOUND"
      }

    })
  }



  return error || loading ? <CurrencyCalcStyle>
    <select className="selectOption" >
      <option className="currencyOption">USD</option>
    </select>
  </CurrencyCalcStyle> :


    <CurrencyOption
      data={data}
      currency1={currency1}
      onChangeCurrency1={e => handleCurrencyChange(e)}
    />

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
