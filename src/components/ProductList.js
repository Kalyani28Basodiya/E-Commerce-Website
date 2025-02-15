import React from 'react'
import { useFilterContex } from '../contex/filter_contex';
import GridVeiw from './GridVeiw';
import ListVeiw from './ListVeiw';

const ProductList = () => {
  const { filter_product, grid_veiw } = useFilterContex();

  if (grid_veiw === true) {
    return <GridVeiw products={filter_product} />
  }

  if (grid_veiw === false) {
    return <ListVeiw products={filter_product} />
  }


}

export default ProductList;