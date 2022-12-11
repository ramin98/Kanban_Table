import search from '../assets/images/search.svg'
import styled from 'styled-components';

function Search(){
    return (
      <SearchContainer>
        <SearchInput type="text" placeholder='Search...'/>
        <SearchImg src={search} alt="search" />
      </SearchContainer>
    );
  
}

export default Search;

const SearchContainer = styled.div`
     display: flex;
     width: 187px;
     height: 32px;
     background-color: #2D4071;
     border-radius: 4px;
     padding: 10px;
     margin-left: 16px;
     margin-right: 16px;
     gap: 12px;
     margin-top: 26px;
`;

const SearchInput = styled.input`
     background-color: transparent;
     border: none;
     outline: none;
     width: 142px;
`;

const SearchImg = styled.img`
     display: block;
     cursor:pointer;
`;