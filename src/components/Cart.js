import { FaTrash } from "react-icons/fa";
import { BsFillCartXFill } from "react-icons/bs";
import productList from '../ItemList.json';
import './css/Cart.css';
import { useSelector,useDispatch } from "react-redux";
import { RemoveFromCart,RemoveAllItems,changeCount } from '../redux/ListSlice';


function Cart(){
  let dispatch = useDispatch();
  const { ListSlice } = useSelector(state=>state);
  const mycartList = productList.filter(item =>
    ListSlice.selectedIds.includes(item.id)) 

  const sumPrice = mycartList.map((item) => item.price * item.count)
                              .reduce((sum,hap) =>  sum += hap,0);
  
  const priceDelivery = sumPrice >= 50000? 0 : 3000;
  
    
  return(
    <article id="cart">
      <h3>장바구니</h3>

      <p className="removeall"
        onClick={()=>{dispatch(RemoveAllItems())}}>장바구니 비우기
      </p>

      <ul className="mylist">
        {
          mycartList.map((product) => {return(
          <li key={product.id}>
            <ul>
              <li>{product.name}</li>
              <li onClick={()=>{dispatch(RemoveFromCart(product.id))}}><FaTrash /></li>
            </ul>           
         
            <figure>
              <img src={product.imageUrl} alt={product.name} />
              <figcaption>
                <p>{product.price.toLocaleString('ko-KR')}원</p>
                <p>                             
                  <span
                  onClick={()=>{dispatch(
                    changeCount(
                      product.count > 1 ? product.count-=1 : 1))
                      }}>   
                  -</span>
                  {product.count}
                  <span
                  // onClick={(event)=>{return(
                  //   console.log(product.count+=1))}}}
                  // onClick={()=>{product.count+=1}}
                  //위에처럼 하면 안되는데 아래처럼 하면 됨..
                  // redux에서 state.target값이 굳이 쓰이는게 없는 거 같은데..
                //  onClick={()=>{dispatch(changeCount(product.count+=1))}}
                onClick={()=>{dispatch(changeCount(product.count+=1))
              }}
                 >+</span>
                </p>            
              </figcaption>
            </figure>
          </li>         
        )})}
        
      </ul>
      {
        (ListSlice.selectedIds.length) >= 1
        &&
        <>
        <dl>
          <dt>상품금액</dt>
          <dd>
            {sumPrice.toLocaleString('ko-KR')}원
          </dd>
          <dt>배송비</dt>
          <dd>
            {priceDelivery.toLocaleString('ko-KR')}원
          </dd>
          <dd>5만원 이상 구매 시 무료 배송!</dd>
          <dt>결제예정금액</dt>
          <dd>{(sumPrice+priceDelivery).toLocaleString('ko-KR')}원</dd>
        </dl>
        <p className="btn"><button type="button">바로구매</button></p>
        </>           
      }

      {
        (ListSlice.selectedIds.length < 1)
        &&
        (<div className="empty">
          <BsFillCartXFill /><br />
            장바구니가 비었습니다.
        </div>)
      }  

    </article>
  )
}
export default Cart;