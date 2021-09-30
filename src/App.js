import "./App.css";
import Discussion from "./container/Discussion/Discussion";
import { ToastProvider } from "react-toast-notifications";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <ToastProvider>
        <Discussion />
      </ToastProvider>
    </div>
  );
}

export default App;
