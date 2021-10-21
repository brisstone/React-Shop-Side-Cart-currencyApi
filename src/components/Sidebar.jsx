import React, { useRef } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import useOnClickOutside from "../hooks/useOnClickOutside";
import Products from './Products';

import CurrencyCalc from './CurrencyCalc';



export default function Sidebar(props) {
  const { cartItems, onAdd, onRemove } = props;
  const [currency1, setCurrency1] = useState();
  const [rate, setRate] = useState(1);
  const [isToggle, setIsToggle] = useState(false);
  

  var itemsPrice = cartItems.reduce((a, b) => Number(a) + Number(b.price) * Number(b.qty), 0);
  itemsPrice = Number(rate) * itemsPrice;



  const $sideBarRef = useRef();

  // # handle the onclick outside the sidebar
  useOnClickOutside($sideBarRef, () => setIsToggle(false));


  var clicked = false;

  const Togglesidebar = () => {


    if (!clicked) {
      // clicked = true;
      setIsToggle(true);

      clicked = true;
    }
  }


  const pull_ItemsPrice = (exchangeRate, currency1) => {


    setRate(exchangeRate);
    setCurrency1(currency1);


    console.log(currency1);
    return exchangeRate;

  }



  return (
    <>
      <Products onAdd={onAdd} className="ProductComp" Togglesidebar={Togglesidebar} />


      <SidebarStyle ref={$sideBarRef} className={isToggle ? 'expand' : 'shrink'} >

        <div className="sidebar-header">
          <div className="arrow-back">&#8592;</div>
          <div> YOUR CART</div>
        </div>


        <CurrencyCalc currency1={currency1} setCurrency1={setCurrency1} pull_ItemsPrice={pull_ItemsPrice} itemsPrice={itemsPrice} />



        <div className="container">
          <div className="products-container">

            {cartItems.length === 0 && <div>Cart is empty</div>}
            {cartItems.map((item) => (
              <div key={item._id} className="product-container">
                <div className="product-name-btn">
                  <div className="product-name">{item.name}</div>
                  <div className="cart-button-div">
                    <div className="btn-add-remove">
                      <button onClick={() => onAdd(item)} className="add">+&nbsp;</button>
                      {item.qty}
                      <button onClick={() => onRemove(item)} className="remove">&nbsp;-</button>
                    </div>

                  </div>
                </div>
                <div className="product-total">
                  {/* <Itemtotal itemsPrice={item.qty * item.price.toFixed(2)} />  */}
                  {/* const itemsPrice = Number(props.itemsPrice) * Number(e.rate)  */}
                  {currency1}&nbsp;{Number(rate) * item.qty * item.price.toFixed(2)}
                </div>
                <div className="image-div">
                  <img src={item.image} alt="#" />

                </div>

              </div>

            ))}


            {cartItems.length !== 0 && (
              <div className="subtotal">

                <div> Subtotal</div>  <div>  {currency1}&nbsp;{itemsPrice.toFixed(2)}</div>

              </div>
            )}
          </div>
          <div>
            <button className="subscription">
              MAKE THIS A SUBSCRIPTION (SAVE 20%)
            </button>
          </div>
          <div>
            <button className="proceed-tocheckout-btn">
              PROCEED TO CHECKOUT
            </button>
          </div>

        </div>
        {/* <Products setIsToggle={props.setIsToggle(true)} /> */}
      </SidebarStyle>

    </>
  )
}


const SidebarStyle = styled.div`
  background-color: #efedf2;
  position: fixed;
  flex: 2.5;
  z-index:1000;
  width: 450px;
  top: 0;
  right: 0;
  padding: 25px;
  overflow: auto;
  height: 100%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: all ease-in-out 0.3s;
    /* display: flex;
    flex-direction: row; */
  &.expand {
    transition: all ease-in-out 0.3s;
    right: 0;
    /* display: flex;
    flex-direction: column; */
  }

  &.shrink {
    transition: all ease-in-out 0.3s;
    right: -550px;
  }

    
  /* @media screen and (max-width:1024px){
       transform:translate(200%)
   }  */
  .container{
        background-color: #efedf2;
        font-size: 20px;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr ;
      

  }

  .sidebar-header{
      display: grid;
      grid-template-columns: 1fr 1fr;
      color: #2e2d2c;
  }

  .arrow-back{
    width: 30px;
    height: 30px;
    border-radius: 100px;
    color: #403e3c;
    border: 1px solid #999897;
    padding-top: -25px;
  }

  .products-container{
    min-height: 15rem;

  }

  .product-container{
    // font-size: 100rem;
    margin-top: 15px;
    height: 5rem;
    background-color: white;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* align-items: center; */
    padding-left: .5rem;
    padding-right: 0.5rem;
    /* justify-content: center; */
    padding-bottom: 0.5rem;
  }

  .image-div{
    display: flex;
    align-items: center;
    justify-content: center; 

    
  }
  img{
    height: 2rem;
    width: 2rem;
  }

  .product-name-btn{
    font-size: 1px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .product-name{
    font-size: 0.8rem;
  }

  .product-total{
    font-size: 0.8rem;
  }

 

.btn-add-remove{
  display: inline-block;
  font-size: 0.8rem;
  height: 28px;
  border: 4px solid #2e2d2c;
}

.add{
  font-size: 0.8rem; 
}

.remove{
  font-size: 0.8rem;
}

  .product-total{
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: end;
  }

  .btn-add-remove{
    border: 1px solid #2e2d2c;
    display: inline-block;
    background-color: white;
    padding-left: 10px;
    padding-right: 10px;
  }

  .cart-button-div button{
    background-color: white;
    border: none;
    padding: 3px;
    
  }

  .subtotal{
    display: flex;
    justify-content: space-between;
    margin-top: 10rem;
    padding-top: 1rem;
    border-top: 1px solid black;
    color: #2e2d2c;
  }

  .subscription{
    border: 1px solid black;
    padding: 0.7rem;
    font-size: 0.8rem;
    width: 100%;
    background-color: white;
    margin-top: 1rem;
  }

  .proceed-tocheckout-btn{
    width: 100%;
    margin-top: 1rem;
    background-color: #605f63;
    padding: 0.7rem;
    border: none;
    color: white;
  }
  /* .grid{
    display: grid;
  } */
`;


