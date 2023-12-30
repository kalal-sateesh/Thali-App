import { Route, Routes } from "react-router-dom"
import AboutPage from "../pages/AboutPage";
import CartPage from "../pages/CartPage";
import ContactUsPage from "../pages/ContactUsPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignUpPage";
import route from "../routes/route.json";
const PageRoutes = () => {
  return (
    <Routes>
      <Route path={route.HOME} element={<HomePage></HomePage>}></Route>
      <Route path={route.ABOUT} element={<AboutPage></AboutPage>}></Route>
      <Route path={route.CONTACT_US} element={<ContactUsPage></ContactUsPage>}></Route>
      <Route path={route.LOGIN} element={<LoginPage></LoginPage>}></Route>
      <Route path={route.SIGNUP} element={<SignupPage></SignupPage>}></Route>
      <Route path={route.CART} element={<CartPage></CartPage>}></Route>
    </Routes>
  )
}
export default PageRoutes;