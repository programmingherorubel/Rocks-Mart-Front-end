import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';

const AboutUs = () => {
    const fadeIn = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(50px)' },
        config: { duration: 800 },
      });
    return (
        <>This is about page</>
    );
};

export default AboutUs;