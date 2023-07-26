import React from 'react';
import SecondPart from './SecondPart';

const NewPart = () => {
  const apiData = [
    {
      "id": 1,
      "title": "Brave New World",
      "img": "https://moviemanjackson.files.wordpress.com/2021/07/md.jpg",
      "director": "Michael Zembev",
      "year": 2021
    },
    {
      "id": 2,
      "title": "Vanguard",
      "img": "https://moviemanjackson.files.wordpress.com/2021/07/md.jpg",
      "director": "Karlos Cetsa",
      "year": 2022
    },
    {
      "id": 3,
      "title": "Bad Times At The Royale",
      "img": "https://moviemanjackson.files.wordpress.com/2021/07/md.jpg",
      "director": "Michael Zembev",
      "year": 2020
    },
    {
      "id": 4,
      "title": "John Wick 3 Parabellum",
      "img": "https://moviemanjackson.files.wordpress.com/2021/07/md.jpg",
      "director": "Karlos Cetsa",
      "year": 2019
    },
    
        {
          "id": 5,
          "title": "The Witcher",
          "img": "https://moviemanjackson.files.wordpress.com/2021/07/md.jpg",
          "director": "Michael Zembev",
          "year": 2021
        },
        {
          "id": 6,
          "title": "The Queen's Gambit",
          "img":"https://moviemanjackson.files.wordpress.com/2021/07/md.jpg",
          "director": "John Retrevi",
          "year": 2022
        },
        {
          "id": 7,
          "title": "The Dark Knight",
          "img": "https://moviemanjackson.files.wordpress.com/2021/07/md.jpg",
          "director": "Michael Zembev",
          "year": 2020
        },
        {
          "id": 8,
          "title": "No Time To Day",
          "img":"https://moviemanjackson.files.wordpress.com/2021/07/md.jpg",
          "director": "John Retrevi",
          "year": 2019
        }
      
      
   
  ]
  

  return (
    <div>
      {/* API verilerini SecondPart bileşenine props olarak geçirin */}
      <SecondPart data={apiData} />
    </div>
  );
};

export default NewPart;
