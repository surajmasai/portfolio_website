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
          <img src="https://media-private.canva.com/3UpVY/MAExsA3UpVY/1/tl.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20220105%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220105T035900Z&X-Amz-Expires=72306&X-Amz-Signature=1906ac1a7300e0dfd601d655068f1c68fca60dd8da339237021ce923d2696096&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2006%20Jan%202022%2000%3A04%3A06%20GMT" width="40%" style={{ borderRadius: "50%" }} /> <br></br>
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