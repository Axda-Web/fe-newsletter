import { BrowserRouter } from "react-router-dom";
import Router from "./pages/Router";

import EmailAddressContextProvider from "./emailAddressContext";

function App() {
  return (
    <BrowserRouter>
      <main className="lg:fixed inset-0 lg:flex lg:justify-center lg:items-center">
        <EmailAddressContextProvider>
          <Router />
        </EmailAddressContextProvider>
      </main>
    </BrowserRouter>
  );
}

export default App;
