import React from "react";
import { Button, Group } from '@mantine/core';
import { Link } from "react-router-dom";

import "./style.css";
import "../../App.css";

function HeroSection() {
 return (
 <div className="hero-container">
 <div className="hero-text-container">
 <h1>Welcome to Chess Auto Prep</h1>

 <h3>Designed to help your chess preparation</h3>
 <Group my="lg" style={{ justifyContent: "center" }}>
 <Link to="/about">
 <Button color="lighter-dark" size="md">Learn More</Button>
 </Link>
 <Button variant="filled" size="md" href="/shop" component={Link}>Join</Button>
</Group>
 </div>
 </div>
 );
}

export default HeroSection;