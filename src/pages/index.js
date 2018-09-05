import React from 'react'


import PriceTable from '../components/price_table'
import Filters from '../components/filters'


const DATA = [{
  provider: 'Gandhi Electricity',
  mensualPrice: 42,
  kittens: false,
}, {
  provider: 'Total',
  mensualPrice: 90,
  kittens: true,
}, {
  provider: 'EDF',
  mensualPrice: 86,
  kittens: true,
}]


const IndexPage = () => (
  <div>
    <Filters />
    <PriceTable data={DATA} />
  </div>
)

export default IndexPage
