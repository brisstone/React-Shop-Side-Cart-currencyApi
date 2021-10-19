import React from 'react';
import styled from 'styled-components';
import Navigationbar from '../components/Navigationbar';
import Products from '../components/Products';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';


export default function Home() {

    const [isToggle, setIsToggle] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) =>{
        const exist = cartItems.find(x => x._id === product._id);
        if(exist){
            setCartItems(cartItems.map(x => x._id === product._id ? {...exist, qty: exist.qty+1} : x));
        }else{
            setCartItems([...cartItems, {...product, qty: 1}]);
        }
        
    }

    const onRemove = (product) =>{
        const exist = cartItems.find(x => x._id === product._id);
        if(exist.qty == 1){
            setCartItems(cartItems.filter((x) => x._id !== product._id));
           
        }else{
            setCartItems(cartItems.map(x => x._id === product._id ? {...exist, qty: exist.qty-1} : x));
        }
        Togglesidebar(false);
    }


    var clicked = false;
  const Togglesidebar = () =>{

    if(!clicked){
      // clicked = true;
      setIsToggle(true);
     
      clicked = true;
    }
  }

   
    return (

        <HomeStyle>
            <div className="container">

                    <div className="homewrapper">
                        <Navigationbar/>  
                        {/* <Products onAdd ={onAdd} Togglesidebar={Togglesidebar} /> */}
                    </div>

            </div>

            <Sidebar isToggle={isToggle} setIsToggle={setIsToggle} onAdd ={onAdd} onRemove = {onRemove} cartItems={cartItems}/>

            
            
                    {/* <div>
                        <div className="sidebar">
                            <Sidebar isToggle={isToggle} setisToggle={setisToggle}/>
                            </div>
                    </div> */}
            
        </HomeStyle>
    )
}




const HomeStyle = styled.div`
  background-color: white;
  
    /* display: flex; */
  


  .container{
     
  }
  .homewrapper{
      /* flex: 10;   */
  }

  .sidebar{
      /* flex: 5; */
      /* display: none; */
      position: fixed;
      /* transform: translateX(100%); */
      width: 10px;
      background-color: blue;
      /* display: none; */
        
    /* @media screen and (max-width:1024px){
       transform:translate(100%)
   }  */
  }

  .sidebar.open{
      transform: translateX(0);
  }
`;
