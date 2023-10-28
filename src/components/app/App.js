import Header from "../header/Header";
import Products from "../../features/products/Products";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Products />
      </main>
    </>
  );
}

export default App;
