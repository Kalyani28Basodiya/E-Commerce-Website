import React from "react";
import styled from "styled-components";
import ProductList from "./components/ProductList";
import Sort from "./components/Sort";
import FilterSection from "./components/FilterSection";

const Products = () => {


  return <Wrapper>
    <div className="container grid grid-filter-column">
      <div>
        <FilterSection />
      </div>
      <section className="product-veiw--short">
        <div className="short-filter">
          <Sort />
        </div>
        <div className="main-product">
          <ProductList />
        </div>
      </section>
    </div>
  </Wrapper>;
};

const Wrapper = styled.section`
/* height: 100vh; */
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
