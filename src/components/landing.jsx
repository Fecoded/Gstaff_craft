import HowItWork from "./howitwork";
import Gallery from "./gallery";
import Footer from "./Footer";
import banner from "../assets/banner.png";
import Logo from "../assets/Logo.png";

const Landing = () => {
  return (
    <div className="d-flex flex-column flex-root">
      <div className="mb-0" id="home">
        <div
          className="bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom landing-dark-bg"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
          }}
        >
          {/* <div className="img-overlay"></div> */}
          <div
            className="landing-header d-flex flex-column"
            data-kt-sticky="true"
            data-kt-sticky-name="landing-header"
            data-kt-sticky-offset="{default: '200px', lg: '300px'}"
          >
            <div className="container" style={{ zIndex: 2, marginTop: "7px" }}>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center flex-equal">
                  <button
                    className="btn btn-icon btn-active-color-primary me-3 d-flex d-lg-none"
                    id="kt_landing_menu_toggle"
                  >
                    <span className="svg-icon svg-icon-2hx">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24" />
                          <rect
                            fill="#000000"
                            x="4"
                            y="5"
                            width="16"
                            height="3"
                            rx="1.5"
                          />
                          <path
                            d="M5.5,15 L18.5,15 C19.3284271,15 20,15.6715729 20,16.5 C20,17.3284271 19.3284271,18 18.5,18 L5.5,18 C4.67157288,18 4,17.3284271 4,16.5 C4,15.6715729 4.67157288,15 5.5,15 Z M5.5,10 L18.5,10 C19.3284271,10 20,10.6715729 20,11.5 C20,12.3284271 19.3284271,13 18.5,13 L5.5,13 C4.67157288,13 4,12.3284271 4,11.5 C4,10.6715729 4.67157288,10 5.5,10 Z"
                            fill="#000000"
                            opacity="0.3"
                          />
                        </g>
                      </svg>
                    </span>
                  </button>

                  <a href="landing.html">
                    <img
                      alt="Logo"
                      src={Logo}
                      className="logo-default h-25px h-lg-30px"
                    />
                    <img
                      alt="Logo"
                      src={Logo}
                      className="logo-sticky h-20px h-lg-65px"
                    />
                  </a>
                </div>

                <div className="d-lg-block" id="kt_header_nav_wrapper">
                  <div
                    className="d-lg-block p-5 p-lg-0"
                    data-kt-drawer="true"
                    data-kt-drawer-name="landing-menu"
                    data-kt-drawer-activate="{default: true, lg: false}"
                    data-kt-drawer-overlay="true"
                    data-kt-drawer-width="200px"
                    data-kt-drawer-direction="start"
                    data-kt-drawer-toggle="#kt_landing_menu_toggle"
                    data-kt-place="true"
                    data-kt-place-mode="prepend"
                    data-kt-place-parent="{default: '#kt_body', lg: '#kt_header_nav_wrapper'}"
                  >
                    <div
                      className="menu menu-column flex-nowrap menu-rounded menu-lg-row menu-title-gray-500 menu-state-title-primary nav nav-flush fs-5 fw-bold"
                      id="kt_landing_menu"
                    >
                      <div className="menu-item">
                        <a
                          className="menu-link nav-link active py-3 px-4 px-xxl-6"
                          href="#kt_body"
                          data-kt-scroll-toggle="true"
                          data-kt-drawer-dismiss="true"
                        >
                          Home
                        </a>
                      </div>

                      <div className="menu-item">
                        <a
                          className="menu-link nav-link py-3 px-4 px-xxl-6"
                          href="#who-are-we"
                          data-kt-scroll-toggle="true"
                          data-kt-drawer-dismiss="true"
                        >
                          Who are we
                        </a>
                      </div>

                      <div className="menu-item">
                        <a
                          className="menu-link nav-link py-3 px-4 px-xxl-6"
                          href="#gallery"
                          data-kt-scroll-toggle="true"
                          data-kt-drawer-dismiss="true"
                        >
                          Gallery
                        </a>
                      </div>

                      <div className="menu-item">
                        <a
                          className="menu-link nav-link py-3 px-4 px-xxl-6"
                          href="#donate"
                          data-kt-scroll-toggle="true"
                          data-kt-drawer-dismiss="true"
                        >
                          Donate
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-equal text-end ms-1">
                  <a href="#donate" className="btn btn-success">
                    Donate
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="d-flex flex-column flex-center w-100 min-h-350px min-h-lg-500px px-9 mb-10"
            // style={{ zIndex: 3 }}
          >
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h3 className="" style={{ color: "#fff" }}>
                To give hope to the displaced children through her craft
              </h3>

              <h3 className="fs-4hx text-white mb-5">
                GSTAFF CRAFT FOUNDATION
              </h3>
            </div>
          </div>
        </div>
        <HowItWork />
        <Gallery />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
