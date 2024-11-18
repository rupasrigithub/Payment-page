import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 12px;
  padding: 24px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`;

export const HeaderIcon = styled.div`
  background: #FFF3E0;
  padding: 8px;
  border-radius: 8px;
  color: #F59E0B;
`;

export const ModalTitle = styled.h2`
  font-size: 20px;
  color: #1F2937;
  margin: 0;
  font-weight: 600;
`;

export const Subtitle = styled.p`
  color: #6B7280;
  font-size: 14px;
  margin: 0 0 24px 0;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: #6B7280;
  
  &:hover {
    color: #1F2937;
  }
`;

export const SearchSection = styled.div`
  margin-bottom: 24px;
`;

export const SearchTitle = styled.h3`
  font-size: 16px;
  color: #1F2937;
  margin: 0 0 12px 0;
  font-weight: 600;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #E5E7EB;
  border-radius: 6px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #5850EC;
    box-shadow: 0 0 0 2px rgba(88, 80, 236, 0.1);
  }
`;

export const CitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 24px;
`;

export const CityCard = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 12px;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    border-color: #5850EC;
    background: #F9FAFB;
  }
`;

export const CityIcon = styled.div`
  width: 32px;
  height: 32px;
  color: #6B7280;
`;

export const CityName = styled.span`
  font-size: 14px;
  color: #374151;
`;

export const OtherCities = styled.div`
  margin-bottom: 24px;
`;

export const OtherCitiesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CityLink = styled.button`
  text-align: left;
  background: none;
  border: none;
  padding: 8px 0;
  color: #374151;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    color: #5850EC;
  }
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.active ? '#5850EC' : '#E5E7EB'};
`;