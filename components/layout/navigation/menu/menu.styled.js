import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  justify-content: right;
  height: 100vh;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.mobileTransparentblue};
  width: 40%;
  text-align: left;
  padding: 10rem 2rem ;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  
  a {
    font-size: 3rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.colors.isWhite};
    text-decoration: none;
    transition: color 0.3s linear;
    margin-left: 4rem;
    text-align: center;
    
    &:hover {
      color: ${({ theme }) => theme.colors.isPink};
    }
  }
  
  @media (min-width: ${({ theme }) => theme.breakPoints.small}) {
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.medium}) {
    padding: 2rem 10rem 2rem 2rem;
    flex-direction: column;
    height: 100vh;
    width: 53%;
    a {
    font-size: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.large}) {
    
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.xLarge}) {

  }
  
`;