import React, {useState, useEffect, useSelector, dispatch,} from "react";
import Select from 'react-select'
import { EXCHANGE_RATES } from "../graphql/Queries";
import { useQuery } from '@apollo/client';
import styled from 'styled-components';

  
  export default function CurrencyCalc(props) {
    // const [amount1, setAmount1] = useState(1);
    // const [amount2, setAmount2] = useState(1);
    const [currency1, setCurrency1] = useState('');
    // const [currency2, setCurrency2] = useState('EUR');
    // const [rates, setRates] = useState([]);

    // const currentItem = useSelector(state => state.currentItem);
    // const updateCurrentItem = data => dispatch({ type: 'DO_SOMETHING', payload: data })



    // // use updateCurrentItem somewhere

    // useEffect(() => {

    //   // at this point, currentItem will always be the latest state, as it runs when currentItem changes
      
    //   setCurrency1(currentItem.price)
      
    //   }, [currentItem])



    const { loading, error, data } = useQuery(EXCHANGE_RATES);
    // console.log(data);
    if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error :(</p>;
  
    var selectCurrency = true;

      console.log(data)
      // console.log((data.rates));


      const handleCurrencyChange =  (e) => {
        setCurrency1(e.target.value) 
        selectCurrency = false;
          console.log()
        const rate = data.rates.filter(e =>{
          if (e.currency == currency1){
            console.log(e.rate)
            console.log(e.currency)
            

            // const itemsPrice = cartItems.reduce((a,b)=> Number(a) + Number(b.price) * Number(b.qty), 0);
            const itemsPrice = Number(props.itemsPrice) * Number(e.rate) 
            console.log(itemsPrice)
            var exchangeRate = e.rate;
          
            props.pull_ItemsPrice(exchangeRate, currency1);

            return exchangeRate
            
          }

          
        })
      }
      


      return error? <CurrencyCalcStyle>
      <select className="selectOption" >
          <option className="currencyOption">USD</option>
      </select>
      
      
     
      </CurrencyCalcStyle> :

      <CurrencyCalcStyle>
      <select className="selectOption" value={currency1}  onChange={(e) => handleCurrencyChange(e)}>

      {data.rates.map((item, e) => (<option className="currencyOption" key={item.currency} value={item.currency}>{item.currency}</option> ))

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
  