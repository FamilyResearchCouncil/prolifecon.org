import {StyledReadingSection} from "../../subComponents/readingTextBlock";
import styles from './Footer.module.css'

const Footer = () => (
    <footer className={styles.footer}>
        <hr />
        <center>
            <StyledReadingSection>
                <br/>
                Stuff that you'd find in the footer
                <br/>
            </StyledReadingSection>
            &copy;2022 Family Research Council
        </center>
    </footer>
);

export default Footer;
