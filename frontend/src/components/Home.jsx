import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from '@/assets/profile.jpg';

function HeroSection() {
    return (
        <section className="container py-5 min-vh-75 d-flex align-items-center">
            <div className="row align-items-center w-100 g-5">

                <div className="col-12 col-md-7 order-2 order-md-1 text-center text-md-start">
                    <h1 className="display-4 fw-bold mb-3" style={{ color: 'var(--tm-text-900)' }}>
                        Hi, I'm <span style={{ color: 'var(--tm-primary-400)' }}>Jairo Nacurena</span>
                    </h1>

                    <h2 className="h3 mb-4 text-secondary">
                        Full Stack Developer | Backend, Data & AI Enthusiast
                    </h2>

                    <p className="lead mb-4" style={{ color: 'var(--tm-text-700)' }}>
                        Welcome to my professional portfolio. My passion for technology started when I was a kid, and today it drives my career. I specialize in building robust backend systems, analyzing complex data, and creating intelligent solutions.
                    </p>

                    <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
                        <Link to="/about" className="btn btn-tm-primary btn-lg px-4">
                            Get to Know Me
                        </Link>
                        <a href="https://github.com/J41r0Ps" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary btn-lg px-3 shadow-sm">
                            <i className="bi bi-github me-2"></i>GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/jairo-nacurena/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary btn-lg px-3 shadow-sm">
                            <i className="bi bi-linkedin me-2"></i>LinkedIn
                        </a>
                    </div>
                </div>

                <div className="col-12 col-md-5 order-1 order-md-2 text-center">
                    <div className="position-relative d-inline-block">
                        <div className="position-absolute top-50 start-50 translate-middle"
                            style={{ width: '105%', height: '105%', backgroundColor: 'var(--tm-tertiary-400)', borderRadius: '50%', zIndex: -1 }}>
                        </div>

                        <img
                            src={profilePic}
                            alt="Jairo Nacurena"
                            className="img-fluid rounded-circle shadow-lg border border-4 border-white"
                            style={{ maxWidth: '320px', objectFit: 'cover', aspectRatio: '1/1' }}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

function Home() {
    return (
        // Wrapper for the entire home page
        <div className="home-page" style={{ backgroundColor: 'var(--tm-bg-light)', minHeight: '100vh' }}>
            <HeroSection />
        </div>
    );
}

export default Home;