import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialAnchor = styled.a`
  padding: 20px;
  svg {
    max-width: 10rem;
    max-height: 10rem;
  }
`

const SocialLink = (props) => (
    <SocialAnchor href={props.href}>
        <FontAwesomeIcon icon={props.icon} />
    </SocialAnchor>
);

export default SocialLink;