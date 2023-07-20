import styled from "styled-components";

export const Header = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  text-align: center;
  margin: 0rem 0rem 1rem 0rem;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  @media (max-width: 540px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const StyledNavbar = styled.nav`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.navbarBackground};
`;
