import React from "react";
import "../styles/index.css";

interface Props {
  text: string;
}

const Button = (props: Props) => {
  return <button className="btn">{props.text}</button>;
};

export default Button;
