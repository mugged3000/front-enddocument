import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { MdLaptopMac, MdPhoneIphone, MdBrush } from 'react-icons/md';
import { GrDeploy } from "react-icons/gr";

const Services = () => {
  const services = [
    {
      icon: <MdLaptopMac size={48} />,
      title: 'Web Development',
      description: 'Custom website development with clean, efficient code and modern technologies to ensure optimal performance.'
    },
    {
      icon: <MdPhoneIphone size={48} />,
      title: 'Responsive Design',
      description: 'Mobile-first approach to ensure your website looks great and functions perfectly on all devices.'
    },
    {
      icon: <GrDeploy size={48} />,
      title: 'Work Deployment',
      description: 'Deploying innovative solutions that drive results, demonstrating my ability to deliver high-quality projects on time and on budget. '
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="bg-shape bg-circle"></div>
      <Container>
        <h2 className="section-title">My Services</h2>
        <p className="section-subtitle">What I can do for you</p>
        
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-4 mb-4 mb-md-0">
              <div className="service-card p-4 text-center">
                <div className="service-icon mb-4">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p className="mb-4">{service.description}</p>
                <Button variant="outline-primary">Learn More</Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;