import React, { useContext, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { Button, Card } from 'react-bootstrap';
import { ProductContext } from '../context/ProductContext';
import SecondPart from './SecondPart'; // Değiştirilmiş SecondPart bileşenini import et

const BenimBilesenim = () => {
  // Varsayalım ki API verileri bu formatta
  const apiVerileri = [
    {
      id: 1,
      img: 'url_resim_1',
      url: 'url_1',
      title: 'Film 1',
      director: 'Yönetmen 1',
      year: '2023',
    },
    {
      id: 2,
      img: 'url_resim_2',
      url: 'url_2',
      title: 'Film 2',
      director: 'Yönetmen 2',
      year: '2022',
    },
    // Diğer veriler
  ];

  return (
    <div>
      {/* API verilerini SecondPart bileşenine aktar */}
      <SecondPart veri={apiVerileri} />
    </div>
  );
};

export default BenimBilesenim;
