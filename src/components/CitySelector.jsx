import React, { useState } from 'react';
import { X } from 'lucide-react';
import {
    Modal,
    Overlay,
    ModalHeader,
    HeaderIcon,
    ModalTitle,
    Subtitle,
    CloseButton,
    SearchSection,
    SearchTitle,
    SearchInput,
    CitiesGrid,
    CityCard,
    CityIcon,
    CityName,
    OtherCities,
    OtherCitiesList,
    CityLink,
    Navigation,
    Dot
  } from '../styles/CitySelectorStyles';

const CitySelector = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const popularCities = [
    'Mumbai', 'Delhi', 'Bengaluru', 'Hyderabad',
    'Ahmedabad', 'Chandigarh', 'Chennai', 'Pune',
    'Kolkata', 'Jaipur', 'Dehradun', 'Bhopal',
    'Indore', 'Lucknow', 'Mathura', 'Bareilly'
  ];

  const otherCities = ['Adilabad', 'Adityapur', 'Akathiganga'];

  return (
    <>
      <Overlay onClick={onClose} />
      <Modal>
        <CloseButton onClick={onClose}>
          <X size={20} />
        </CloseButton>
        
        <ModalHeader>
          <HeaderIcon>🎓</HeaderIcon>
          <div>
            <ModalTitle>Find the Best Colleges For You</ModalTitle>
            <Subtitle>You can always change your preferences</Subtitle>
          </div>
        </ModalHeader>

        <SearchSection>
          <SearchTitle>College should be in which city?</SearchTitle>
          <SearchInput 
            type="text"
            placeholder="Search City"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchSection>

        <SearchTitle>POPULAR CITIES</SearchTitle>
        <CitiesGrid>
          {popularCities.map((city) => (
            <CityCard key={city}>
              <CityIcon>🏛️</CityIcon>
              <CityName>{city}</CityName>
            </CityCard>
          ))}
        </CitiesGrid>

        <OtherCities>
          <SearchTitle>OTHER CITIES</SearchTitle>
          <OtherCitiesList>
            {otherCities.map((city) => (
              <CityLink key={city}>{city}</CityLink>
            ))}
          </OtherCitiesList>
        </OtherCities>

        <Navigation>
          <Dot active />
          <Dot />
        </Navigation>
      </Modal>
    </>
  );
};

export default CitySelector;