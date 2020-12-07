import React, { useEffect } from "react";
import Button from "../components/Button";
import { Store } from "../utils/context";

interface Props {}

const Home = (props: Props) => {
  const { state, dispatch } = Store();

  const prop1 = () => {
    dispatch({
      type: "prop1",
    });
  };

  const prop2 = () => {
    dispatch({
      type: "prop2",
    });
  };

  return (
    <>
      {state.prop1}
      {state.prop2}
      <Button text={"Hai Button"} />
      <button onClick={prop1}> 1 </button>
      <button onClick={prop2}> 2 </button>
    </>
  );
};

export default Home;
