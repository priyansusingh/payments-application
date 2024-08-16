import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import  SignupPage  from "./pages/SignupPage";
import  SigninPage  from "./pages/SigninPage";
import  DashboardPage  from "./pages/DashboardPage";
import  SendMoneyPage  from "./pages/SendMoneyPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Signup" element={<SignupPage />} />
          <Route path="/Signin" element={<SigninPage />} />
          <Route path="/Dashboard" element={<DashboardPage />} />
          <Route path="/Send" element={<SendMoneyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App