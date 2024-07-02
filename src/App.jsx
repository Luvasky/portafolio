import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as utils from "./utils/entryPonit/utils.js"; // Asegúrate de que esta ruta sea correcta

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<utils.Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
