import React, {useRef, useEffect} from 'react';
import {ProductsData} from '../dummyData';
import styled from 'styled-components';
import { useState } from 'react';
import useOnClickOutside from "../hooks/useOnClickOutside";
import Products from './Products';
import Home from '../pages/Home';

import axios from 'axios';

import CurrencyCalc from './CurrencyCalc';



export default function Sidebar(props) {

  const [itemsPriceCon, setItemsPriceCon] = useState();

    const {cartItems, onAdd, onRemove} = props;


    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);
    const [currency1, setCurrency1] = useState('USD');
    const [currency2, setCurrency2] = useState('EUR');
    const [rate, setRate] = useState(1);

    console.log("ttttttttttttttttttttttttt",rate)


  var itemsPrice = cartItems.reduce((a,b)=> Number(a) + Number(b.price) * Number(b.qty), 0);
  itemsPrice = Number(rate) * itemsPrice;

  console.log("llllllllllllllllllllllllllllll",typeof(rate))
  // var updatediemsPrice = itemsPrice  
  // console.log(typeof qty);
  // console.log(props.match.params.id)

  // const product = ProductsData.find(x => x._id === props.match.params.id);

  const [isToggle, setisToggle] = useState(false);


  const $sideBarRef = useRef();

  // # handle the onclick outside the sidebar
  useOnClickOutside($sideBarRef, () => setisToggle(false));

  var clicked = false;

  const Togglesidebar = () =>{

    if(!clicked){
      // clicked = true;
      setisToggle(true);
     
      clicked = true;
    }
  }
   
  var exchangeRate = null;

  const pull_ItemsPrice = (data, currency1) => {

    // window.updatedItemsPrice = data;
    setRate(data);
    setCurrency1(currency1);
   exchangeRate = data;
    // console.log(updatedItemsPrice); 
    console.log(exchangeRate); 
    return exchangeRate;
    
  }

  

  console.log(exchangeRate); 
  


    return (
      <>
      
        <Products onAdd ={onAdd} className="ProductComp" Togglesidebar={Togglesidebar} />
        
        <SidebarStyle ref={$sideBarRef}   className={isToggle ? 'expand' : 'shrink'} > 

          <CurrencyCalc pull_ItemsPrice={pull_ItemsPrice} itemsPrice={itemsPrice}/>

         

          <div className="container">
            <div className="products-container">
             
              {cartItems.length === 0 && <div>Cart is empty</div>}
              {cartItems.map((item) =>(
                <div key = {cartItems._id} className="product-container">
                  <div className="product-name-btn">
                        <div>{item.name}</div>
                        <div className="cart-button-div">
                          <div className="btn-add-remove">
                              <button onClick={()=> onAdd(item)} className="add">+</button>
                              {item.qty} 
                              <button onClick={()=> onRemove(item)} className="remove">-</button>
                          </div>
                          
                        </div>
                  </div>
                  <div className="product-total">
                    {/* <Itemtotal itemsPrice={item.qty * item.price.toFixed(2)} />  */}
                    {/* const itemsPrice = Number(props.itemsPrice) * Number(e.rate)  */}
                    {currency1}{Number(rate) * item.qty * item.price.toFixed(2)}
                  </div>
                  <div className="image-div">
                    <img src={item.image} alt="#" />
                    
                  </div>

                </div>
                
              ))}

               
              {cartItems.length !==0 &&(
                <div className="subtotal">
                  
                 <div> Subtotal</div>  <div>{currency1}{itemsPrice.toFixed(2)}</div>
                
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
          {/* <Products setisToggle={props.setisToggle(true)} /> */}
        </SidebarStyle>

      </>
    )
}


const SidebarStyle = styled.div`
  background-color: red;
  position: fixed;
  flex: 2.5;
  z-index:1000;
  width: 500px;
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
        background-color: white;
        font-size: 20px;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr ;
      

  }

  .product-container{
    margin-top: 15px;
    height: 8rem;
    background-color: green;
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
  }
  img{
    height: 4rem;
    width: 4rem;
  }

  .product-name-btn{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

.btn-add-remove{
  display: inline-block;
}

  .product-total{
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: end;
  }

  .btn-add-remove{
    border: 1px solid black;
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
  }

  .subscription{
    border: 1px solid black;
    padding: 1rem;
  }

  .proceed-tocheckout-btn{
    width: 100%;
    margin-top: 1rem;
  }
  /* .grid{
    display: grid;
  } */
`;


