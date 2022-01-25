import Link from 'next/link';
import { bool, func } from 'prop-types';
import { StyledMenu } from './menu.styled';

const Menu = ({ open }) => (
        <StyledMenu open={open}>
            <Link href="/">
                <a>HOME</a>
            </Link>
            <Link href="/resources">
                <a>RESOURCES</a>
            </Link>
            <Link href="/guests">
                <a>GUESTS</a>
            </Link>
            <Link href="/archive">
                <a>2021 BROADCAST</a>
            </Link>
        </StyledMenu>
    );

Menu.propTypes = {
    open: bool.isRequired
}

export default Menu;