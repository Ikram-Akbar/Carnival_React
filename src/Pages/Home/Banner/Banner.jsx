import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function Banner() {
  const urls = [
    " https://i.ibb.co.com/48K7FMt/ethan-hoover-6p-P4-QXefjkg-unsplash.jpg",
    "https://i.ibb.co.com/bjVrXVw/hermes-rivera-7-Ni6j-UYwh-Ew-unsplash.jpg",
    "https://i.ibb.co.com/hK2Gc70/marcus-dall-col-XU-m-MDwe-XR4-unsplash.jpg",
    "https://i.ibb.co.com/yNzMzt3/miles-storey-X45-VKp-WV7hw-unsplash.jpg",
  ];

  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {urls.map((url, idx) => (
          <SwiperSlide key={idx}>
            <img style={{
              width: "100%", height: "500px"
            }} src={url} alt={`Slide ${idx + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
