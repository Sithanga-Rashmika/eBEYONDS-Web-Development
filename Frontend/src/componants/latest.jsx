import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Latest = () => {
  return (
    <div className="latest-container">
      <h1 className="title">Latest News</h1>
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000 }}
        speed={2000}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="row">
            <div className="col-md-4 mb-4">
              <MDBCard>
                <MDBCardImage src="/images/img1.png" position="top" alt="..." />
                <MDBCardBody>
                  <MDBCardText>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est.
                  </MDBCardText>
                  <div className="a-wrapper">
                    <a href="#">
                      Read <img src="/images/right-icon.svg" alt="right icon" />
                    </a>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="col-md-4 mb-4">
              <MDBCard>
                <MDBCardImage src="/images/img2.png" position="top" alt="..." />
                <MDBCardBody>
                  <MDBCardText>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est.
                  </MDBCardText>
                  <div className="a-wrapper">
                    <a href="#">
                      Read <img src="/images/right-icon.svg" alt="right icon" />
                    </a>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="col-md-4 mb-4">
              <MDBCard>
                <MDBCardImage src="/images/img3.png" position="top" alt="..." />
                <MDBCardBody>
                  <MDBCardText>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est.
                  </MDBCardText>
                  <div className="a-wrapper">
                    <a href="#">
                      Read <img src="/images/right-icon.svg" alt="right icon" />
                    </a>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="row">
            <div className="col-md-4 mb-4">
              <MDBCard>
                <MDBCardImage src="/images/img2.png" position="top" alt="..." />
                <MDBCardBody>
                  <MDBCardText>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est.
                  </MDBCardText>
                  <div className="a-wrapper">
                    <a href="#">
                      Read <img src="/images/right-icon.svg" alt="right icon" />
                    </a>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="col-md-4 mb-4">
              <MDBCard>
                <MDBCardImage src="/images/img3.png" position="top" alt="..." />
                <MDBCardBody>
                  <MDBCardText>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est.
                  </MDBCardText>
                  <div className="a-wrapper">
                    <a href="#">
                      Read <img src="/images/right-icon.svg" alt="right icon" />
                    </a>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="col-md-4 mb-4">
              <MDBCard>
                <MDBCardImage src="/images/img1.png" position="top" alt="..." />
                <MDBCardBody>
                  <MDBCardText>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est.
                  </MDBCardText>
                  <div className="a-wrapper">
                    <a href="#">
                      Read <img src="/images/right-icon.svg" alt="right icon" />
                    </a>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Latest;
