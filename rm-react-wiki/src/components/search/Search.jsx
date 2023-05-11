import '../../Search.css'

// Child component
const Search = (props) =>{
    // Destructure props
    const {updateSearch, updatePageNumber} = props;

    // function used to prevent page refresh on button click
    const searchBtn = (event) =>{
        event.preventDefault();
    }

    return(
        // form for input 
        <form
            className= {`search d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
        >
            {/* input updates state of page number and search for the endpoint */}
            <input 
                onChange={(event)=>{
                    updatePageNumber(1);
                    updateSearch(event.target.value);
                }}
                placeholder='Search for characters'
                className='input'
                type="text" 
            />
            <button
                onClick={searchBtn}
                className='btn btn-primary fs-5'
            >
                Search
            </button>
        </form>
    )

}

export default Search;