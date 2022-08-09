import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
