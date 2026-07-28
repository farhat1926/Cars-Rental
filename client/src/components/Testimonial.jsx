import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets';

const Testimonial = () => {

    const testimonials = [
        { id: 1, name: "Mohamad Farhat", location: "Tokyo, Japan", image: assets.testimonial_image_1, testimonial: "The sports car was amazing and gave me an unforgettable driving experience." },
        { id: 2, name: "Dwiki Kurniawan", address: "New York, USA", image: assets.testimonial_image_2, testimonial: "The service was excellent, the car was clean, comfortable, and well-maintained." },
        { id: 3, name: "Andika Zaki", address: "Seoul, South Korea", image: assets.testimonial_image_3, testimonial: "I hope the rental service continues to provide high-quality cars and great support for customers." },
    
    ];

  return (
     <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
            
            <Title title="what our customer say"  subTitle="Discover why discerning travelers choose stayventure for their luxury accommodations around the world."/>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
                {testimonials.map((testimonial, index ) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <img key={index} src={assets.star_icon} alt="star-icon"/>
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.testimonial}"</p>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Testimonial
