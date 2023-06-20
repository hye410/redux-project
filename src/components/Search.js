import { BiSearch } from "react-icons/bi";
import './css/Search.css';

function Search({searchChange,productName}){

  
  return(
    <div id="search">
      <p>
        <input type="text" 
        placeholder="검색어를 입력해주세요"
        value={productName}
        onChange={(event)=>searchChange(event.target.value)}
        />
        <BiSearch />
      </p>
    </div>
  )
}

export default Search;