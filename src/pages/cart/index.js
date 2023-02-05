import React, { useContext } from "react";
import { Container, ContainerList, TravelItems, Info, Quantity, Subtotal } from './styles'
import CartContext from "../../context/cart";
import {MdDelete} from 'react-icons/md'

function Cart() {
    const {state, setState} = useContext(CartContext);
    return (
      <Container>
        <ContainerList>
            {state.cart.map((el)=>(
                 <TravelItems>
                 <img src={el.photo} alt={el.title}/>
                 <Info>
                     <p>{el.title}</p>
                     <strong>{el.price}</strong>
                 </Info>
                 <Quantity readyOnly type='number' value={el.quantity} />
                     <Subtotal>
                         <p>{el.quantity * el.price}</p>
                         <button type="button">
                             <MdDelete size={24} color="#0676d9"/>
                         </button>
                     </Subtotal>
             </TravelItems>
            ))}
        </ContainerList>
      </Container>
    );
}

export default Cart;