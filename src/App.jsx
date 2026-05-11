import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import LuxuryGuidedVacations from "./LuxuryGuidedVacations";

function App() {
  return (
   <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LuxuryGuidedVacations />}></Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App