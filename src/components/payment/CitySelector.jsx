import React, { useState } from 'react';
import { GraduationCap, Search, X } from 'lucide-react';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalIcon,
  ModalTitle,
  CloseButton,
  SearchWrapper,
  SearchIcon,
  SearchInput,
  CitiesSection,
  SectionTitle,
  PopularCitiesGrid,
  CityCard,
  CityIcon,
  CityName,
  OtherCitiesList,
  OtherCityItem
} from './styledcomponents';

const popularCities = [
  { id: 1, name: 'Mumbai' },
  { id: 2, name: 'Delhi' },
  { id: 3, name: 'Bengaluru' },
  { id: 4, name: 'Hyderabad' },
  { id: 5, name: 'Ahmedabad' },
  { id: 6, name: 'Chandigarh' },
  { id: 7, name: 'Chennai' },
  { id: 8, name: 'Pune' },
  { id: 9, name: 'Kolkata' },
  { id: 10, name: 'Jaipur' },
  { id: 11, name: 'Dehradun' },
  { id: 12, name: 'Bhopal' },
  { id: 13, name: 'Indore' },
  { id: 14, name: 'Lucknow' },
  { id: 15, name: 'Mathura' },
  { id: 16, name: 'Bareilly' }
];

const otherCities = [
  'Adilabad', 'Adityapur', 'Akashiganga', 'Ambala', 'Anand', 'Anantapur',
  'Ankleshwar', 'Bhagalpur', 'Bhalukpong', 'Bharuch', 'Bhavnagar', 'Bhilai',
  'Bhismaknagar', 'Bhiwani', 'Bhuj-Rudramata', 'Bilaspur', 'Bokaro', 'Bomdila',
  'Chittoor', 'Cuddapah', 'Dadra And Nagar Haveli', 'Dalhousie', 'Daman',
  // ... other cities
];

const CitySelector = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOtherCities = otherCities.filter(city =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalIcon>
            <GraduationCap size={20} color="#FF6B00" />
          </ModalIcon>
          <ModalTitle>
            <h2>Find the Best Colleges For You</h2>
            <p>You can always change your preferences</p>
          </ModalTitle>
          <CloseButton onClick={onClose}>
            <X size={20} />
          </CloseButton>
        </ModalHeader>

        <SearchWrapper>
          <SearchIcon>
            <Search size={16} />
          </SearchIcon>
          <SearchInput
            type="text"
            placeholder="Search City"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchWrapper>

        <CitiesSection>
          <SectionTitle>POPULAR CITIES</SectionTitle>
          <PopularCitiesGrid>
            {popularCities.map(city => (
              <CityCard key={city.id}>
                <CityIcon>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 21h18M6 21V8l6-4 6 4v13M8 12h8M8 16h8" />
                  </svg>
                </CityIcon>
                <CityName>{city.name}</CityName>
              </CityCard>
            ))}
          </PopularCitiesGrid>
        </CitiesSection>

        <CitiesSection>
          <SectionTitle>OTHER CITIES</SectionTitle>
          <OtherCitiesList>
            {filteredOtherCities.map(city => (
              <OtherCityItem key={city}>
                {city}
              </OtherCityItem>
            ))}
          </OtherCitiesList>
        </CitiesSection>
      </ModalContent>
    </ModalOverlay>
  );
};

export default CitySelector;

