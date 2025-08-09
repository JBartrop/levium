"use client"
import React, { useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ScrollRevealSection from "./revealSection";

interface TestimonyProps {
    testimonial: string;
    person:string;
    date:string;
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1
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



    return (
        <ScrollRevealSection>
        <section className="my-14 md:m-16 lg:my-0 m-4">
            <h1 className="text-[#fbe7c2] text-2xl font-bold mb-8">What Our Clients Say</h1>
            <Carousel 
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
                
            </Carousel>
        </section>
        </ScrollRevealSection>
    )
}

export default Testimonials;