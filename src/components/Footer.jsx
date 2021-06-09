import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <>
      <div className="mb-0">
        <div className="landing-curve landing-dark-color">
          <svg
            viewBox="15 -1 1470 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 48C4.93573 47.6644 8.85984 47.3311 12.7725 47H1489.16C1493.1 47.3311 1497.04 47.6644 1501 48V47H1489.16C914.668 -1.34764 587.282 -1.61174 12.7725 47H1V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>

        <div className="landing-dark-bg pt-20">
          <div className="container">
            <div className="row py-10 py-lg-20">
              <div className="col-lg-6 pe-lg-16 mb-10 mb-lg-0">
                <div className="rounded landing-dark-border p-9 mb-10">
                  <h2 className="text-white">Would you need a Contact Us?</h2>

                  <span className="fw-normal fs-4 text-gray-700">
                    Email us to{" "}
                    <span className="text-white opacity-50 text-hover-primary">
                      support@Gstaffcraft .com
                    </span>
                  </span>
                  <br />
                  <span className="fw-normal fs-4 text-gray-700">
                    Call us on{" "}
                    <span className="text-white opacity-50 text-hover-primary">
                      +2348093122137
                    </span>
                  </span>
                </div>

                <div className="rounded landing-dark-border p-9">
                  <h2 className="text-white">Your Donation Matters</h2>

                  <span className="fw-normal fs-4 text-gray-700">
                    We rely on Donation to keep these children off their camps
                    to a healthy home.
                  </span>
                </div>
              </div>

              <div className="col-lg-6 ps-lg-16">
                <div className="d-flex justify-content-center">
                  <div className="d-flex fw-bold flex-column me-20">
                    <h4 className="fw-bolder text-gray-400 mb-6">
                      Gstaff Craft
                    </h4>

                    <a
                      href="/"
                      className="text-white opacity-50 text-hover-primary fs-5 mb-6"
                    >
                      Home
                    </a>

                    <a
                      href="#who-are-we"
                      className="text-white opacity-50 text-hover-primary fs-5 mb-6"
                    >
                      Who are we
                    </a>

                    <a
                      href="#gallery"
                      className="text-white opacity-50 text-hover-primary fs-5 mb-6"
                    >
                      Galley
                    </a>
                    <a
                      href="#donate"
                      className="text-white opacity-50 text-hover-primary fs-5 mb-6"
                    >
                      Donate
                    </a>
                  </div>

                  <div className="d-flex fw-bold flex-column ms-lg-20">
                    <h4 className="fw-bolder text-gray-400 mb-6">
                      Stay Connected
                    </h4>

                    <a href="/" className="mb-6">
                      <img
                        src="assets/media/svg/brand-logos/facebook-4.svg"
                        className="h-20px me-2"
                        alt=""
                      />
                      <span className="text-white opacity-50 text-hover-primary fs-5 mb-6">
                        Facebook
                      </span>
                    </a>

                    <a href="/" className="mb-6">
                      <img
                        src="assets/media/svg/brand-logos/github.svg"
                        className="h-20px me-2"
                        alt=""
                      />
                      <span className="text-white opacity-50 text-hover-primary fs-5 mb-6">
                        Github
                      </span>
                    </a>

                    <a href="/" className="mb-6">
                      <img
                        src="assets/media/svg/brand-logos/twitter.svg"
                        className="h-20px me-2"
                        alt=""
                      />
                      <span className="text-white opacity-50 text-hover-primary fs-5 mb-6">
                        Twitter
                      </span>
                    </a>

                    <a href="/" className="mb-6">
                      <img
                        src="assets/media/svg/brand-logos/dribbble-icon-1.svg"
                        className="h-20px me-2"
                        alt=""
                      />
                      <span className="text-white opacity-50 text-hover-primary fs-5 mb-6">
                        Dribbble
                      </span>
                    </a>

                    <a href="/" className="mb-6">
                      <img
                        src="assets/media/svg/brand-logos/instagram-2-1.svg"
                        className="h-20px me-2"
                        alt=""
                      />
                      <span className="text-white opacity-50 text-hover-primary fs-5 mb-6">
                        Instagram
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="landing-dark-separator"></div>

          <div className="container">
            <div className="d-flex flex-column flex-md-row flex-stack py-7 py-lg-10">
              <div className="d-flex align-items-center order-2 order-md-1">
                <a href="landing.html">
                  <img alt="Logo" src={Logo} className="h-15px h-md-35px" />
                </a>

                <span className="mx-5 fs-6 fw-bold text-gray-600 pt-1">
                  © 2021 Gstaff Academy Ltd .
                </span>
              </div>

              <ul className="menu menu-gray-600 menu-hover-primary fw-bold fs-6 fs-md-5 order-1 mb-5 mb-md-0">
                <li className="menu-item">
                  <a href="/" className="menu-link px-2">
                    Home
                  </a>
                </li>
                <li className="menu-item mx-5">
                  <a href="/" className="menu-link px-2">
                    Gallery
                  </a>
                </li>
                <li className="menu-item">
                  <a href="/" className="menu-link px-2">
                    Donate
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true">
        <span className="svg-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            version="1.1"
          >
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <polygon points="0 0 24 0 24 24 0 24" />
              <rect
                fill="#000000"
                opacity="0.5"
                x="11"
                y="10"
                width="2"
                height="10"
                rx="1"
              />
              <path
                d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z"
                fill="#000000"
                fill-rule="nonzero"
              />
            </g>
          </svg>
        </span>
      </div>
    </>
  );
};

export default Footer;
