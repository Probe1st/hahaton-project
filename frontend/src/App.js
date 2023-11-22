import { BrowserRouter } from "react-router-dom";
import Router from "./components/ui/Router";
import Header from "./components/ui/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;
