import React from "react";

interface TestimonyProps {
    testimonial: string;
    person:string;
    date:string;
}

const testimonial: TestimonyProps[] = [
    {
        testimonial: "this is the testiomial",
        person: "me",
        date: "today"
    },
]


const Testimonials: React.FC = () => {
    return (
        <section>
            <h1 className="text-[#fbe7c2] text-2xl font-bold mb-3">What Our Clients Say</h1>
            {/* <Carousel className="w-full max-w-xl">
                <CarouselContent>
                    <CarouselItem >slide 1</CarouselItem>
                    <CarouselItem >slide 2</CarouselItem>
                    <CarouselItem >slide 3</CarouselItem>
                    <CarouselItem >slide 4</CarouselItem>
                    <CarouselItem >slide 5</CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel> */}
        </section>
    )
}

export default Testimonials;