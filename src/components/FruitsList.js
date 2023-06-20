import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { BsCartCheckFill,BsCaretDownFill,BsCheck } from "react-icons/bs";
import './css/FruitsList.css';
import Search from './Search';
import { useDispatch,useSelector } from "react-redux";
import {addToCart,RemoveFromCart} from '../redux/ListSlice';

function FruitsList({productList}){
  //redux
  let dispatch = useDispatch();
  const { ListSlice } = useSelector(state=>state);

  const[productName,setProductName] = useState('');
  const[sort,setSort] = useState('date');
  const[toggle,setToggle] = useState(false);
  const searchList = 
  productList.filter(item => item.name.includes(productName))
             .sort((a,b) => {
              return(
                sort === 'price2' ? a[sort] - b[sort] : b[sort] - a[sort]
                )
              });


  return(
  <>
  <Search 
  productName = {productName}
  searchChange = {(value)=>setProductName(value)}
  />
  <div id="fruitBox">
    <div>
      <p>총 {searchList.length}개</p>
      <button type="button" onClick={()=>setToggle(!toggle)}>
        <BsCaretDownFill />
      </button>
      {
        toggle
        &&
        <ul>
          <li value='date' onClick={()=>setSort('date')}>
            {sort === 'date' && <BsCheck />}신상품순
          </li>
          <li value='num' onClick={()=>setSort('num')}>
            {sort === 'num' && <BsCheck />}판매량순
          </li>
          <li value='price' onClick={()=>setSort('price')}>
            {sort === 'price' && <BsCheck />}높은 가격순
          </li>
          <li value='price' onClick={()=>setSort('price2')}>
            {sort === 'price2' && <BsCheck />}낮은 가격순
          </li>
        </ul>
      }
    </div>
    { 
    searchList.map(product => {
      return(
        <figure key={product.id}>
          <img src={product.imageUrl} alt={product.name} />
          {
           !ListSlice.selectedIds.includes(product.id)
            &&
            (<span 
            onClick={()=>{dispatch(addToCart(product.id))}}>
              <FiShoppingCart />
            </span>)
          }
          {
            ListSlice.selectedIds.includes(product.id)
            &&
            (<span
            onClick={()=>{dispatch(RemoveFromCart(product.id))}}>
              <BsCartCheckFill />
            </span>)
          }          
          <figcaption>
            <dl>
              <dt>{product.name}</dt>
              <dd>{product.detail}</dd>
              <dd>\{product.price.toLocaleString('ko-KR')}원</dd>
            </dl>
          </figcaption>
        </figure>
      )})
    }
  </div>
  </>
  )
}

export default FruitsList;