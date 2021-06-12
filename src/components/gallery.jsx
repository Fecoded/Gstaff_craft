import { useState } from "react";
import { img } from "../assets";
import Donation from "./donation";
import swal from "sweetalert";

const Gallery = () => {
  const [images] = useState([
    // "https://res.cloudinary.com/djndb6xca/image/upload/v1623405799/paintingUpdated_lwy3hy.jpg",
    // "https://res.cloudinary.com/djndb6xca/image/upload/v1623405432/painting_ulvxhd.jpg",
    "https://res.cloudinary.com/djndb6xca/image/upload/v1623405401/Gstaff_craft_quupmn.jpg",
  ]);

  const onDownload = (pictures) => {
    swal({
      title: "Do you want to download?",
      text: "You are entitled to our piece of Art",
      icon: "info",
      buttons: true,
      dangerMode: true,
    }).then(async (download) => {
      if (download) {
        for (var i = 0; i < pictures.length; i++) {
          const response = await fetch(pictures[i]);
          response.blob().then((blob) => {
            let url = window.URL.createObjectURL(blob);
            let a = document.createElement("a");
            a.href = url;
            a.download = "gstaff.jpg";
            a.click();
          });
        }
        swal("Thanks for Visting", {
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      <Donation />

      <div className="mb-lg-n15 position-relative z-index-2 galley-mt">
        <div className="container">
          <div
            className="card d-flex justify-content-center align-items-center"
            style={{
              filter: "drop-shadow(0px 0px 40px rgba(68, 81, 96, 0.08))",
            }}
          >
            <div className="card-body p-lg-20">
              <div className="text-center mb-5 mb-lg-10">
                <h3 className="fs-1hx text-dark mb-5">
                  Upon visiting this site whether with intention to make
                  donations or not, you are entitled to our gift of a <br />
                  PIECE ART WITH <br />
                  <span className="fs-2hx">
                    TITLE: "WOUNDED AND LOST IN ISOLATION”
                  </span>
                </h3>
                <button
                  className="btn btn-success"
                  onClick={() => onDownload(images)}
                >
                  Click to download
                </button>
              </div>
            </div>
          </div>
          <div
            className="card mt-10"
            style={{
              filter: "drop-shadow(0px 0px 40px rgba(68, 81, 96, 0.08))",
            }}
          >
            <div className="card-body p-lg-20">
              <div className="text-center mb-5 mb-lg-10">
                <h3
                  className="fs-2hx text-dark mb-5"
                  id="gallery"
                  data-kt-scroll-offset="{default: 100, lg: 150}"
                >
                  Our Gallery
                </h3>
              </div>

              <div className="d-flex flex-center mb-5 mb-lg-15">
                <ul className="nav border-transparent flex-center fs-5 fw-bold">
                  <li className="nav-item">
                    <a
                      className="nav-link text-gray-500 text-active-primary px-3 px-lg-6 active"
                      href="#latest"
                      data-bs-toggle="tab"
                      data-bs-target="#kt_landing_projects_latest"
                    >
                      Latest
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <a
                      className="nav-link text-gray-500 text-active-primary px-3 px-lg-6"
                      href="#webdesign"
                      data-bs-toggle="tab"
                      data-bs-target="#kt_landing_projects_web_design"
                    >
                      Web Design
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-gray-500 text-active-primary px-3 px-lg-6"
                      href="#mobileapp"
                      data-bs-toggle="tab"
                      data-bs-target="#kt_landing_projects_mobile_apps"
                    >
                      Mobile Apps
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-gray-500 text-active-primary px-3 px-lg-6"
                      href="#development"
                      data-bs-toggle="tab"
                      data-bs-target="#kt_landing_projects_development"
                    >
                      Development
                    </a>
                  </li> */}
                </ul>
              </div>

              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="kt_landing_projects_latest"
                >
                  <div className="row g-10">
                    <div className="col-lg-6">
                      {/* <a
                        className="d-block card-rounded overlay h-lg-100"
                        data-fslightbox="lightbox-projects"
                        href="assets/media/images/Gstaff_craft.jpg"
                      > */}
                      <div
                        className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px"
                        style={{
                          backgroundImage: `url(${img.painting2})`,
                        }}
                      ></div>

                      {/* <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                          <i className="bi bi-eye-fill fs-3x text-white"></i>
                        </div> */}
                      {/* </a> */}
                    </div>

                    <div className="col-lg-6">
                      <div className="row g-10 mb-10">
                        <div className="col-lg-6">
                          {/* <a
                            className="d-block card-rounded overlay"
                            data-fslightbox="lightbox-projects"
                            href="assets/media/images/painting.jpg"
                          > */}
                          <div
                            className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                            style={{
                              backgroundImage: `url(${img.painting})`,
                            }}
                          ></div>

                          {/* <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                              <i className="bi bi-eye-fill fs-3x text-white"></i>
                            </div> */}
                          {/* </a> */}
                        </div>

                        <div className="col-lg-6">
                          {/* <a
                            className="d-block card-rounded overlay"
                            data-fslightbox="lightbox-projects"
                            href="assets/media/images/painting1.jpg"
                          > */}
                          <div
                            className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                            style={{
                              backgroundImage: `url(${img.painting1})`,
                            }}
                          ></div>

                          {/* <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                              <i className="bi bi-eye-fill fs-3x text-white"></i>
                            </div> */}
                          {/* </a> */}
                        </div>
                      </div>

                      {/* <a
                        className="d-block card-rounded overlay"
                        data-fslightbox="lightbox-projects"
                        href="assets/media/images/painting.jpg"
                      > */}
                      {/* <div
                        className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                        style={{
                          backgroundImage: `url(${img.painting1})`,
                        }}
                      ></div> */}

                      {/* <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                          <i className="bi bi-eye-fill fs-3x text-white"></i>
                        </div> */}
                      {/* </a> */}
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="kt_landing_projects_web_design"
                >
                  <div className="row g-10">
                    <div className="col-lg-6">
                      <a
                        className="d-block card-rounded overlay h-lg-100"
                        data-fslightbox="lightbox-projects"
                        href="assets/media/stock/600x600/img-11.jpg"
                      >
                        <div
                          className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px"
                          style={{
                            backgroundImage:
                              "url('assets/media/stock/600x600/img-11.jpg')",
                          }}
                        ></div>

                        <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                          <i className="bi bi-eye-fill fs-3x text-white"></i>
                        </div>
                      </a>
                    </div>

                    <div className="col-lg-6">
                      <div className="row g-10 mb-10">
                        <div className="col-lg-6">
                          <a
                            className="d-block card-rounded overlay"
                            data-fslightbox="lightbox-projects"
                            href="assets/media/stock/600x600/img-12.jpg"
                          >
                            <div
                              className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                              style={{
                                backgroundImage:
                                  "url('assets/media/stock/600x600/img-12.jpg')",
                              }}
                            ></div>

                            <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                              <i className="bi bi-eye-fill fs-3x text-white"></i>
                            </div>
                          </a>
                        </div>

                        <div className="col-lg-6">
                          <a
                            className="d-block card-rounded overlay"
                            data-fslightbox="lightbox-projects"
                            href="assets/media/stock/600x600/img-21.jpg"
                          >
                            <div
                              className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                              style={{
                                backgroundImage:
                                  "url('assets/media/stock/600x600/img-21.jpg')",
                              }}
                            ></div>

                            <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                              <i className="bi bi-eye-fill fs-3x text-white"></i>
                            </div>
                          </a>
                        </div>
                      </div>

                      <a
                        className="d-block card-rounded overlay"
                        data-fslightbox="lightbox-projects"
                        href="assets/media/stock/600x400/img-20.jpg"
                      >
                        <div
                          className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                          style={{
                            backgroundImage:
                              "url('assets/media/stock/600x600/img-20.jpg')",
                          }}
                        ></div>

                        <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                          <i className="bi bi-eye-fill fs-3x text-white"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="kt_landing_projects_mobile_apps"
                >
                  <div className="row g-10">
                    <div className="col-lg-6">
                      <div className="row g-10 mb-10">
                        <div className="col-lg-6">
                          <a
                            className="d-block card-rounded overlay"
                            data-fslightbox="lightbox-projects"
                            href="assets/media/stock/600x600/img-16.jpg"
                          >
                            <div
                              className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                              style={{
                                backgroundImage:
                                  "url('assets/media/stock/600x600/img-16.jpg')",
                              }}
                            ></div>

                            <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                              <i className="bi bi-eye-fill fs-3x text-white"></i>
                            </div>
                          </a>
                        </div>

                        <div className="col-lg-6">
                          <a
                            className="d-block card-rounded overlay"
                            data-fslightbox="lightbox-projects"
                            href="assets/media/stock/600x600/img-12.jpg"
                          >
                            <div
                              className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                              style={{
                                backgroundImage:
                                  "url('assets/media/stock/600x600/img-12.jpg')",
                              }}
                            ></div>

                            <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                              <i className="bi bi-eye-fill fs-3x text-white"></i>
                            </div>
                          </a>
                        </div>
                      </div>

                      <a
                        className="d-block card-rounded overlay"
                        data-fslightbox="lightbox-projects"
                        href="assets/media/stock/600x400/img-15.jpg"
                      >
                        <div
                          className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                          style={{
                            backgroundImage:
                              "url('assets/media/stock/600x600/img-15.jpg')",
                          }}
                        ></div>

                        <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                          <i className="bi bi-eye-fill fs-3x text-white"></i>
                        </div>
                      </a>
                    </div>

                    <div className="col-lg-6">
                      <a
                        className="d-block card-rounded overlay h-lg-100"
                        data-fslightbox="lightbox-projects"
                        href="assets/media/stock/600x600/img-23.jpg"
                      >
                        <div
                          className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px"
                          style={{
                            backgroundImage:
                              "url('assets/media/stock/600x600/img-23.jpg')",
                          }}
                        ></div>

                        <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                          <i className="bi bi-eye-fill fs-3x text-white"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="kt_landing_projects_development"
                >
                  <div className="row g-10">
                    <div className="col-lg-6">
                      <a
                        className="d-block card-rounded overlay h-lg-100"
                        data-fslightbox="lightbox-projects"
                        href="assets/media/stock/600x600/img-15.jpg"
                      >
                        <div
                          className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px"
                          style={{
                            backgroundImage:
                              "url('assets/media/stock/600x600/img-15.jpg')",
                          }}
                        ></div>

                        <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                          <i className="bi bi-eye-fill fs-3x text-white"></i>
                        </div>
                      </a>
                    </div>

                    <div className="col-lg-6">
                      <div className="row g-10 mb-10">
                        <div className="col-lg-6">
                          <a
                            className="d-block card-rounded overlay"
                            data-fslightbox="lightbox-projects"
                            href="assets/media/stock/600x600/img-22.jpg"
                          >
                            <div
                              className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                              style={{
                                backgroundImage:
                                  "url('assets/media/stock/600x600/img-22.jpg')",
                              }}
                            ></div>

                            <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                              <i className="bi bi-eye-fill fs-3x text-white"></i>
                            </div>
                          </a>
                        </div>

                        <div className="col-lg-6">
                          <a
                            className="d-block card-rounded overlay"
                            data-fslightbox="lightbox-projects"
                            href="assets/media/stock/600x600/img-21.jpg"
                          >
                            <div
                              className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                              style={{
                                backgroundImage:
                                  "url('assets/media/stock/600x600/img-21.jpg')",
                              }}
                            ></div>

                            <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                              <i className="bi bi-eye-fill fs-3x text-white"></i>
                            </div>
                          </a>
                        </div>
                      </div>

                      <a
                        className="d-block card-rounded overlay"
                        data-fslightbox="lightbox-projects"
                        href="assets/media/stock/600x400/img-14.jpg"
                      >
                        <div
                          className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                          style={{
                            backgroundImage:
                              "url('assets/media/stock/600x600/img-14.jpg')",
                          }}
                        ></div>

                        <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                          <i className="bi bi-eye-fill fs-3x text-white"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
