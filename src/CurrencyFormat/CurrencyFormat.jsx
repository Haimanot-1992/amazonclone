import React from "react";
import numeral from "numeral";

const CurrencyFormat = ({ amount }) => {
  // Check if amount exists and is a valid number
  if (amount === undefined || amount === null) {
    return <div>$0.00</div>;
  }

  // Convert to number if it's a string
  const numAmount = typeof amount === "string" ? parseFloat(amount) : amount;

  // Format the amount
  const formattedAmount = numeral(numAmount).format("$0,0.00");

  return <div>{formattedAmount}</div>;
};

export default CurrencyFormat;
