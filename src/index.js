import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GlobalStyle from './styles/GlobalStyle';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ExchangeRates from './components/ExchangeRates';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  // uri: 'https://api.coinbase.com/v2/exchange-rates?currency=USD',
  // uri: "https://cors-anywhere.herokuapp.com/https://api.exchangeratesapi.io/latest",
  // uri: "http://api.exchangeratesapi.io/v1/latest?access_key=854cef511f8da19ae4ab44a17c552c08&symbols=USD,AUD,CAD,PLN,MXN&format=1",
  // uri: "https://free.currconv.com/api/v7/convert?q=USD_NGN&compact=ultra&apiKey=f82b0184c8a4ba9c4a44",
  // uri: "http://data.fixer.io/api/latest?access_key=0ce522574c9b9c51f85813161ed6c284",
  cache: new InMemoryCache()
});


ReactDOM.render(

  <ApolloProvider client={client}> 
      <React.StrictMode>
        <GlobalStyle/>
        <App />
      </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
