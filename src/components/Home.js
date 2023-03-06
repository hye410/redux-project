// import Search from './Search';
import FruitsList from './FruitsList';
import './css/Home.css';
import productList from '../ItemList.json';

function Home(){
  return(
    <article id="home">
      <h3>과일</h3>      
      <FruitsList
      productList={productList} />
    </article>
  )
}
export default Home;