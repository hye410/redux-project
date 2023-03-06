import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Cart from './components/Cart';
import './App.css';
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div id="app">
      <div>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/cart" element={<Cart />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
      </div>
    </div>
  );
}

export default App;
