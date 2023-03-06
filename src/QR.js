import logo from './Logo.svg';
import './QR.css';

function QR(){
  return(
    <div id="qr">
      <img src={logo} alt ="logo" />
      <img src="./images/QRCodeImg.jpg" alt="어플다운QR코드" />
    </div>
  )
}

export default QR;