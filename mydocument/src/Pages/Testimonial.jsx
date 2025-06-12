import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: ' Johnson',
      role: 'CEO, TechSolutions Inc.',
      text: '"Working with Collins was an absolute pleasure. They delivered our project ahead of schedule and the quality of work exceeded our expectations. Highly recommended!"',
      image: 'https://directory.africa-business.com/assets/images/ARIs-solution.jpg',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Marketing Director, Global Brands',
      text: '"Collins transformed our outdated website into a modern, user-friendly platform that has significantly increased our conversion rates. Their attention to detail is remarkable."',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4tnS8eMF93cA-pWl2E-JDKyKXGWA8rbQ-pQ&s',
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [testimonials.length]);
   
  return (
    <section id="testimonials" className="section testimonials">
      <div className="bg-shape bg-circle"></div>
      <Container>
        <h2 className="section-title">Client Testimonials</h2>
        <p className="section-subtitle">What my clients say about me</p>
        
        <div className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`testimonial-item p-5 text-center ${index === currentTestimonial ? 'active' : 'd-none'}`}
            >
              <div className="testimonial-img mb-4 mx-auto">
                <img src={testimonial.image} alt={testimonial.name} className="img-fluid rounded-circle" />
              </div>
              <p className="testimonial-text mb-4">{testimonial.text}</p>
              <div className="testimonial-author mb-1">{testimonial.name}</div>
              <div className="testimonial-role mb-3">{testimonial.role}</div>
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < testimonial.rating ? 'text-warning' : 'text-secondary'}>
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;