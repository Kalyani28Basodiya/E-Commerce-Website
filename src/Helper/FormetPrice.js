import React from 'react'

const FormetPrice = ({price}) => {
  return (
   Intl.NumberFormat("en-IN",{
    style:"currency",
    currency:"INR",
    maximumFractionDigits:2,
   }).format(price/100)
    )
}

export default FormetPrice;