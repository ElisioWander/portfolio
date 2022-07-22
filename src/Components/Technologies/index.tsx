import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Navigation, A11y } from "swiper";

interface TechnologiesProps {
  technology: Array<{
    image: string;
    title: string;
  }>;
}

export function Technologies({ technology }: TechnologiesProps) {
  return (
    <div id="tech" className="w-full py-32 bg-zinc-800 ">
      <h2 className="lg:px-12 transition-all ">
        <span className="text-purple-100">&lt;</span>Tecnologias
        <span className="text-purple-100"> /&gt;</span>
      </h2>
      <Swiper
        modules={[Pagination, Navigation, A11y]}
        spaceBetween={5}
        slidesPerView={"auto"}
        pagination={{ clickable: true }}
        navigation={true}
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
        {technology &&
          technology.map((item) => (
            <SwiperSlide key={item.title} className="p-5 px-10 flex items-center justify-center ">
              <section className="w-[180px] p-5 rounded-md md:hover:scale-105 transition-all ">
                <div>
                  <img
                    src={item.image}
                    alt="imagem do repositório"
                    className="w-full h-full object-cover rounded-sm "
                  />
                </div>
                <div className="text-base text-center mt-5  ">
                  <span>{item.title}</span>
                </div>
              </section>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
