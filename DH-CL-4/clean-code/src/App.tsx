import { StrictMode } from "react";
import { Header, Main, Footer } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <StrictMode>
        <Header />
        <Main />
        <Footer />
      </StrictMode>
    </div>
  );
}

export default App;

