import { productsdata } from '../data';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';


export default function Products(props) {
  const {onAdd, Togglesidebar} = props;


 
  const PerformCartSide =  (product) => {
      
      onAdd(product);
      Togglesidebar();
   
}


    return (
      <BrowserRouter> 
        <ProductsStyle>

          <div className="container">
            {

          productsdata.map((product)=>
                <div key={product._id}>
                    <div className="product-image">
                    
                      <img src={product.image} alt="#" />
                    </div>
                    <div className="product-name">
                      <h2>{product.name}</h2>
                    </div>
                    <div>
                      <h3>From USD {product.price}</h3>
                    </div>
                    <div className="add-to-cart">
                      <button className="add-cart-btn" onClick={()=> PerformCartSide(product)}   >
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

        @media only screen and (max-width: 768px){
          html{
      font-size: 48% ;  /* i want 1 rem = 12px ; 8px/16px = 50% */
          }

          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;

        }
  }

  .product-image{
    height: 200px;
    width: 200px;
    background-color: blue;
    margin-bottom: 40px;
    place-self: unset;
    /* align-self: center; */
    object-fit: contain;

    @media only screen and (max-width: 768px){
     

     height: 160px;
     width: 160px;
    }
   
  }
  .add-to-cart{
      margin-top: 10px;
     
  }

  .add-cart-btn{
    padding: 10px 30px ;
  }
`;
