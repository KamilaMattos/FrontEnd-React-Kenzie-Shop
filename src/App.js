import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

import { Routes } from "./routes"
import { GlobalStyle } from "./style/globalStyle"

function App() {
  return (
    <>
      <ToastContainer
        position='top-center'
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GlobalStyle />
      <Routes />
    </>
  )
}

export default App
