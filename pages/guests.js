import styles from "../styles/Main.module.css";
import HeadTag from "../components/layout/HeadTag";
import { StyledContentContainer } from "../components/layout/sections/contentContainer";
import  {StyledPrimaryBlueSection } from "../components/layout/sections/primaryBlueSection";
import StaffListing from "../components/subComponents/staffList";
import { StyledReadingSection } from "../components/subComponents/readingTextBlock";
import SocialLinks from "../components/subComponents/SocialLinks";
import { StyledBackgroundImage } from "../components/subComponents/backgroundImage";

const Resources = () => (
    <>
        <HeadTag title="Resources" description="ProLifeCon Resources" />

        <StyledPrimaryBlueSection>
            <div className={styles.backgroundImage}>
            <StyledBackgroundImage>
            <StyledContentContainer>
                <h2 className={` ${styles.h2} ${styles.h2NoMargin} `}>Guests</h2>
                <StaffListing />
            </StyledContentContainer>
            </StyledBackgroundImage>
            </div>
            <SocialLinks background={({ theme }) => theme.colors.isWhite} color={({ theme }) => theme.colors.primaryBlue} />
        </StyledPrimaryBlueSection>
    </>
);

export default Resources;