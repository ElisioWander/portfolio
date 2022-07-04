import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Navigation, Autoplay } from "swiper";

export function Technologies() {
  return (
    <div id="tech" className="w-full py-14 bg-zinc-800 " >
      <h2 className="lg:px-12 transition-all ">
        <span className="text-purple-100">&lt;</span>Tecnologias
        <span className="text-purple-100"> /&gt;</span>
      </h2>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={5}
        slidesPerView={"auto"}
        pagination={{ clickable: true }}
        autoplay={true}
        loop={true}
        className={`${`w-full h-[380px] max-w-[1080px] rounded-md`}, mySwiper`}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
      <SwiperSlide className="p-5 flex items-center justify-center" >
        <section className="w-[180px] p-5 rounded-md md:hover:scale-105 transition-all " >
          <div>
            <img 
              src="/images/html.svg"
              alt="imagem do repositório"
              className="w-full h-full object-cover rounded-sm "
            />
          </div>
          <div className="text-base text-center mt-5  " >
            <span>HTML5</span>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide className="p-5 flex items-center justify-center" >
        <section className="w-[180px] p-5 rounded-md md:hover:scale-105 transition-all " >
          <div>
            <img 
              src="/images/css.svg"
              alt="imagem do repositório"
              className="w-full h-full object-cover rounded-sm "
            />
          </div>
          <div className="text-base text-center mt-5  " >
            <span>HTML5</span>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}