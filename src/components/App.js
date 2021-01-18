import React, { useState } from "react";
import Login from "./Login";

function App() {
  const [id, setId] = useState();
  return (
    <>
      <h1 align="center">this is: {id}</h1>
      <Login setId={setId} />
    </>
  );
}

export default App;
