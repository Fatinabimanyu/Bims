import { useState } from "react";
import { Link } from "react-router-dom";
import gambar1 from "../../assets/agrowisata/pantai awan.JPG";
import gambar2 from "../../assets/agrowisata/sunrise.JPG";
import gambar3 from "../../assets/agrowisata/sunsetp.jpg";
import map_muncak from "../../assets/agrowisata/map-muncak.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
// import "./tentang.css";

const Agrowisata1 = () => {
  const handlePendem = () => {
    const element = document.getElementById("pendem");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleGogik = () => {
    const element = document.getElementById("gogik");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleSawit = () => {
    const element = document.getElementById("sawit");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  var settings = {
    dots: false,
    // arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  const [width] = useState(window.innerWidth);
  const isDesktop = width > 640;

  return (
    <div
      className="items-center bg-[#FFFDEC] pt-24 pb-16 px-8 xl:px-24"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="">
        <div className="relative items-center text-white text-sm">
          <div className="font-black pointer-events-none">
            <div className="mt-1 justify-center sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
              <div className="text-[#545B77] font-Satisfy text-2xl sm:text-3xl xl:text-4xl font-bold text-center mb-6">
                Pantai Bimorejo
              </div>
            </div>
          </div>
          <Slider {...settings} className="">
            <div className="px-4">
              <img className="rounded-2xl" src={gambar1} alt="rectangle"></img>
            </div>
            <div className="px-4">
              <img className="rounded-2xl" src={gambar2} alt="rectangle"></img>
            </div>
            <div className="px-4">
              <img className="rounded-2xl" src={gambar3} alt="rectangle"></img>
            </div>
            <div className="px-4">
              <img className="rounded-2xl" src={gambar1} alt="rectangle"></img>
            </div>
            <div className="px-4">
              <img className="rounded-2xl" src={gambar2} alt="rectangle"></img>
            </div>
            <div className="px-4">
              <img className="rounded-2xl" src={gambar3} alt="rectangle"></img>
            </div>
          </Slider>
        </div>
      </div>
      <div className="text-justify flex-col flex xl:flex-row xl:mt-10 items-center justify-center xl:px-10">
        <div className="text-[#545B77] sm:text-base xl:text-xl xl:w-2/3 xl:mr-10 mb-4 xl:mb-0">
          Destinasi Pantai Bimorejo memiliki pemandangan langit yang layak
          dinikmati.
          <br />
          Setiap waktu pagi, siang dan sore memiliki karakteristik pemandangan
          yang berbeda. Dalam satu lokasi, anda bisa mendapatkan tiga
          pemandangan langit yang sangat indah tergantung dari jam kedatangan
          yang anda pilih. Dari berbagai keindahan langi ada 2 waktu dimana
          keindahan lagitnya sangat layak untuk diabadikan
        </div>
        <div className="xl:pb-0 items-center justify-center flex">
          {/* <h3>2</h3> */}
          <img className="" src={map_muncak} alt="rectangle"></img>
        </div>
      </div>
    </div>
  );
};

export default Agrowisata1;
