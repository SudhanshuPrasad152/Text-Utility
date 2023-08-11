/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import "./App.css";
// import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import Alert from "./components/Alert";

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
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        totxt={totxt}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextArea
          heading="Enter Your Text to Analyze below"
          mode={mode}
          showAlert={showAlert}
        />
        {/* <AboutUs/> */}
      </div>
    </>
  );
}

export default App;
