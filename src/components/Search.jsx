import {DebounceInput} from 'react-debounce-input';

const Search = ({onSearch}) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  }

  return (
    <DebounceInput
     type="text"
     minLength={2}
     debounceTimeout={300}
     onChange={handleChange}
     placeholder="Search gifs"
     className="form-search" />
  )
  // return <input type="text" placeholder="Search gifs" className="form-search" onChange={handleChange}/>;
};

export default Search;
