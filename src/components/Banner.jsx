import React from 'react';
import {
  Container,
  Tab,
  TabLink,
  BannerWrapper,
  ContentLeft,
  Title,
  Button,
  IllustrationContainer,
  DocumentIcons,
  PersonIllustration
} from '../styles/BannerStyles';

const Banner = ({ onApplyClick }) => {
  return (
    <Container>
      <Tab>
        <TabLink href="#">Payment History</TabLink>
      </Tab>
      
      <BannerWrapper>
        <ContentLeft>
          <Title>
            Target multiple colleges through a single application with discounts of upto 50%
          </Title>
          <Button onClick={onApplyClick}>Apply for More Colleges</Button>
        </ContentLeft>
        
        <IllustrationContainer>
          <PersonIllustration variant="left" />
          <DocumentIcons />
          <PersonIllustration variant="right" />
        </IllustrationContainer>
      </BannerWrapper>
    </Container>
  );
};

export default Banner;