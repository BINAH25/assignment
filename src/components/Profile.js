import React from "react";

export default function Profile() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg text-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            SALMA
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav d-flex ">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="#"
              >
                Home
              </a>
              <a className="nav-link text-light" href="about.html">
                About
              </a>
              <a className="nav-link text-light" href="education.html">
                Education
              </a>
              <a className="nav-link text-light" href="hobby.html">
                Hobby
              </a>
              <a className="nav-link text-light" href="contact.html">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="container pt-5 ">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 justify-content-center text-center">
            <div className="shadow p-3 mb-5 bg-body rounded">
              <img src="images/salma.jpg" alt="salma's image" className="img" />
              <p className="fs-4">
                {" "}
                Hello I'm <br /> Princess Salma
              </p>
              <h5>
                I’m a really awesome person, Everyday I wake up, <br />I do
                house chores, I code then go back to sleep
              </h5>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 text-center ">
            <div className="shadow p-3 mb-5 bg-body rounded">
              <img
                src="images/graduation-cap.png"
                alt="graduation image"
                id="img"
                className="text-primary"
              />
              <h4 className="fs-5">JHS</h4>
              <p>Hamdaniya Islamic JHS</p>
              <h4 className="fs-5">SHS</h4>
              <p> Amanten Senior High</p>
              <h4 className="fs-5">University</h4>
              <p>University of Ghana</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 text-center">
            <div className="shadow p-3 mb-5 bg-body rounded">
              <img
                src="images/programmer (1).png"
                alt="graduation image"
                id="img"
                className="text-primary"
              />
              <h4 className="fs-3">Hobby</h4>
              <p>
                {" "}
                I like to code so that I’ll become an awesome web developer
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 text-center">
            <div className="shadow p-3 mb-5 bg-body rounded">
              <img
                src="images/contact-book.png"
                alt="graduation image"
                id="img"
                className="text-primary"
              />
              <h4 className="fs-3"> Contact</h4>
              <p> Phone : 0545478786 </p>

              <p> Email : princesssalma030@gmail.com </p>

              <p>Facebook : princess Salma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
