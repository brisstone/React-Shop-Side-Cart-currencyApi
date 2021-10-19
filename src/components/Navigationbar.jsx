import React from 'react';
import styled from 'styled-components';

export default function Navigationbar() {
    return (
        <NavigationStyle>
            <div className="container">
                  Lumen
            </div>
          
            
        </NavigationStyle>
    )
}


const NavigationStyle = styled.div`
  background-color: #7a776b;

  .container{
      background-color: white;
      height: 60px;
  }

`;