import styled from 'styled-components'


export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`

export const PaymentHistoryText = styled.div`
  color: #63F;
  font-size: 14px;
  padding-bottom: 20px;
  cursor: pointer;
  width: fit-content;
  
  &:hover {
    text-decoration: underline;
  }
`

export const Banner = styled.div`
  border: 1px solid #63F;
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: white;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 32px;
  }
`

export const BannerContent = styled.div`
  max-width: 100%;
  text-align: center;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    max-width: 50%;
    text-align: left;
    margin-bottom: 0;
  }
`

export const BannerTitle = styled.h2`
  font-size: 20px;
  color: #1a1a1a;
  margin-bottom: 24px;
  font-weight: 600;
  line-height: 1.3;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`

export const ApplyButton = styled.button`
  background: #63F;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #52F;
  }
`

export const BannerImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: contain;

  @media (min-width: 768px) {
    width: auto;
    height: 200px;
  }
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 16px;
`

export const ModalContent = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  width: 100%;
  max-width: 720px;
  height: auto;
  max-height: min(600px, calc(100vh - 32px));
  overflow-y: auto;
  position: relative;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #D1D5DB;
    border-radius: 3px;
  }

  @media (max-width: 640px) {
    padding: 16px;
  }
`

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 20px;
`

export const ModalIcon = styled.div`
  background-color: #FFF4EA;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

export const ModalTitle = styled.div`
  flex: 1;

  h2 {
    font-size: 18px;
    margin: 0 0 4px 0;
    font-weight: 600;
    color: #111827;
  }

  p {
    color: #6B7280;
    margin: 0;
    font-size: 14px;
  }
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: #6B7280;
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #111827;
  }
`

export const SearchWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`

export const SearchIcon = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #6B7280;
  display: flex;
  align-items: center;
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 8px 12px 8px 36px;
  border: 1px solid #E5E7EB;
  border-radius: 6px;
  font-size: 14px;
  color: #111827;
  background: #F9FAFB;
  box-sizing: border-box;
  
  &::placeholder {
    color: #9CA3AF;
  }

  &:focus {
    outline: none;
    border-color: #63F;
    background: white;
  }
`

export const CitiesSection = styled.div`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const SectionTitle = styled.h3`
  font-size: 12px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: #6B7280;
  letter-spacing: 0.05em;
`

export const PopularCitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 8px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const CityCard = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  border: 1px solid #E5E7EB;
  border-radius: 6px;
  cursor: pointer;
  background: white;
  width: 100%;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #63F;
    background: #F9FAFB;
  }
`

export const CityIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
  color: #4B5563;
  
  svg {
    width: 100%;
    height: 100%;
  }
`

export const CityName = styled.span`
  font-size: 12px;
  text-align: center;
  color: #374151;
  font-weight: 500;
  line-height: 1.2;
`

export const OtherCitiesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: 160px;
  overflow-y: auto;
  padding-right: 8px;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #D1D5DB;
    border-radius: 3px;
  }
`

export const OtherCityItem = styled.button`
  padding: 6px 8px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  background: transparent;
  color: #374151;
  text-align: left;
  width: 100%;
  transition: all 0.2s ease;
  
  &:hover {
    background: #F3F4F6;
  }
`

