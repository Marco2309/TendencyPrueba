import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import Orders from "./components/OrderContainer";
import FormComponent from "./components/Form";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [orders, setOrders] = useState({});
  const [order, setOrder] = useState('')

  useEffect(() => {
    const getOrders = async () => {
      try {
        const url = "https://eshop-deve.herokuapp.com/api/v2/orders";
        const Token = process.env.REACT_APP_TOKEN;
        const config = {
          headers: { Authorization: `Bearer ${Token}` },
        };
        const orders = await axios.get(url, config);
        setOrders(orders.data)
        return orders;
      } catch (error) {
        console.error(error);
      }
    };
    getOrders();
  }, []);
  return (
    <div className="App position-relative">
      <NavBar />
      <Orders orders={orders.orders} setOrder={setOrder} order={order}/>
      <FormComponent orderId={order.number}/>
      <Footer />
    </div>
  );
}

export default App;
