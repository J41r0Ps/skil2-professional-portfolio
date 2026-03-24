function Home() {
    return (
        <div className="container mt-5">
            <div className="row align-items-center min-vh-75">
                <div className="col-md-6">
                    <h1 className="display-4">Hi, I'm Jairo</h1>
                    <h2>Software Developer & Data Enthusiast</h2>
                    <p className="lead mt-3">
                        Welcome to my SKIL2 Portfolio. I build modern web applications and analyze data.
                    </p>
                    <button className="btn btn-tm-primary btn-lg mt-3">View My Work</button>
                </div>
                <div className="col-md-6 text-center">
                    {/* Aquí irá tu logo o foto en el futuro */}
                    <div style={{ width: '300px', height: '300px', backgroundColor: 'var(--tm-tertiary-400)', borderRadius: '50%', margin: '0 auto' }}></div>
                </div>
            </div>
        </div>
    );
}

export default Home;