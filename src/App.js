<<<<<<< HEAD
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Routers } from "./Routes";

function App() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routers />
=======
import { RegisterLots } from "./Components/registro/Registers";

function App() {
  return (
    <div className="App">
      <RegisterLots />
>>>>>>> 96859fa11cb64152f39b0dd203ef48fa376a15eb
    </div>
  );
}

export default App;
