import styled from "styled-components";
import SocialLink from "./SocialLink";
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import React from "react";

const SocialGrid = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  
	a {
		background-color:  ${props => props.background };
		color: ${props =>  props.color };
		border-radius: 50%;
		text-align: center;
		height: 80px;
		width: 80px;
		margin: 0 1rem;
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