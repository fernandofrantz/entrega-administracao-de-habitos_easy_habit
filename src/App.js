import { ToastContainer } from "react-toastify";
import { Routers } from "./Routes";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <div>
      <GlobalStyle />

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
    </div>
  );
}

export default App;
