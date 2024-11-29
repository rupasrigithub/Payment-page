import React, { useState } from 'react';
import {
  Container,
  PaymentHistoryText,
  Banner,
  BannerContent,
  BannerTitle,
  ApplyButton,
  BannerImage
} from './styledcomponents'
import CitySelector from './CitySelector';

const PaymentHistory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Container>
      <PaymentHistoryText>
        Payment History
      </PaymentHistoryText>
      
      <Banner>
        <BannerContent>
          <BannerTitle>
            Target multiple colleges through a single application with discounts of upto 50%
          </BannerTitle>
          <ApplyButton onClick={handleOpenModal}>
            Apply for More Colleges
          </ApplyButton>
        </BannerContent>
        
        <BannerImage 
          src="/placeholder.svg?height=200&width=300"
          alt="Students applying to colleges illustration"
        />
      </Banner>

      {isModalOpen && <CitySelector onClose={handleCloseModal} />}
    </Container>
  )
}

export default PaymentHistory;

