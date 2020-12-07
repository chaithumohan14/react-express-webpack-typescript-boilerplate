declare global {
  const initialState = { prop1: "prop1", prop2: "prop2" };

  type action = { type: "prop1" } | { type: "prop2" };
}
