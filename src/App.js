import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newPage/NewUser";
import ProductList from "./pages/productList/ProductList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" exact component={UserList} />
          <Route path="/user/:userId" exact component={User} />
          <Route path="/newUser" component={NewUser} />
          <Route path="/products" exact component={ProductList} />
          <Route path="/product/:productId" exact component={Product} />
          <Route path="/newProduct" component={NewProduct} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
