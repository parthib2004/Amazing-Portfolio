import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
// Import icons for navigation buttons
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Projects = () => {
  const { Projects } = content;
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem]"
          />
          <div className="relative" data-aos="fade-left">
            <Swiper
              ref={swiperRef}
              pagination={{
                clickable: true,
              }}
              spaceBetween={20}
              modules={[Pagination]}
              className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
            >
              {Projects.project_content.map((content, i) => (
                <SwiperSlide
                  key={i}
                  className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
                >
                  <img src={content.image} alt="..." />
                  <div className="flex flex-col gap-1 mt-2">
                    <h5 className="font-bold font-Poppins">{content.title}</h5>
                    {content.link && (
                      <a
                        href={content.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-gray self-end"
                      >
                        READ MORE
                      </a>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 bg-white hover:bg-primary hover:text-white text-primary p-3 rounded-full z-10 shadow-xl border-2 border-primary transition-all duration-300"
            >
              <MdKeyboardArrowLeft size={32} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 bg-white hover:bg-primary hover:text-white text-primary p-3 rounded-full z-10 shadow-xl border-2 border-primary transition-all duration-300"
            >
              <MdKeyboardArrowRight size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;