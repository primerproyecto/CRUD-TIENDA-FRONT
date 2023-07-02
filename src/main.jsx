import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  CheckCode,
  Carrito,
  ForgotPassword,
  Home,
  Login,
  Profile,
  Register,
  AgregarProducto,
} from "./pages";
import { ProtectedRoutes } from "./components";
import { AuthContextProvider } from "./context/authContext.jsx";
import { ProductsContextProvider } from "./context/productsContext.jsx";
import { CartContextProvider } from "./context/cartContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/">
    <AuthContextProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/verifyCode" element={<CheckCode />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/carrito/:id" element={<Carrito />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route
                path="/agregarProducto"
                element={
                  <ProtectedRoutes>
                    <AgregarProducto />
                  </ProtectedRoutes>
                }
              />
            </Route>
          </Routes>
        </CartContextProvider>
      </ProductsContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
