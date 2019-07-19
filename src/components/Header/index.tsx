import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.dWhite};

  @media screen and (min-width: 768px) {
    height: 70px;
  }
`;

const BrandText = styled(Link)`
  font-size: 1.5rem;
`;

const MenusContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled(Link)`
  margin: 0 1rem;
  font-weight: bold;
  flex: 1;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <BrandText to="/">E-market</BrandText>
      <MenusContainer>
        <MenuItem to="/man">Man</MenuItem>
        <MenuItem to="/man">Woman</MenuItem>
        <MenuItem to="/man">Kids</MenuItem>
        <MenuItem to="/man">Shoes</MenuItem>
        <MenuItem to="/man">Brands</MenuItem>
      </MenusContainer>
      <div>
        <svg width="25" height="25">
          <path d="M20.067 18.933l-4.157-4.157a6 6 0 1 0-.884.884l4.157 4.157a.624.624 0 1 0 .884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z"></path>
        </svg>
        <svg width="25" height="25" viewBox="-293 409 25 25">
          <path d="M-273.327 423.67l-1.673-1.52v-3.646a5.5 5.5 0 0 0-6.04-5.474c-2.86.273-4.96 2.838-4.96 5.71v3.41l-1.68 1.553c-.204.19-.32.456-.32.734V427a1 1 0 0 0 1 1h3.49a3.079 3.079 0 0 0 3.01 2.45 3.08 3.08 0 0 0 3.01-2.45h3.49a1 1 0 0 0 1-1v-2.59c0-.28-.12-.55-.327-.74zm-7.173 5.63c-.842 0-1.55-.546-1.812-1.3h3.624a1.92 1.92 0 0 1-1.812 1.3zm6.35-2.45h-12.7v-2.347l1.63-1.51c.236-.216.37-.522.37-.843v-3.41c0-2.35 1.72-4.356 3.92-4.565a4.353 4.353 0 0 1 4.78 4.33v3.645c0 .324.137.633.376.85l1.624 1.477v2.373z"></path>
        </svg>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
