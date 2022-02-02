import styled from "styled-components";
import StaffLink from "./staffLink";
import React from "react";

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 1rem;

`

const SocialLinks = () => (
	<>
		<SocialGrid>
			{/*<SocialLinks href="https://www.frc.org/tony-perkins" imgageUrl="/img/headshots/tony-perkins.jpg" staffName="Tony Perkins"/>*/}
			{/*<SocialLinks href="https://www.frc.org/tony-perkins" imgageUrl="/img/headshots/tony-perkins.jpg" staffName="Tony Perkins"/>*/}
			{/*<SocialLinks href="https://www.frc.org/tony-perkins" imgageUrl="/img/headshots/tony-perkins.jpg" staffName="Tony Perkins"/>*/}
			<a href="https://instagram.com/FRCdc">instagram</a>
			<a href="https://twitter.com/FRCdc">twitter</a>
			<a href="https://www.frc.org/facebook">facebook</a>
		</SocialGrid>
	</>
);

export default SocialLinks;