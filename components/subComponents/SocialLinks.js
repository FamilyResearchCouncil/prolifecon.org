import styled from "styled-components";
import SocialLink from "./SocialLink";
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import React from "react";

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 1rem;
	a {
		background-color:  ${props => props.background };
		color: ${props =>  props.color };
	}
`

const SocialLinks = (props) => (
	<>
		<SocialGrid background={props.background} color={props.color}>
			<SocialLink href="https://instagram.com/FRCdc" icon={ faInstagram } />
			<SocialLink href="https://twitter.com/FRCdc" icon={ faFacebookF } />
			<SocialLink href="https://www.frc.org/facebook" icon={ faTwitter }  />
		</SocialGrid>
	</>
);

export default SocialLinks;