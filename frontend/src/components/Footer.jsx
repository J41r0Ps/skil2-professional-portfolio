function Footer() {
    return (
        <footer className="py-4 mt-auto shadow-lg" style={{ backgroundColor: 'var(--tm-text-900)' }}>
            <div className="container text-center">

                <div className="d-flex justify-content-center gap-4 mb-3">
                    <a href="https://github.com/J41r0Ps" target="_blank" rel="noopener noreferrer" className="text-white-50 text-decoration-none" aria-label="GitHub">
                        <i className="bi bi-github fs-4 transition-transform hover-scale"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/jairo-nacurena/" target="_blank" rel="noopener noreferrer" className="text-white-50 text-decoration-none" aria-label="LinkedIn">
                        <i className="bi bi-linkedin fs-4 transition-transform hover-scale"></i>
                    </a>
                </div>

                <p className="mb-0 text-white-50 small">
                    &copy; {new Date().getFullYear()} Jairo Nacurena. Built for Thomas More SKIL2.
                </p>
            </div>
        </footer>
    );
}

export default Footer;