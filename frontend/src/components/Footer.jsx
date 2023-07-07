import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../assets/styles/Custom.module.css";
import { FaLinkedin, FaGithub, FaTwitter, FaXbox } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>SolarStarPower &copy; {currentYear}</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            <p className={styles.footerFonts}>
              <a
                className={styles.footerFont}
                href="https://www.linkedin.com/in/abraham-varguez/"
              >
                <FaLinkedin />
              </a>
              <a
                className={styles.footerFont}
                href="https://github.com/Abraham-Varguez"
              >
                <FaGithub />
              </a>
              <a className={styles.footerFont} href="https://twitter.com/">
                <FaTwitter />
              </a>
              <a
                className={styles.footerFont}
                href="https://media.istockphoto.com/id/171584082/photo/old-trashcan-clipping-path.jpg?s=612x612&w=0&k=20&c=wOwhB1e6PVmuRtZk7eb8pZ-HmrQjmFQnLXv6O6SaJeA="
              >
                <FaXbox />
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
