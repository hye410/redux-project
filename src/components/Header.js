import logo from '../Logo.svg';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import './css/Header.css';
import { useSelector } from 'react-redux';

function Header(){
  const {ListSlice} = useSelector(state => state);

  return(
    <header>
      <div>
        <h1>
          <Link to="/">
            <img src={logo} alt="마켓컬리"/>
          </Link>
        </h1>
      </div>
      <nav>
        <h2 className="hide">메인내비게이션</h2>
        <Link to="/cart">
          <FiShoppingCart />
          <span>{ListSlice.selectedIds.length}</span>
        </Link>
      </nav>
    </header>
  )
}
export default Header;