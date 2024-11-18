import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const Tab = styled.div`
  border-bottom: 2px solid #5850EC;
  width: fit-content;
  padding-bottom: 8px;
  margin-bottom: 20px;
`;

export const TabLink = styled.a`
  color: #5850EC;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
`;

export const BannerWrapper = styled.div`
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const ContentLeft = styled.div`
  max-width: 500px;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #111827;
  margin: 0 0 24px 0;
  font-weight: 600;
  line-height: 1.3;
`;

export const Button = styled.button`
  background: #5850EC;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #4338CA;
  }
`;

export const IllustrationContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-end;
`;

export const DocumentIcons = styled.div`
  position: relative;
  width: 60px;
  height: 80px;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 50px;
    background: #FEF3C7;
    border: 2px solid #F59E0B;
    border-radius: 4px;
  }

  &::before {
    top: 0;
    right: 0;
  }

  &::after {
    bottom: 0;
    left: 0;
  }
`;

export const PersonIllustration = styled.div`
  width: 120px;
  height: 120px;
  background-image: ${props => 
    props.variant === 'left' 
    ? "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><circle cx=\"50\" cy=\"30\" r=\"20\" fill=\"%235850EC\"/><rect x=\"20\" y=\"55\" width=\"60\" height=\"45\" fill=\"%235850EC\"/></svg>')"
    : "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><circle cx=\"50\" cy=\"30\" r=\"20\" fill=\"%23111827\"/><rect x=\"20\" y=\"55\" width=\"60\" height=\"45\" fill=\"%23111827\"/></svg>')"
  };
  background-repeat: no-repeat;
  background-size: contain;
`;