

const SearchInput = ({submitHandle}) => {
    return (
        <form onSubmit={submitHandle}>
            <input placeholder="Search for a user data by name" type="search" name="searching" id="searching"/>
            <button>Click here to search</button>
        </form>
    )
}

export default SearchInput