import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TriggerDashboard from "./pages/TriggerDashboard";
import Triggerlist from "./pages/TriggerList";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<TriggerDashboard />} />
        <Route exact path="/list" element={<Triggerlist />} />
      </Routes>
    </Router>
  );
}

export default App;
