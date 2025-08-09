"use client"
import React, { useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ScrollRevealSection from "./revealSection";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
// import "swiper/css/bundle";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface TestimonyProps {
    testimonial: string;
    person:string;
    date:string;
}

const responsive = {
  // superlargedesktop
  3000: {
    breakpoint: { max: 4000, min: 3000 },
    slidesPerView: 5
  },
  // desktop
  1024: {
    breakpoint: { max: 3000, min: 1024 },
    slidesPerView: 3
  },
  // tablet
  640: {
    breakpoint: { max: 1024, min: 640 },
    slidesPerView: 2
  },
  //mobile
  0: {
    breakpoint: { max: 640, min: 0 },
    slidesPerView: 1
  }
};


const testimonial: TestimonyProps[] = [
     {
    testimonial: "Levium transformed our empty space into a warm, inviting home. The custom woodwork was not only beautiful but incredibly functional.",
    person: "Sarah L. Residential",
    date: "June 2025",
  },
  {
    testimonial: "We hired Levium for our office interior, and their attention to detail in wood paneling and shelving was unmatched. Professional from start to finish.",
    person: "Mark R. CEO",
    date: "May 2025",
  },
  {
    testimonial: "From concept to installation, Levium handled everything flawlessly. The oak cabinetry in our kitchen is the centerpiece of our home now.",
    person: "Amira H. Homeowner",
    date: "April 2025",
  },
  {
    testimonial: "We wanted a minimalist interior with custom wood features, and Levium delivered beyond expectations. The craftsmanship is top-tier.",
    person: "Luis T. Architect",
    date: "March 2025",
  },
  {
    testimonial: "Levium’s team was a dream to work with. They blended Scandinavian wood designs with our vision perfectly. Highly recommended!",
    person: "Janet D. Designer",
    date: "February 2025",
  },
  {
    testimonial: "The custom bookshelves and desk they built for my study are both beautiful and practical. It truly feels like a personalized space now.",
    person: "Ken W. Writer",
    date: "January 2025",
  },
  {
    testimonial: "Our retail store now has a stunning walnut interior thanks to Levium. Customers constantly compliment the wooden design work!",
    person: "Celia M. StoreOwner",
    date: "December 2024",
  }
]


const Testimonials: React.FC = () => {

  const swiper = useSwiper();



    return (
        <ScrollRevealSection>
        <section className="my-14 md:m-16 lg:my-0 m-4">
            <h1 className="text-[#fbe7c2] text-2xl font-bold mb-8">What Our Clients Say</h1>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel, Keyboard]}
              grabCursor
              // centeredSlides
              breakpoints={responsive}
              speed={600}
              effect="overflow"
              loop
              mousewheel
              pagination={{clickable: true}}
              scrollbar={{ draggable: true }}
              navigation={{
                 nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
              }}
             >
              {testimonial.map((testimony) => (
                <SwiperSlide>
                  <div className="bg-[#444444] h-[200px] text-[#fbe7c2] p-5 w-11/12 m-auto mb-8 flex flex-col  justify-between rounded-md" key={testimony.person}>
                    <p className="text-left mb-1 ">{testimony.testimonial}</p>
                    <div className="flex justify-between text-sm opacity-80">
                        <p>{testimony.person}</p>
                        <p>{testimony.date}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <button className="swiper-button-next absolute right-0 top-20 z-10 bg-[#555555] p-2 rounded-full" onClick={() => swiper?.slideNext()}> <FaArrowRight size={20} /></button>
              <button className="swiper-button-prev absolute left-0 top-20 z-10 bg-[#555555] p-2 rounded-full" onClick={() => swiper?.slidePrev()}> <FaArrowLeft size={20} /> </button>
              
            </Swiper>
            {/* <Carousel 
                responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={false}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                className="w-full"
                infinite={true}
            >
                {testimonial.map((testimony) => (
                    <div className="bg-[#444444] h-[200px] text-[#fbe7c2] p-5 w-11/12 m-auto rounded-md" key={testimony.person}>
                        <p className="text-left mb-1 ">{testimony.testimonial}</p>
                        <div className="flex justify-between">
                            <p>{testimony.person}</p>
                            <p>{testimony.date}</p>
                        </div>
                    </div>
                ))}
                
            </Carousel> */}
        </section>
        </ScrollRevealSection>
    )
}

export default Testimonials;