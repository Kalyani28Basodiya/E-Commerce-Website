import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import CardAmountToggle from './CardAmountToggle';
import { NavLink } from 'react-router-dom';
import { Button } from '../styles/Button';
import { useCardContext } from '../contex/card_Context';
const AddToCart = ({ product }) => {
  const { addToCard } = useCardContext();
  const { id, colors, stock } = product;

  const [color, setcolor] = useState(colors[0])

  const [amount, setAmount] = useState(1);

  const setDecrese = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1)
  }

  const setIncrese = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock)
  }


  return (
    <Wrapper>
      <div className="colors">
        <p>
          Colors:
          {
            colors.map((curColor, index) => {
              return <button key={index} style={{ backgroundColor: curColor }} className=
                {color === curColor ? "btnStyle active" : "btnStyle"} onClick={() => setcolor(curColor)}>
                {color === curColor ? <FaCheck className='checkStyle' /> : null}
              </button>
            })
          }
        </p>
      </div>

      {/* Add to card */}
      <CardAmountToggle
        amount={amount}
        setDecrese={setDecrese}
        setIncrese={setIncrese}
      />

      <NavLink to="/cart" onClick={() => addToCard(id, color, amount, product)}
      >
        <Button className='btn'>Add To Cart</Button>
      </NavLink >
    </Wrapper >
  )
}
const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;
export default AddToCart;