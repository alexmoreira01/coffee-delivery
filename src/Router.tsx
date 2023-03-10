import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Order } from "./pages/Order";
import { OrderConfirmed } from "./pages/OrderConfirmed";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home/>}/>

        <Route path="/cart" element={<Order/>}/>

        <Route path="/cart/confirmed" element={<OrderConfirmed/>}/>

      </Route>
    </Routes>
  )
}