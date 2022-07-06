import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Navigation, Autoplay } from "swiper";

interface MyProjectsProps {
  project: Array<{
    slug: string;
    image: string;
    content: string;
    technologies: string;
    websitelink: string;
    githublink: string;
  }>;
}

export function MyProjects({ project }: MyProjectsProps) {
  return (
    <div id="projects" className="w-full py-14 ">
      <h2 className="lg:px-12 transition-all ">
        <span className="text-purple-100">&lt;</span>Projetos
        <span className="text-purple-100"> /&gt;</span>
      </h2>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={5}
        slidesPerView={"auto"}
        pagination={{ clickable: true }}
        autoplay={true}
        loop={true}
        className={`${`w-full h-[500px] max-w-[1080px] rounded-md`}, mySwiper`}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {project &&
          project.map((item) => (
            <SwiperSlide key={item.slug} className="p-5 flex items-center justify-center">
              <section className="w-[400px] p-5 bg-zinc-800 rounded-md shadow-md md:hover:scale-105 md:hover:shadow-lg transition-all md:hover:border-2 border-transparent md:hover:border-purple-100 ">
                <div>
                  <img
                    src={item.image}
                    alt="imagem do repositório"
                    className="w-full h-full object-cover rounded-sm "
                  />
                </div>
                <main className="text-base md:text-sm  ">
                  <p className="py-7 h-36 md:px-2 lg:px-1">
                    {item.content}
                  </p>
                  <div className="h-10 flex items-center text-xs text-purple-100 font-firasans font-semibold ">
                    {item.technologies}
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <a 
                      href={`${item.websitelink}`}
                      target="_blank"
                      className="w-4/5 h-10 p-1 text-base inline-flex items-center justify-center bg-purple-100 rounded hover:brightness-75 transition-all "
                    >
                      Ver site
                    </a>
                    <a
                      className="w-4/5 h-10 p-1 text-base inline-flex items-center justify-center border-2 border-solid border-zinc-200 rounded hover:brightness-75 transition-all "
                      href={`${item.githublink}`}
                      target="_blank"
                    >
                      Github
                    </a>
                  </div>
                </main>
              </section>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
