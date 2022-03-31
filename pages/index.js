import HeadTag from "../components/layout/HeadTag"
import styles from '../styles/Main.module.css'
import {StyledPrimaryBlueSection} from "../components/layout/sections/primaryBlueSection";
import {StyledContentContainer} from "../components/layout/sections/contentContainer";
import VideoContainer from "../components/subComponents/videoContainer";
import {StyledReadingSection} from "../components/subComponents/readingTextBlock";
import SocialLinks from "../components/subComponents/SocialLinks";

const Home = () => (
  <>
      <HeadTag title="ProLifeCon" description="ProLifeCon" />
              {/*<h2 className={styles.h2}>HOME PAGE VIDEO</h2>*/}
              <VideoContainer videoId="5194481742001" />
          <StyledContentContainer>
              {/*<h2 className={styles.h2}>Hello Homepage</h2>*/}
              <StyledReadingSection>
              </StyledReadingSection>
          </StyledContentContainer>
          <StyledPrimaryBlueSection>
              <StyledReadingSection>
                  <h2 className={styles.h2}>Resources</h2>
                 GRID COMPONENT GOES HERE
              </StyledReadingSection>
          </StyledPrimaryBlueSection>
      <StyledContentContainer>
      </StyledContentContainer>
      <SocialLinks background={({ theme }) => theme.colors.altBlue} color={({ theme }) => theme.colors.isWhite}/>
  </>
);

export default Home;
