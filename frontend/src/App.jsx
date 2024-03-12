import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TriggerDashboard from "./pages/TriggerDashboard";
import Triggerlist from "./pages/TriggerList";
import TriggerForm from "./pages/TriggerForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<TriggerDashboard />} />
        <Route exact path="/list" element={<Triggerlist />} />
        <Route exact path="/exercise" />
        <Route exact path="/create" element={<TriggerForm />} />
      </Routes>
    </Router>
  );
}

export default App;
