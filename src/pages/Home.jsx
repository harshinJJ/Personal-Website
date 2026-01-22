import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaTelegramPlane,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
  FaWhatsapp,
} from "react-icons/fa";

import { useParallax } from "../hooks/useParallax";
import { useAboutParallax } from "../hooks/useAboutParallax";
import { useMobileReveal } from "../hooks/useMobileReveal";
import { useLoadMore } from "../hooks/useLoadMore";

import "../styles/Home.css";
import "../styles/About-us.css";
import "../styles/My-projects.css";
import "../styles/Contact.css";

import { tech } from "../data/tech";
import { allPages } from "../data/projects";

import bgVideo from "../assets/Background/backgroundvideo.mp4";
import ProfileImg from "../assets/profile/profile-img.jpg";
import ContactForm from "../email/contactform";

const Home = () => {
  useLoadMore("loadMoreBtn", "moreProjects");

  useAboutParallax();
  useMobileReveal();
  useParallax();

  const [page, setPage] = React.useState(1);
  const currentProjects = allPages[page];

  return (
    <section>
      {/*  Hero Section*/}
      <section className="section2 section2-desktop " id="home">
        <video className="section2-bg-video" autoPlay muted loop playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>
        {/* <section className="section1">Hello world.</section> */}

        <div className="section2-row section2-row-top">
          <h1
            className="section2-title parallax parallax-fast"
            data-parallax
            data-depth="3"
          >
            Full<span className="section2dash">–</span>stack
          </h1>

          <div className="section2-project-btn-wrapper">
            <div className="section2-project-btn-pill">Projects</div>
            <div className="section2-project-btn-circle">
              <span className="arrow-icon">→</span>
            </div>
          </div>
        </div>

        <div className="section2-row section2-row-bottom">
          <p className="section2-desc ">
            I focus on <span>writing clean, maintainable and clear code </span>
            that <br /> helps keep the entire{" "}
            <span> development experience enjoyable</span>.
          </p>

          <h1
            className="section2-title section2-developer parallax parallax-fast"
            data-parallax
            data-depth="3"
          >
            Developer
          </h1>
        </div>

        <div className="section2-social-row parallax parallax-slow">
          <div className="social-group">
            <a
              href="https://wa.me/966553869253"
              target="_blank"
              rel="noopener noreferrer"
              className="section2-social-btn"
            >
              <FaWhatsapp /> Whatsapp
            </a>

            <a
              href="https://github.com/harshinJJ"
              target="_blank"
              rel="noopener noreferrer"
              className="section2-social-btn"
            >
              <FaGithub /> Github
            </a>
          </div>

          <a
            href="https://linkedin.com/in/harshin4057"
            target="_blank"
            rel="noopener noreferrer"
            className="section2-social-btn"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <div className="social-group">
            <a
              href="https://twitter.com/har_shi___"
              target="_blank"
              rel="noopener noreferrer"
              className="section2-social-btn"
            >
              <FaXTwitter /> Twitter
            </a>

            <a
              href="https://instagram.com/harshin.mansoor"
              target="_blank"
              rel="noopener noreferrer"
              className="section2-social-btn"
            >
              <FaInstagram /> Instagram
            </a>
          </div>
        </div>

        <div className="slider-wrapper">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".slider-next",
              prevEl: ".slider-prev",
            }}
            slidesPerView={4}
            centeredSlides
            spaceBetween={30}
            loop
            className="tech-slider"
          >
            {tech.map((t) => (
              <SwiperSlide key={t.id} className="tech-slide">
                <div className="tech-item">
                  <img src={t.img} alt={t.name} className="tech-icon" />
                  <p className="tech-name">{t.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="slider-controls">
            <button className="slider-prev">←</button>
            <button className="slider-next">→</button>
          </div>
        </div>
      </section>

      <section className="section2-mobile">
        <video className="section2-bg-video" autoPlay muted loop playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>

        <h1 className="mobile-title">
          <span className="line load from-left delay-2" data-depth="2.5">
            Full
          </span>
          <span className="line load from-right delay-3" data-depth="2.2">
            stack
          </span>
          <span className="line load from-bottom delay-4" data-depth="2">
            Developer
          </span>
        </h1>

        <p className="mobile-desc load from-right delay-5" data-depth="1.2">
          My goal is to <span>write clean, maintainable</span> code and keep
          development enjoyable.
        </p>

        <div className="mobile-project-btn load pop delay-6" data-depth="1">
          <div className="mobile-pill">Projects</div>
          <div className="mobile-circle">→</div>
        </div>
        <div className="slider-wrapper load from-bottom delay-11">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".slider-next",
              prevEl: ".slider-prev",
            }}
            slidesPerView={2.3}
            centeredSlides={true}
            spaceBetween={20}
            loop
            className="tech-slider"
          >
            {tech.map((t) => (
              <SwiperSlide key={t.id} className="tech-slide">
                <div className="tech-item">
                  <img src={t.img} alt={t.name} className="tech-icon" />
                  <p className="tech-name">{t.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mobile-socials">
          <div
            className="section2-social-btn load rise delay-9"
            data-depth="0.6"
          >
            <FaLinkedin /> LinkedIn
          </div>
          <div
            className="section2-social-btn load rise delay-8"
            data-depth="0.6"
          >
            <FaGithub /> Github
          </div>

          <div
            className="section2-social-btn load rise delay-10"
            data-depth="0.6"
          >
            <FaXTwitter /> Twitter
          </div>
          <div
            className="section2-social-btn load rise delay-11"
            data-depth="0.6"
          >
            <FaInstagram /> Instagram
          </div>
        </div>
      </section>
      {/*  Hero Section Ends*/}
      {/*  About me section 2 starts*/}
      <section className="about-section" id="about">
        <div className="about-top">
          <p className="about-label">... /About me ...</p>

          <h2 className="about-title fade-up delay-1 reveal">
            Hello! I'm Harshin, I'm a <span>full-stack developer.</span>
            <br />
            More than <span>2 years</span> experience.
          </h2>
        </div>

        <div className="about-bottom">
          <div className="skills-left">
            <div class="skills-wrapper">
              <div className="skill-card card1 white m-reveal m-left">
                <h3>Frontend</h3>
                <p>
                  React.js / Next.js / Redux / Bootstrap / Material UI /
                  JavaScript / HTML / CSS / Laravel Blade
                </p>
              </div>

              <div className="skill-card card2 dark m-reveal m-right">
                <h3>Backend</h3>
                <p>Node.js / Express.js / PHP / Laravel</p>
              </div>

              <div className="skill-card card3 dark m-reveal m-bottom">
                <h3>CMS & Platforms</h3>
                <p>WordPress / Drupal / OctoberCMS</p>
              </div>

              <div className="skill-card card4 dark m-reveal m-left">
                <h3>Version Control</h3>
                <p>Git / GitHub</p>
              </div>
              <div className="floating-icons fade-up delay-6 reveal">
                <div className="icon-circle">
                  <FaGithub />
                </div>

                <a
                  href="https://github.com/harshinJJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-circle white-circle"
                >
                  <FaArrowUp className="tilted-arrow" />
                </a>
              </div>

              <div className="skill-card card5 dark m-reveal m-right">
                <h3>Media & File Handling</h3>
                <p>Cloudinary / CuteFTP</p>
              </div>
              <div className="skill-card card6 dark m-reveal m-bottom">
                <h3>Server Administration</h3>
                <p>
                  Ubuntu Server / Nginx / Firewall / SSH / PM2 / Reverse Proxy
                </p>
              </div>
            </div>

            <p className="fav-text">
              Some of my <i>favorite technologies, topics, or tools</i> that I
              worked with
            </p>
          </div>

          <div className="right">
            <div className="circle-outline"></div>

            <div className="photo-card fade-in-right delay-3 reveal">
              <img src={ProfileImg} alt="profile" />
            </div>
          </div>
        </div>
      </section>

      {/*  About me Section 2 Ends*/}
      {/*  Projects Section 2 Starts*/}

      <section className="project" id="projects">
        <div className="project-header">
          <h2 className="project-heading">My Projects</h2>
        </div>

        <div className="pagination">
          <button
            className={`page-btn ${page === 1 ? "active" : ""}`}
            onClick={() => setPage(1)}
          >
            1
          </button>
          <button
            className={`page-btn ${page === 2 ? "active" : ""}`}
            onClick={() => setPage(2)}
          >
            2
          </button>
        </div>

        <div className="project-grid">
          {currentProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <h2 className="project-title">{project.title}</h2>

              <div className="project-tags">
                {project.tags.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              <p className="project-desc">{project.desc}</p>

              <div className="floating-icons">
                <div className="icon-circle">
                  <FaGithub />
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-circle white-circle"
                >
                  <FaArrowUp className="tilted-arrow" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*  Projects Section 2 Ends*/}
      {/*  Contact Section 2 starts*/}

      <section className="contact" id="contact">
        <div className="contact-left">
          <h1 className="contact-name">
            <span className="name-line name-first">Harshin</span>
            <span className="name-line name-last">Mansoor</span>
          </h1>

          <p className="contact-role">
            Full-stack{" "}
            <span className="mobile-hide-br">
              <br />
            </span>{" "}
            developer
          </p>
        </div>

        <div className="contact-right">
          <p className="contact-label">... /Contacts ...</p>

          <div className="contact-nav">
            <a href="#home">Main</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contacts</a>
          </div>

          <div className="contact-box">
            <ContactForm />
          </div>
        </div>
      </section>
      <div className="contact-social-row">
        <a
          className="social-btn"
          href="https://wa.me/966553869253"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp /> Whatsapp
        </a>
        <a
          className="social-btn"
          href="https://github.com/harshinJJ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> Github
        </a>

        <a
          className="social-btn"
          href="https://linkedin.com/in/harshin4057"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>

        <a
          className="social-btn"
          href="https://instagram.com/harshin.mansoor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram /> Instagram
        </a>

        <a
          className="social-btn"
          href="https://twitter.com/har_shi___"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter /> Twitter
        </a>
      </div>

      {/*  Contact Section 2 Ends*/}
    </section>
  );
};

export default Home;
