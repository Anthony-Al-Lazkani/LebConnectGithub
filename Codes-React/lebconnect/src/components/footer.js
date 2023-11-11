import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook} from 'react-icons/fa'; // Import icons
import {RiTwitterXFill as FaX} from 'react-icons/ri';
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./footerStyles";

const footer = () => {
  return (
    <Box>

      <FooterContainer>
        <Row>
          <Column>
            <Heading><Link to="/aboutus">About Us</Link></Heading>
            <FooterLink href="#">
              Aim
            </FooterLink>
            <FooterLink href="#">
              Vision
            </FooterLink>
            <FooterLink href="#">
              Testimonials
            </FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">
              Writing
            </FooterLink>
            <FooterLink href="#">
              Internships
            </FooterLink>
            <FooterLink href="#">
              Coding
            </FooterLink>
          </Column>
          <Column>
            <Heading><Link to="contactus">Contact Us</Link></Heading>
            <FooterLink href="#">
              Uttar Pradesh
            </FooterLink>
            <FooterLink href="#">
              Ahemdabad
            </FooterLink>
            <FooterLink href="#">
              Indore
            </FooterLink>

          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">

              <span
                style={{
                  marginLeft: "10px",
                }}
              ><FaFacebook />
                Facebook
              </span>

            </FooterLink>
            <FooterLink href="#">

              <span
                style={{
                  marginLeft: "10px",
                }}
              ><FaInstagram />
                Instagram
              </span>

            </FooterLink>
            <FooterLink href="https://twitter.com/MassoudNohra1">

              <span
                style={{
                  marginLeft: "10px",
                }}
              ><FaX />
                LebConnect
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
    </Box>
  );
};

export default footer;
