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
                  <h2 className={styles.h2}>More Homepage Text</h2>
                  Spicy jalapeno bacon ipsum dolor amet short ribs pork loin pork chicken pork chop pastrami chislic frankfurter, picanha pig. Ham pork loin cupim short ribs. Pork loin fatback alcatra, pork belly pastrami brisket shank meatloaf flank. Chislic pig shank corned beef spare ribs. Kielbasa andouille spare ribs, porchetta sirloin pork pancetta ribeye shoulder. Pastrami landjaeger meatball, pancetta boudin jerky chislic shoulder sausage drumstick.<br />
                  Burgdoggen pancetta ribeye, picanha ground round boudin short ribs corned beef tongue strip steak shoulder. Turkey short ribs salami tenderloin venison shoulder boudin beef ribs. Pork belly salami corned beef, jerky jowl rump tail turducken meatball cupim andouille sausage ham sirloin biltong. Boudin andouille kevin, tongue bresaola frankfurter swine pastrami. Buffalo turducken sausage cupim fatback. Hamburger pork chop kielbasa leberkas ham burgdoggen porchetta shank salami picanha bresaola.<br />
                  Cow venison frankfurter, kevin andouille salami boudin filet mignon doner strip steak. Alcatra turkey burgdoggen tenderloin ham hock beef. Sausage biltong cow, beef ribs ham hock sirloin alcatra drumstick cupim jerky turkey filet mignon ball tip chislic andouille. Capicola landjaeger meatball, burgdoggen pig spare ribs cow buffalo short loin filet mignon chuck tail. Cupim swine short ribs shoulder drumstick capicola beef pork loin ground round beef ribs. Pork loin flank meatloaf, spare ribs ground round turducken pastrami kielbasa alcatra frankfurter pork chop.<br />
              </StyledReadingSection>
          </StyledPrimaryBlueSection>
      <StyledContentContainer>
      </StyledContentContainer>
      <SocialLinks background={({ theme }) => theme.colors.altBlue} color={({ theme }) => theme.colors.isWhite}/>
  </>
);

export default Home;
