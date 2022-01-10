import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
// import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  // props
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          <img src="./images/profile.jpg" width="40%" style={{ borderRadius: "50%" }} /> <br></br>
          Hey There!<br />
          I am Suraj Kumar
        </SectionTitle>
        <SectionText>
          Aspiring full-stack web developer with a specialization in MERN stack. An inquisitive team player, with a keen interest in building websites and web developer. Looking for a job as a full stack web developer in a growing organization
        </SectionText>
        {/* <Button onClick={props.handleClick}>Resume</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;