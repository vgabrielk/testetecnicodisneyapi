import './SearchPerson.css'

const SearchPerson = ({setSearchTerm}) => {
    return ( 
        <>
          <div className="search-container">
        <div className="search-box">
          <input type="text" id='search-person' placeholder='Pesquisar..' onChange={(e) => {
            setSearchTerm(e.target.value);
          }} />
          <i className="fas fa-search"></i>
        </div>
        </div>
        </>
     );
}
 
export default SearchPerson;