import React from "react";
import PropTypes from "prop-types";
import Button from "./Button/Button";

const operations = ["+", "-", "*", "/"];

const renderButtons = (onClickOperation) => {
  return operations.map((operation) => (
    <Button key={operation} text={operation} clickHandler={onClickOperation} />
  ));
};

const MathOperations = ({ onClickOperation, onClickEqual }) => (
  <section className="math-operations">
    {renderButtons(onClickOperation)}
    <Button text="=" clickHandler={onClickEqual} />
  </section>
);

MathOperations.propTypes = {
  onClickOperation: PropTypes.func.isRequired,
  onClickEqual: PropTypes.func.isRequired,
};

export default MathOperations;
