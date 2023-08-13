/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [totxt, setTotxt] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setTotxt("Enable Light Mode");
      document.body.style.backgroundColor = "#201f22";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      setTotxt("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  };

  const [totxt1, setTotxt1] = useState("Enable Purple Mode");
  const toggleMode1 = () => {
    if (mode === "light") {
      setMode("purple");
      setTotxt1("Enable Light Mode");
      document.body.style.backgroundColor = "#494D5F";
      showAlert("Purple Mode Enabled", "success");
    } else {
      setMode("light");
      setTotxt1("Enable Purple Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          totxt={totxt}
          totxt1={totxt1}
          toggleMode1={toggleMode1}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact path="/"
              element={
                <TextArea
                  heading="Enter Your Text to Analyze below"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route exact path="/about" element={<AboutUs mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
