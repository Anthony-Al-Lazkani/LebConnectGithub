import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook } from 'react-icons/fa'; // Import icons
import { RiTwitterXFill as FaX } from 'react-icons/ri';
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
  Copyright
} from "./footerStyles";

const footer = () => {
  return (
    <Box>

      <FooterContainer>
        <Row>
          <Column>
            <Heading><Link to="/aboutus">About Us</Link></Heading>
            <FooterLink href="#">
              Our Story
            </FooterLink>
            <FooterLink href="#">
              Vision
            </FooterLink>
            <FooterLink href="#">
              Why Join US
            </FooterLink>
          </Column>
          <Column>
          <Heading><Link to="#">Services</Link></Heading>
            <FooterLink> <Link to ="/news">News</Link>
              
            </FooterLink>
            <FooterLink><Link to ="/tourism">Tourism</Link>
            
            </FooterLink>
            <FooterLink href="#">
              Others
            </FooterLink>
          </Column>
          <Column>
            <Heading><Link to="contactus">Contact Us</Link></Heading>
            <FooterLink href="Questions">
             Questions
            </FooterLink>
            <FooterLink href="Inquiries">
             Inquiries
            </FooterLink>
            <FooterLink href="For Business">
              For Business
            </FooterLink>

          </Column>
          <Column>
            <Heading><Link to="#">Social Media</Link></Heading>
            <FooterLink href="https://facebook.com">

              <span
                style={{
                  marginLeft: "10px",
                }}
              ><FaFacebook />
                LConnect
              </span>

            </FooterLink>
            <FooterLink href="https://instagram.com">

              <span
                style={{
                  marginLeft: "10px",
                }}
              ><FaInstagram />
                LConnect
              </span>

            </FooterLink>
            <FooterLink href="https://twitter.com">

              <span
                style={{
                  marginLeft: "10px",
                }}
              ><FaX />
                LConnect
              </span>

            </FooterLink>
            <FooterLink href="#">

              <span
                style={{
                  marginLeft: "10px",
                }}
              >
              </span>

            </FooterLink>
          </Column>
        </Row>
      </FooterContainer>
      <Copyright>
        <p>&copy; 2023 LConnect All rights reserved.</p>
      </Copyright>
    </Box>
  );
};

export default footer;
