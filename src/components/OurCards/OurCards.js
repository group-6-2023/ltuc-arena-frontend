import "./OurCards.css";

function OurCards() {
  return (
    <div className="ourCards">
      <h3 className="team">Our Team:</h3>

      <div className="container1">
        <div className="card card0">
          <div className="border">
            <h4 className="nameH">Esmail Jawabreh</h4>
            <p className="nameH" style={{ fontSize: "15px" }}>
              Full-Stack Devlooper
            </p>
            <div className="icons">
              <a
                className="linkA"
                href="https://www.linkedin.com/in/esmail-jawabreh-80624a250/"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a
                className="linkA"
                href="https://www.instagram.com/esmail.sudgi/"
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a className="linkA" href="https://github.com/Esmail-Jawabreh">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="card card2">
          <div className="border">
            <h4 className="nameH">Amjad Al-Sayyed</h4>
            <p className="nameH" style={{ fontSize: "15px" }}>
              Full-Stack Devlooper
            </p>
            <div className="icons">
              <a
                className="linkA"
                href="https://www.linkedin.com/in/amjad-al-sayyed-reactdev/"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a
                className="linkA"
                href="https://www.instagram.com/amjad_alsayyed/"
              >
                {" "}
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a className="linkA" href="https://github.com/amjadalsayyed">
                {" "}
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="card card3">
          <div className="border">
            <h4 className="nameH">Salah Hammash</h4>
            <p className="nameH" style={{ fontSize: "15px" }}>
              Full-Stack Devlooper
            </p>
            <div className="icons">
              <a
                className="linkA"
                href="https://www.linkedin.com/in/salah-hammash-03bb17264/"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a
                className="linkA"
                href="https://www.instagram.com/salah_hamash_/"
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a className="linkA" href="https://github.com/salahhammash">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container2">
        <div className="card card4">
          <div className="border">
            <h4 className="nameH">Yazan Abu Shhab</h4>
            <p className="nameH" style={{ fontSize: "15px" }}>
              Full-Stack Devlooper
            </p>
            <div className="icons">
              <a
                className="linkA"
                href="https://www.linkedin.com/in/yazan-abu-shhab-a389a4174"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a className="linkA" href="/">
                {" "}
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a className="linkA" href="https://github.com/yazan2181993">
                {" "}
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="card card5">
          <div className="border">
            <h4 className="nameH">Anas Al-Sallak</h4>
            <p className="nameH" style={{ fontSize: "15px" }}>
              Full-Stack Devlooper
            </p>
            <div className="icons">
              <a className="linkA" href="/">
                {" "}
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a className="linkA" href="/">
                {" "}
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a className="linkA" href="https://github.com/AnasAlsallak">
                {" "}
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCards;
