import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "../App.css";
import SingleSlider from "./SingleSlider";

const Slider = () => {
  return (
    <div className="slider">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide
          style={{
            backgroundImage: `url("https://static.vecteezy.com/system/resources/thumbnails/033/458/286/small_2x/a-small-house-sits-on-the-edge-of-a-lake-at-sunset-ai-generated-photo.jpg")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <SingleSlider title="BANGLADESH" />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url("https://st.depositphotos.com/30909842/57692/i/450/depositphotos_576921806-stock-photo-koh-poda-krabi-thailand-asian.jpg")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <SingleSlider title="THAILAND" />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url("https://www.shutterstock.com/image-photo/pura-ulun-danu-bratan-hindu-600nw-279422480.jpg")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <SingleSlider title="INDONESIA" />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url("https://st4.depositphotos.com/1875497/24039/i/450/depositphotos_240394502-stock-photo-beautiful-architecture-building-exterior-city.jpg")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <SingleSlider title="MALAYSIA" />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url("https://www.shutterstock.com/image-photo/dreamy-sunset-landscape-halong-bay-600nw-1872545227.jpg")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <SingleSlider title="VIETNAM" />
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url("https://www.shutterstock.com/image-photo/angkor-wat-temple-complex-cambodia-600nw-707816683.jpg")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <SingleSlider title="CAMBODIA" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
