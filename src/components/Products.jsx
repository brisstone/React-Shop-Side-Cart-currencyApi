import React from 'react';
import { ProductsData } from '../dummyData';
import { productsdata } from '../data';
import styled from 'styled-components';
import { Link, BrowserRouter } from 'react-router-dom';
import Sidebar from './Sidebar';


export default function Products(props) {
  const {onAdd, Togglesidebar} = props;

  const openMenu =  () => {
      // document.querySelector(".sidebar").classList.add("open")
  }

  const PerformCartSide =  (product) => {
    onAdd(product);
    Togglesidebar(false);
}


    return (
      <BrowserRouter> 
        <ProductsStyle>

          <div className="container">
            {

          productsdata.map((product)=>
                <div key={product._id}>
                    <div className="product-image" pr>
                      {/* kk */}
                      <img src={product.image} alt="#" />
                    </div>
                    <div className="product-name">
                      <h2>{product.name}</h2>
                    </div>
                    <div>
                      <h3>From {product.price}</h3>
                    </div>
                    <div className="add-to-cart">
                      <button className="add-cart-btn" onClick={()=> PerformCartSide(product, false)}   >
                       Add to cart
                      </button  >
                     
                    </div>

                </div>
              )
              
            }

          </div>
            
        </ProductsStyle>
      </BrowserRouter>
    )
}


const ProductsStyle = styled.div`
  background-color: #7a776b;

  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    cursor: pointer;
  }
  .container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        color: white;
        column-gap: 0;
        row-gap: 100px;
        justify-content: center;
        align-items: center;
        justify-items: center;
        text-align: center;
        padding-top: 100px;
        padding-bottom: 100px;
  }

  .product-image{
    height: 200px;
    width: 200px;
    background-color:green;
    margin-bottom: 40px;
    place-self: unset;
    /* align-self: center; */
    object-fit: contain;

   
    
   
  }
  .add-to-cart{
      margin-top: 10px;
     
  }

  .add-cart-btn{
    padding: 10px 30px ;
  }
`;
