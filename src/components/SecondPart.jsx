
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/pagination';
// import { FreeMode, Pagination } from 'swiper/modules';
// import { Button, Card } from 'react-bootstrap';
// import { useWishlist } from 'react-use-wishlist';

// const SecondPart = ({ data }) => {
//   const handleWish =()=>{
//     addWishlistItem(allItem)
   
//   }

//   return (
//     <>
//       <div className="secondpart">
//         <Swiper
//           slidesPerView={3}
//           spaceBetween={30}
//           freeMode={true}
//           pagination={{
//             clickable: true,
//           }}
//           modules={[FreeMode, Pagination]}
//           className="mySwiper"
//         >
//           {data.map((item) => (
//             <SwiperSlide key={item.id}>
//               <Card style={{ width: '18rem' }}>
//                 <Card.Img variant="top" src={item.img} />
//                 <Card.Body>
//                   <Card.Title>{item.title}</Card.Title>
//                   <Card.Text>{item.director}</Card.Text>
//                   <Button variant="outline-success" className='mx-2'>{item.year}</Button>
//                   <a href={item.url} style={{color:"brown"}}>Read More</a>
//                   <Button onClick={handleWish} className='btn heartbtn mt-2'><i className="fa-regular fa-heart"></i></Button>
//                 </Card.Body>
//               </Card>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </>
//   );
// };

// export default SecondPart;


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { Button, Card } from 'react-bootstrap';
import { useWishlist } from 'react-use-wishlist';

const SecondPart = ({ data }) => {
  const { addWishlistItem } = useWishlist(); // useWishlist kancasından addWishlistItem fonksiyonunu içeri aktaralım

  const handleWish = (item) => {
    addWishlistItem(item); // handleWish fonksiyonunda addWishlistItem fonksiyonunu kullanarak item değerini dilek listesine ekleyelim
  }

  return (
    <>
      <div className="secondpart">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.director}</Card.Text>
                  <Button variant="outline-success" className='mx-2'>{item.year}</Button>
                  <a href={item.url} style={{ color: "brown" }}>Read More</a>
                  <Button onClick={() => handleWish(item)} className='btn heartbtn mx-2'><i className="fa-regular fa-heart"></i></Button>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SecondPart;
