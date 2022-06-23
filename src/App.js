import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Box } from "@mui/material";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ExerciseDetail from "./pages/ExerciseDetail";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/exercise/:id" element={<ExerciseDetail />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </Box>
  );
}

export default App;
