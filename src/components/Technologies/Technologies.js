import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Front-end To Backend
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            HTML5 <br />
            CSS3 <br />
            JavaScript <br />
            React.js <br />
            Next.js <br />
            Redux <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node <br />
            express
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Bootstraps <br />
            Tailwind
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    {/* next part */}
    <List>
      <ListItem>
        {/* <picture>
          <DiReact size="3rem" />
        </picture> */}
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            MongoDB <br />
            SQL <br />


          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        {/* <picture>
          <DiFirebase size="3rem" />
        </picture> */}
        <ListContainer>
          <ListTitle>Hosting Platform</ListTitle>
          <ListParagraph>
            Netlify <br />
            Vercel <br />
            Heroku <br />
            Github <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        {/* <picture>
          <DiZend size="3rem" />
        </picture> */}
        <ListContainer>
          <ListTitle>Version Control</ListTitle>
          <ListParagraph>
            Git <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    {/* <SectionDivider colorAlt /> */}
  </Section>
);

export default Technologies;
