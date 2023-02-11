import React, { useContext, useState } from "react";
import { Container, ContainerList, TravelItems, Info, Quantity, Subtotal, Total } from './styles'
import CartContext from "../../context/cart";
import {MdDelete} from 'react-icons/md'

function Cart() {
    const {state, setState} = useContext(CartContext);
    const [totalF, setTotalF] = useState("");
    let total = "";
    let totalC = 0;

    const totalCompra = () => {
        state.cart.map(r=>{
            total = r.quantity * r.price;
            totalC = totalC + total;
        })
        setTotalF(totalC)
        console.log("total:", total)
        console.log("total F:", totalF) 
    }

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
            <Total>
               <p>TOTAL</p> 
               <strong>${totalF}</strong>
            </Total>
        </ContainerList>
       
      </Container>
    );
}

export default Cart;