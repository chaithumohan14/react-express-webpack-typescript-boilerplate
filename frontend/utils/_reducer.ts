import { state, action } from "./context";

export function reducer(prevState: state, action: action): state {
  switch (action.type) {
    case "prop1":
      return {
        prop1: "prop1 is changed",
        prop2: "prop1",
      };

    default:
      return {
        prop1: "prop1",
        prop2: "prop2 is changed",
      };
  }
}
