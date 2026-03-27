import React from 'react';
// Import your professional photo using the alias '@'
import profilePic from '@/assets/profile.jpg';

function About() {
    return (
        <div className="container py-5">

            {/* PAGE HEADER */}
            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold" style={{ color: 'var(--tm-text-900)' }}>About Me</h1>
                <div className="mx-auto" style={{ width: '60px', height: '4px', backgroundColor: 'var(--tm-secondary-400)', borderRadius: '2px' }}></div>
            </div>

            <div className="row g-5">

                {/* LEFT COLUMN: Photo, Motivation & Hobbies */}
                <div className="col-lg-4 text-center text-lg-start">
                    <div className="position-relative d-inline-block mb-4">
                        <img
                            src={profilePic}
                            alt="Jairo Nacurena Professional"
                            className="img-fluid rounded-3 shadow-lg border border-4 border-white"
                            style={{ width: '100%', maxWidth: '350px', objectFit: 'cover' }}
                        />
                    </div>

                    <h3 className="h4 fw-bold" style={{ color: 'var(--tm-text-900)' }}>Why Applied Computer Science?</h3>
                    <p style={{ color: 'var(--tm-text-700)' }}>
                        My fascination with technology started at a young age, when I enjoyed repairing things and helping neighbors with their tech-related problems. That early curiosity naturally evolved into a deeper interest in how systems work behind the scenes. I chose the <strong>APP/AI</strong> specialization at Thomas More because I am driven by the logic behind backend systems and the potential of Artificial Intelligence. I enjoy the challenge of translating complex business requirements into robust and scalable software architectures.
                    </p>

                    <h3 className="h4 mt-4 fw-bold" style={{ color: 'var(--tm-text-900)' }}>Hobbies & Passions</h3>
                    <p style={{ color: 'var(--tm-text-700)' }}>
                        Outside of coding, I like to stay active by going to the gym and playing football, which helps me stay disciplined and focused. I also enjoy traveling and discovering new cultures. In my free time, I often work on personal programming projects, experimenting with new tools and building ideas of my own.
                    </p>
                </div>

                {/* RIGHT COLUMN: Ambitions, Skills & CV */}
                <div className="col-lg-8">

                    {/* AMBITIONS */}
                    <section className="mb-5 p-4 rounded-3 shadow-sm bg-white border-start border-4" style={{ borderColor: 'var(--tm-primary-400)' }}>
                        <h3 className="h4 fw-bold" style={{ color: 'var(--tm-text-900)' }}>Future Dreams & Ambitions</h3>
                        <p className="mb-0" style={{ color: 'var(--tm-text-700)' }}>
                            In the near future, I aim to grow as a specialized <strong>Backend Developer</strong> or <strong>Data/AI Engineer</strong>. I am passionate about creating intelligent solutions—whether it's building RESTful APIs, training Machine Learning models, or designing microservices. My ultimate goal is to work on projects that leverage data and solid software design to make a tangible impact on the business and society.
                        </p>
                    </section>

                    {/* SKILLS SECTION */}
                    <section className="mb-5">
                        <h3 className="h4 mb-4 fw-bold" style={{ color: 'var(--tm-text-900)' }}>My Skill Arsenal</h3>

                        <div className="row g-4">
                            {/* Hard Skills */}
                            <div className="col-md-6">
                                <div className="card h-100 border-0 shadow-sm bg-white p-4 rounded-3">
                                    <h4 className="h5 fw-bold mb-3" style={{ color: 'var(--tm-primary-400)' }}>
                                        <i className="bi bi-laptop me-2"></i>Hard Skills
                                    </h4>
                                    <ul className="list-unstyled mb-0" style={{ color: 'var(--tm-text-700)', lineHeight: '1.8' }}>
                                        <li><strong>Backend:</strong> .NET Core (C#), Java (Spring Boot), Python (FastAPI), PHP (Laravel)</li>
                                        <li><strong>Frontend:</strong> React.js, Tailwind CSS, Bootstrap 5, Alpine.js</li>
                                        <li><strong>Data & AI:</strong> Machine Learning, Deep Learning, Pandas, Numpy, SQL</li>
                                        <li><strong>DevOps:</strong> Docker, GitHub Actions (CI/CD), Linux</li>
                                        <li><strong>Architecture:</strong> MVC, Microservices, REST APIs, SOLID, GRASP</li>
                                        <li><strong>Security:</strong> OWASP, CIANA, Cryptography</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Soft Skills */}
                            <div className="col-md-6">
                                <div className="card h-100 border-0 shadow-sm bg-white p-4 rounded-3">
                                    <h4 className="h5 fw-bold mb-3" style={{ color: 'var(--tm-secondary-400)' }}>
                                        <i className="bi bi-people me-2"></i>Soft Skills
                                    </h4>
                                    <ul className="list-unstyled mb-0" style={{ color: 'var(--tm-text-700)', lineHeight: '1.8' }}>
                                        <li><strong>Methodologies:</strong> Agile/Scrum, SSDLC</li>
                                        <li><strong>Communication:</strong> Client presentation, technical reporting (English & Dutch)</li>
                                        <li><strong>Business Acumen:</strong> Process modeling (BPMN), Strategic alignment (BMC)</li>
                                        <li><strong>Teamwork:</strong> Collaborative problem solving and active listening</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CV DOWNLOAD (Requirement) */}
                    <section className="p-4 bg-white rounded-3 shadow-sm d-flex flex-column flex-md-row align-items-center justify-content-between">
                        <div>
                            <h3 className="h5 fw-bold mb-1" style={{ color: 'var(--tm-text-900)' }}>Curriculum Vitae</h3>
                            <p className="mb-3 mb-md-0 text-muted small">Download or view my full professional background.</p>
                        </div>
                        <div className="d-flex gap-2">
                            {/* Make sure the file CV_Jairo_Nacurena.pdf is inside the /public folder */}
                            <a href="/CV_Jairo_Nacurena.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-tm-primary px-4 shadow-sm">
                                <i className="bi bi-eye me-2"></i>View
                            </a>
                            <a href="/CV_Jairo_Nacurena.pdf" download="CV_Jairo_Nacurena.pdf" className="btn btn-outline-secondary px-4 shadow-sm">
                                <i className="bi bi-download me-2"></i>Download
                            </a>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}

export default About;