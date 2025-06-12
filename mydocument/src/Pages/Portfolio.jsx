import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { FaGithub, FaLink } from 'react-icons/fa';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      category: 'web',
      title: 'my First Portfoilo ,built with Vanilla`s',
      description: 'Welly Responsive ,First Vanilla Project Portofolio ',
      tags: ['HTML', 'CSS', 'JavaScript','Responsived'],
      image: 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/06/Portfolio-site-of-the-front-end-developer-Ian-Dunkerley-1024x481.webp',
      liveLink: 'https://myportfoliodocs.netlify.app/' // Add your live project link here
    },
    {
      id: 2,
      category: 'app',
      title: 'Food Recipe Store',
      description: 'Crafted a mouth-watering food recipe site that showcases culinary delights in a clean and responsive design. The site features easy-to-follow recipes, beautiful food photography, and a user-friendly interface that encourages exploration and sharing.',
      tags: ['React', 'Bootstrap', 'React-Bootstrap','Responsived'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfD-XSPn5Px9GJgRlPqQsIb8rnJpESUbR6tA&s',
      liveLink: 'https://recipefoodstore.netlify.app/' // Add your live project link here
    },
    {
      id: 3,
      category: 'ecommerce',
      title: 'E-Commerce Platform',
      description: 'Transformed an e-commerce platform into a visually stunning and user-friendly experience, with a focus on seamless mobile responsiveness and intuitive product filtering. The redesign resulted in improved customer engagement and increased sales potential.',
      tags: ['React.js', 'Bootstrap','React-Boostrap','Responsived '],
      image: 'https://cdn.businessday.ng/2022/05/e-commerce-.jpg',
      liveLink: 'https://mymaterialstore.netlify.app/' // Add your live project link here
    },
    {
      id: 4,
      category: 'gym',
      title: 'PowerFit @Gyming',
      description: 'Designed and developed a dynamic gym website that empowers users to take control of their fitness journey. The site features customizable workout plans, class schedules, and a sleek interface that motivates users to reach their fitness goals.',
      tags: ['React.js', 'Bootstrap','React-Boostrap','Responsived '],
      image: 'https://www.healthshield.co.uk/wp-content/uploads/2024/09/Additional_Benefits_Gym-1-scaled.jpeg',
      liveLink: 'https://powerfitbuild.netlify.app/' // Add your live project link here
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="section portfolio">
      <div className="bg-shape bg-circle"></div>
      <Container>
        <h2 className="section-title">My Portfolio</h2>
        <p className="section-subtitle">Some of my recent work</p>
        
        <div className="portfolio-filter d-flex justify-content-center flex-wrap mb-5">
          <Button 
            variant={activeFilter === 'all' ? 'primary' : 'outline-primary'} 
            className="me-2 mb-2" 
            onClick={() => setActiveFilter('all')}
          >
            All
          </Button>
          <Button 
            variant={activeFilter === 'web' ? 'primary' : 'outline-primary'} 
            className="me-2 mb-2" 
            onClick={() => setActiveFilter('web')}
          >
            Basics Portfolio
          </Button>
          <Button 
            variant={activeFilter === 'app' ? 'primary' : 'outline-primary'} 
            className="me-2 mb-2" 
            onClick={() => setActiveFilter('app')}
          >
           Food Recipe 
          </Button>
          <Button 
            variant={activeFilter === 'ecommerce' ? 'primary' : 'outline-primary'} 
            className="mb-2" 
            onClick={() => setActiveFilter('ecommerce')}
          >
            E-Commerce
          </Button>
          <Button 
            variant={activeFilter === 'gym' ? 'primary' : 'outline-primary'} 
            className="mb-2" 
            onClick={() => setActiveFilter('gym')}
          >
           Gym
          </Button>
        </div>
        
        <div className="row">
          {filteredItems.map(item => (
            <div key={item.id} className="col-lg-4 col-md-6 mb-4">
              <div className="portfolio-item">
                <div className="portfolio-img">
                  <img src={item.image} alt={item.title} className="img-fluid" />
                  <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                    <a href="#"><FaGithub /></a>
                    <a href="#"><FaLink /></a>
                  </div>
                </div>
                <div className="portfolio-info p-4">
                  <h3>{item.title}</h3>
                  <p className="mb-3">{item.description}</p>
                  <div className="portfolio-tags d-flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="portfolio-tag">{tag}</span>
                    ))}
                  </div>
                  <Button 
                    variant="primary" 
                    className="mt-3" 
                    href={item.liveLink} 
                    target="_blank"
                  >
                    Preview
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;