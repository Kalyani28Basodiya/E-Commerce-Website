import React from 'react'
import styled from 'styled-components';
import FormetPrice from '../Helper/FormetPrice';
import { NavLink } from 'react-router-dom';
import { Button } from '../styles/Button';

const ListVeiw = ({ products }) => {
  return (
    <Wrapper>
      <div className="container grid">
        {
          products.map((curElem) => {
            const { id, name, image, price, description } = curElem;
            return (
              // <NavLink to={`/singleproduct/${id}`}>
              <div className="card grid grid-two-column">
                <figure>
                  <img src={image} alt={name} />
                </figure>

                <div className="card-data ">
                  <h3>{name}</h3>
                  <p>
                    <FormetPrice price={price} />
                  </p>
                  <p>{description.slice(0, 70)}...</p>
                  <NavLink to={`/singleproduct/${id}`}>
                    <Button>Read More</Button>
                  </NavLink>
                </div>
              </div>
            // </NavLink>
            )
          })
        }
      </div>
    </Wrapper >
  )
}

const Wrapper = styled.section`
  padding: 9rem 0;
  .section{
    height: 360vh;

  }
  .container {
    max-width: 120rem;
  }
  .grid {
    gap: 3.2rem;
  }
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }
  .card {
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    .card-data {
      padding: 0 1rem;
    }
    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }
    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: rgb(98 84 243);
      }
      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;
export default ListVeiw;