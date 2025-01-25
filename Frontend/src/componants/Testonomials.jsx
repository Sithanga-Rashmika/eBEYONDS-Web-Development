import React from "react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; 

const Testonomials = () => {
  return (
    <>
      <div className="testonomial-container">
        <h1 className="title">Testimonials</h1>

        <Swiper
          modules={[Navigation, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          speed={2000}
          navigation
        >
          <SwiperSlide>
            <div className="testimonial-slide">
              <div className="quote-icon-top-right">
                <img src="/images/quote-right-Icon.svg" alt="Quote" />
              </div>
              <p className="testimonial-text">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </p>
              <p className="testimonial-author">
                - Lorem ipsum dolor <br />
                <span>Labore et dolore</span>
              </p>
              <div className="quote-icon-bottom-left">
                <img src="/images/quote-right-Icon.svg" alt="Quote" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-slide">
              <div className="quote-icon-top-right">
                <img src="/images/quote-right-Icon.svg" alt="Quote" />
              </div>
              <p className="testimonial-text">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </p>
              <p className="testimonial-author">
                - Lorem ipsum dolor <br />
                <span>Labore et dolore</span>
              </p>
              <div className="quote-icon-bottom-left">
                <img src="/images/quote-right-Icon.svg" alt="Quote" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Testonomials;
