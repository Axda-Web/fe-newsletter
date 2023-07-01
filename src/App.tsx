import { BrowserRouter } from "react-router-dom";
import Router from "./pages/Router";

function App() {
  return (
    <BrowserRouter>
      <div className="lg:fixed inset-0 lg:flex lg:justify-center lg:items-center">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
