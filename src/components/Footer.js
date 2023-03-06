import { BiMenu,BiSearch,BiUser,BiHome } from "react-icons/bi";
import './css/Footer.css';

function Footer(){
  return(
    <footer>
      <ul>
        <li><BiHome /></li>
        <li><BiMenu /></li>
        <li><BiSearch /></li>
        <li><BiUser /></li>
      </ul>
    </footer>
  )
}
export default Footer;