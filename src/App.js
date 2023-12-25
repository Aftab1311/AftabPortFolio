import "./App.css";
import hand from "./wave.png";
import { useState } from "react";
import work from "./work.png";
import laptop from "./laptop.webp";
import animateicon from "./text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <h3 className="logo">AFTAB AHMED</h3>
        <span className="menu-button" onClick={toggleMenu}>
          {!isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6l16 0"></path>
              <path d="M4 12l16 0"></path>
              <path d="M4 18l16 0"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6l-12 12"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          )}
        </span>
        <ul className="desktop-menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      {isMenuOpen && (
        <div className="mobile-nav">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}

      <section id="home" className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>Front-End React Developer</h1>
                <img src={hand} alt="waving_hand" />
                <p>
                  Hi, I'm Aftab Ahmed. A passionate Front-end React Developer
                  based in Ghaziabad, India. 📍
                </p>
                <span>
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/aftabahmed1311/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-brand-linkedin"
                    >
                      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                      <path d="M8 11l0 5"></path>
                      <path d="M8 8l0 .01"></path>
                      <path d="M12 16l0 -5"></path>
                      <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                    </svg>
                  </a>
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/Aftab1311/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-brand-github"
                    >
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div className="hero-img"></div>
            </div>
            <div className="skills">
              <p>Tech Stack</p>
              <div className="logos">
                <ul>
                  <li>
                    <img
                      src="https://skillicons.dev/icons?i=html,css"
                      alt="skill-icon"
                    />
                  </li>
                  <li>
                    <img
                      src="https://skillicons.dev/icons?i=js,ts"
                      alt="skill-icon"
                    />
                  </li>
                  <li>
                    <img
                      src="https://skillicons.dev/icons?i=react,next"
                      alt="skill-icon"
                    />
                  </li>
                  <li>
                    <img
                      src="https://skillicons.dev/icons?i=tailwind,scss"
                      alt="skill-icon"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="container">
          <div className="img_side">
            <img src={work} alt="emoji" class="work_emoji" />
            <img src={laptop} alt="mee" class="img-side__main-img" />
            <span>
              <img src={animateicon} alt="text" />
            </span>
          </div>
          <div className="text_side">
            <h3>About me</h3>
            <h4>
              A dedicated Front-end Developer <br /> based in Ghaziabad, India
              📍
            </h4>
            <p>
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I
              excel in designing and maintaining responsive websites that offer
              a smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am also
              a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications.
            </p>
          </div>
        </div>
      </section>
      <section id="project" class="project">
        <div class="project_container">
          <p>projects</p>
          <h3>Each project is a unique piece of development 🧩</h3>
          <div class="project_cards">
            <div class="project1">
              <div class="pro__img">
                <a
                  target="_blank"
                  href="https://car-rental-ten.vercel.app/"
                  rel="noreferrer"
                >
                  <img
                    src="/static/media/car-rental-full.c58b37da333d73238fdd.webp"
                    alt="website"
                    style={{
                      transform: "translateY(0%)",
                      transition: "transform 10s ease-in-out 0s",
                    }}
                  />
                </a>
              </div>
              <div class="pro__text">
                <h3>
                  Car Rental <span class="date-class">(February 2023)</span> 🚗
                </h3>
                <p>
                  A car rental website is an online platform that allows users
                  to rent cars for personal or business use. The website
                  provides an interface for searching, comparing, and reserving
                  cars.
                </p>
                <div class="stack">
                  <p>React</p>
                  <p>SCSS</p>
                </div>
                <div class="links">
                  <a
                    target="_blank"
                    href="https://github.com/stefvndev/car-rental"
                    rel="noreferrer"
                  >
                    Code{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-brand-github"
                    >
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    href="https://car-rental-ten.vercel.app/"
                    rel="noreferrer"
                  >
                    Live Demo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-external-link"
                    >
                      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                      <path d="M11 13l9 -9"></path>
                      <path d="M15 4h5v5"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="project2 reversed-proj">
              <div class="pro__img">
                <a
                  target="_blank"
                  href="https://coindom-crypto-search.vercel.app/"
                  rel="noreferrer"
                >
                  <img
                    src="/static/media/coindom-full.c5fef9ca2f47e52897f8.png"
                    alt="website"
                    style={{
                      transform: "translateY(0%)",
                      transition: "transform 10s ease-in-out 0s",
                    }}
                  />
                </a>
              </div>
              <div class="pro__text">
                <h3>
                  Coindom <span class="date-class">(February 2023)</span> 🪙
                </h3>
                <p>
                  Coindom is a crypto app that allows users to search for
                  information about various cryptocurrencies in real-time.
                </p>
                <div class="stack">
                  <p>React</p>
                  <p>SCSS</p>
                </div>
                <div class="links">
                  <a
                    target="_blank"
                    href="https://github.com/stefvndev/coindom-crypto"
                    rel="noreferrer"
                  >
                    Code{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-brand-github"
                    >
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    href="https://coindom-crypto-search.vercel.app/"
                    rel="noreferrer"
                  >
                    Live Demo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-external-link"
                    >
                      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                      <path d="M11 13l9 -9"></path>
                      <path d="M15 4h5v5"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="project3">
              <div class="pro__img">
                <a
                  target="_blank"
                  href="https://gymate-iota.vercel.app/"
                  rel="noreferrer"
                >
                  <img
                    src="/static/media/gymate-home.52d00d03c15713c601c4.webp"
                    alt="website"
                    style={{
                      transform: "translateY(0%)",
                      transition: "transform 10s ease-in-out 0s",
                    }}
                  />
                </a>
              </div>
              <div class="pro__text">
                <h3>
                  Gymate <span class="date-class">(January 2023)</span> 🏋️
                </h3>
                <p>
                  A gym website is a comprehensive resource for fitness
                  information, class schedules, membership options, and tools to
                  help users achieve their fitness goals.
                </p>
                <div class="stack">
                  <p>React</p>
                  <p>Tailwind CSS</p>
                </div>
                <div class="links">
                  <a
                    target="_blank"
                    href="https://github.com/stefvndev/Gymate"
                    rel="noreferrer"
                  >
                    Code{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-brand-github"
                    >
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    href="https://gymate-iota.vercel.app/"
                    rel="noreferrer"
                  >
                    Live Demo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-external-link"
                    >
                      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                      <path d="M11 13l9 -9"></path>
                      <path d="M15 4h5v5"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="project4 reversed-proj">
              <div class="pro__img">
                <a
                  target="_blank"
                  href="https://minimalist-e-commerce.vercel.app/"
                  rel="noreferrer"
                >
                  <img
                    src="/static/media/ecom.f10b3cdd799be85c19da.webp"
                    alt="website"
                    style={{
                      transform: "translateY(0%)",
                      transition: "transform 10s ease-in-out 0s",
                    }}
                  />
                </a>
              </div>
              <div class="pro__text">
                <h3>
                  Ecommerce <span class="date-class">(December 2022)</span> 🛒
                </h3>
                <p>
                  With a focus on simplicity and clean design, this store
                  prioritize user experience, making it easy for customers to
                  find and purchase the products they need.
                </p>
                <div class="stack">
                  <p>React</p>
                  <p>Vanila CSS</p>
                </div>
                <div class="links">
                  <a
                    target="_blank"
                    href="https://github.com/stefvndev/Minimalist-E-commerce"
                    rel="noreferrer"
                  >
                    Code{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-brand-github"
                    >
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    href="https://minimalist-e-commerce.vercel.app/"
                    rel="noreferrer"
                  >
                    Live Demo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-external-link"
                    >
                      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                      <path d="M11 13l9 -9"></path>
                      <path d="M15 4h5v5"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="title">
          <p>contact</p>
          <h3>Don't be shy! Hit me up! 👇</h3>
        </div>
        <div className="icons">
        <div class="contact__icon-box">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="tabler-icon tabler-icon-map-search"
                  >
                    <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                    <path d="M9 4v13"></path>
                    <path d="M15 7v5"></path>
                    <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                    <path d="M20.2 20.2l1.8 1.8"></path>
                  </svg>
                </span>
                <div class="contact__info">
                  <h3>Location</h3>
                  <p>Ghaziabad, India</p>
                </div>
              </div>
              <div class="contact__icon-box">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="tabler-icon tabler-icon-mail"
                  >
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                    <path d="M3 7l9 6l9 -6"></path>
                  </svg>
                </span>
                <div class="contact__info">
                  <h3>Mail</h3>
                  <a href="mailto:md.aftabehsan@gmail.com ">
                    md.aftabehsan@gmail.com
                  </a>
                </div>
              </div>
        </div>
      </section>
      <footer>
        <div class="container">
          <div class="footerc">
            <h3>Copyright © 2023. All rights are reserved</h3>
            <div class="footerc__socials">
              <a
                aria-label="linkedin"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/aftabahmed1311/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="tabler-icon tabler-icon-brand-linkedin"
                >
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M8 11l0 5"></path>
                  <path d="M8 8l0 .01"></path>
                  <path d="M12 16l0 -5"></path>
                  <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
              </a>
              <a
                aria-label="github"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/stefvndev"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="tabler-icon tabler-icon-brand-github"
                >
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
