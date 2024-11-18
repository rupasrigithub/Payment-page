import React, { useState } from 'react';
import Banner from './components/Banner';
import CitySelector from './components/CitySelector';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      <Banner onApplyClick={handleOpenModal} />
      {isModalOpen && <CitySelector onClose={handleCloseModal} />}
    </div>
  );
};

export default App;