import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import styled from 'styled-components';
import gamesContext from '../context/AppContext';
import GamesCard from './GamesCard';

const Profile = styled.div`
  color: #F5F3F4;
  border-radius: 10px;
  margin-top: 100px;
  margin-bottom: 100px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  width: 95%;
  z-index: 1;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  backdrop-filter: blur(8px);
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(31, 30, 30, 0.192);
  backdrop-filter: blur(8px);
  width: 25%;
  max-width: 200px;
  border-radius: 10px;
`;

const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    img {
    padding: 10px;
    width: 100%;
    }
    margin-bottom: 20px;
`;

const NavCategories = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 200px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const GamesBox = styled.div`
  width: 60%;
  @media screen and (max-width: 1000px) {
    width: 80%;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
  }
    padding-top: 50px;
    padding-bottom: 100px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

function UserProfile({ categories }) {
  const { logged, userGames } = useContext(gamesContext);
  return (
    <Profile>
      <Sidebar>
        <ProfileInfo>
          <img src={logged.avatar} alt="avatar" />
          <h1>{logged.name}</h1>
          <h3>{logged.lastName}</h3>
          <h4>{logged.email}</h4>
          <p>editar</p>
        </ProfileInfo>
        <NavCategories>
          {
            categories.map(({ name, id }) => <h3 key={id}>{name}</h3>)
          }
        </NavCategories>
      </Sidebar>
      <Content>
        <GamesBox>
          {userGames.games.map(({ games }) => GamesCard(games))}
        </GamesBox>
      </Content>
    </Profile>
  );
}

UserProfile.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default UserProfile;
