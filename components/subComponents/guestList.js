import styled from "styled-components";
import StaffLink from "./staffLink";
import React from "react";

const GuestGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  justify-content: center;
  grid-gap: 6rem 2rem;
 
  @media (min-width: ${({ theme }) => theme.breakPoints.medium}) {
    grid-template-columns: repeat(3,1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.large}) {
    grid-template-columns: repeat(6,1fr);
  }
`

const GuestListing = () => (
    <>
        <GuestGrid>
            <GuestCard href="https://www.frc.org/tony-perkins" imgageUrl="/img/headshots/tony-perkins.jpg" staffName="Tony Perkins"/>
            <GuestCard href="https://www.frc.org/tony-perkins" imgageUrl="/img/headshots/tony-perkins.jpg" staffName="Tony Perkins"/>
            <GuestCard href="https://www.frc.org/tony-perkins" imgageUrl="/img/headshots/tony-perkins.jpg" staffName="Tony Perkins"/>
            <GuestCard href="https://www.frc.org/tony-perkins" imgageUrl="/img/headshots/tony-perkins.jpg" staffName="Tony Perkins"/>
            <GuestCard href="https://www.frc.org/tony-perkins" imgageUrl="/img/headshots/tony-perkins.jpg" staffName="Tony Perkins"/>
            <GuestCard href="https://www.frc.org/tony-perkins" imgageUrl="/img/headshots/tony-perkins.jpg" staffName="Tony Perkins"/>
        </GuestGrid>
    </>
);

export default GuestListing;