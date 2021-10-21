import React, { useState, useEffect } from "react";
import { EXCHANGE_RATES } from "../graphql/Queries";
import { useQuery } from '@apollo/client';
import styled from 'styled-components';


export default function CurrencyCalc(props) {

  const [currency1, setCurrency1] = useState('');




  // get updatedcurrency1 somewhere
  var updatedcurrency1 = setCurrency1

  useEffect(() => {

    if (setCurrency1) {

      setCurrency1(setCurrency1)

    }
    // at this point, currentItem will always be the latest state, as it runs when currentItem changes
  }, [updatedcurrency1])



  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;



  console.log(data)

  const getCurrencyMatch = (e) => {



  }


  const handleCurrencyChange = async (e) => {
    setCurrency1(e.target.value)


    try {
      getCurrencyMatch(e.target.value)

      console.log(e.target.value)

      await data.rates.filter(e => {

        if (e.currency === currency1) {
          console.log(e.rate)
          console.log(e.currency)
          setCurrency1(currency1)
          // setCurrency1(e.target.value);

          const itemsPrice = Number(props.itemsPrice) * Number(e.rate)
          console.log(itemsPrice)
          var exchangeRate = e.rate;

          props.pull_ItemsPrice(exchangeRate, currency1);

          return setCurrency1(currency1);

        } else {
          return "no match"
        }

      })
    } catch (e) {
          console.log(e)
    }




  }



  return error ? <CurrencyCalcStyle>
    <select className="selectOption" >
      <option className="currencyOption">USD</option>
    </select>
  </CurrencyCalcStyle> :

    <CurrencyCalcStyle>
      <select className="selectOption"  value={currency1} onChange={(e) => handleCurrencyChange(e)}>

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
