import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./components/SignIn";
import { View } from "./components/View";
import { Add } from "./components/Add";
import { Edit } from "./components/Edit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/view" element={<View />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
