import arrow from '../../assets/images/arrow.svg'
import styled from 'styled-components';

function Favorites(){
    return (
      <FavoritesContainer>
          <FavoritesHeader><FavoritesHeaderImg src={arrow} alt="arrow" /><FavoritesHeaderText>Favorites</FavoritesHeaderText></FavoritesHeader>
          <FavoritesList>
            <FavoritesListItem>Marketing</FavoritesListItem>
            <FavoritesListItem>Mobile App</FavoritesListItem>
          </FavoritesList>
      </FavoritesContainer>
    );
  
}

export default Favorites;

const FavoritesContainer = styled.div`
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 17px;
`;
const FavoritesHeader = styled.p`
    display: flex;
    align-items: center;
    gap: 15px;
    color: white;
    cursor: pointer;
`;

const FavoritesHeaderImg = styled.img`
    
`;

const FavoritesHeaderText = styled.span`
    
`;


const FavoritesList = styled.ul`
    
`

const FavoritesListItem = styled.li`
    margin-top: 18px;
    color: #8C939F;
    cursor: pointer;

    &:hover{
      transition: 0.3s;
      color: white;
  }
    
`