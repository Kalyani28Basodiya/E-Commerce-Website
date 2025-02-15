import React from 'react'
import styled from 'styled-components';
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContex } from '../contex/filter_contex';

const Sort = () => {
  const { grid_veiw, filter_product, setGridView, setListView, sorting } = useFilterContex();
  return (
    <Wrapper className='sort-section'>

      <div className="sorting-list--grid">
        <button className={grid_veiw ? 'active sort-btn' : 'sort-btn'} onClick={setGridView}>
          <BsFillGridFill className='icon' />
        </button>
        <button className={!grid_veiw ? 'active sort-btn' : 'sort-btn'} onClick={setListView}>
          <BsList className="icon" />
        </button>
      </div>

      <div className="product-data">
        <p> {`${filter_product.length} product Available `}  </p>
      </div>

      {/* //third column */}
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select name="sort" id="sort" className='sort-selection--style' onClick={sorting}>
            <option value="lowest">Prince(lowest)</option>
            {/* <option value="#" disabled></option> */}
            <option value="heighest">Prince(heighest)</option>
            {/* <option value="#" disabled></option> */}
            <option value="a-z">Prince(a-z)</option>
            {/* <option value="#" disabled></option> */}
            <option value="z-a">Prince(z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  .sorting-list--grid {
    display: flex;
    gap: 2rem;
    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }
  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;
    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;



export default Sort;