import styled from 'styled-components';
import Products from './components/Products';
import Home from './pages/Home';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import React, {useState} from 'react';







function App() {
  // const [isToggle, setisToggle] = useState(false)

  // const client = new ApolloClient({
  //   // uri: 'https://48p1r2roz4.sse.codesandbox.io',
  //   // uri: 'https://api.coinbase.com/v2/exchange-rates?currency=USD',
  //   // uri: "https://cors-anywhere.herokuapp.com/https://api.exchangeratesapi.io/latest",
  //   uri: "http://api.exchangeratesapi.io/v1/latest?access_key=854cef511f8da19ae4ab44a17c552c08&symbols=USD,AUD,CAD,PLN,MXN&format=1",
  //   // uri: "https://free.currconv.com/api/v7/convert?q=USD_NGN&compact=ultra&apiKey=f82b0184c8a4ba9c4a44",
  //   cache: new InMemoryCache()
  // });

  return (
    
    // <ApolloProvider client={client}> 
    //     <AppStyled>
    //       <Home/>
    //       {/* <Sidebar isToggle={isToggle} setisToggle={setisToggle}/> */}
    //         {/* <ExchangeRates/> */}
    //     </AppStyled>
    // </ApolloProvider>

      <AppStyled>
        {/* <ExchangeCalc/> */}
      <Home/>
      {/* <Sidebar isToggle={isToggle} setisToggle={setisToggle}/> */}
        {/* <ExchangeRates/> */}

      {/* <Currencyinbox/> */}

      </AppStyled>
    

   
  );
}


const AppStyled = styled.div`
  /* background-color: green ; */
`;

export default App;
