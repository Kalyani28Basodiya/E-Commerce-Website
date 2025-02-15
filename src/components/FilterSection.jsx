import React from 'react'
import styled from 'styled-components';
import { useFilterContex } from '../contex/filter_contex';
import { FaCheck } from 'react-icons/fa';
import FormetPrice from "../Helper/FormetPrice";
import { Button } from '../styles/Button';

const FilterSection = () => {

  const { filters: { text, category, color, price, maxPrice, minPrice }, all_product, updateFilterValue,clearFilters } = useFilterContex();

  // to get the uniqe data of each feild
  const getUniqeData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property]
    })

    if (property == "colors") {
      // return (newVal = ["all", ...new Set([].concat(...newVal))]);
      newVal = newVal.flat()
    }
    // else {
    return (newVal = ["all", ...new Set(newVal)]);
    // }
  }

  // we need uniqe data
  const categroryOnlyData = getUniqeData(all_product, "category");
  const companyOnlyData = getUniqeData(all_product, "company");
  const colorsData = getUniqeData(all_product, "colors");
  // console.log(colorsData);
  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilterValue}
            placeholder='SEARCH'
          />

        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {
            categroryOnlyData.map((curEle, index) => {
              return <button key={index}
                type='button'
                name='category'
                value={curEle}
                onClick={updateFilterValue}
              >
                {curEle}
              </button>
            })
          }
        </div>
      </div>

      <div className="filter-company">
        <h3>Company</h3>
        <form action="#" >
          <select name='company'
            id='company'
            className='filter-company--select'
            onClick={updateFilterValue}>
            {
              companyOnlyData.map((curEle, index) => {
                return (
                  <option
                    key={index}
                    name="company"
                    value={curEle} >
                    {curEle}
                  </option>)
              })
            }
          </select>
        </form>
      </div>

      <div className="filter-color colors">
        <h3>Colors</h3>
        <div className="filter-color-style">
          {colorsData.map((curColor, index) => {
            // console.log("curcolor", curColor)
            // console.log("color", color)
            if (curColor === 'all') {
              return (
                <button
                  key={index}
                  name='color'
                  value={curColor}
                  type='button'
                  className='color-all--style'
                  onClick={updateFilterValue}
                >
                  All
                </button>
              )
            }
            return (
              <button
                key={index}
                name='color'
                value={curColor}
                type='button'
                style={{ background: curColor }}
                className={color == curColor ? 'btnStyle active' : "btnStyle"}
                onClick={updateFilterValue}
              >
                {color == curColor ? <FaCheck className='checkStyle' /> : null}
              </button>
            )
          })
          }
        </div>
      </div>


      <div className="filter_price">
        <h3>Price</h3>
        <p>
          <FormetPrice price={price} />
        </p>
        <input type="range"
          name='price'
          value={price}
          min={minPrice}
          max={maxPrice}
          onChange={updateFilterValue} />
      </div>

      <div className="filter-clear">
        <Button className='btn' onClick={clearFilters}>Clear Filter</Button>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
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
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;


export default FilterSection;