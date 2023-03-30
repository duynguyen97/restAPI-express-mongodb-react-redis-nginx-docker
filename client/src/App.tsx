import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h1>Hello Client</h1>
    </div>
  );
};

export default App;
