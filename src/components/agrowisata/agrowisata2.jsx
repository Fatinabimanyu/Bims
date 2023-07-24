import { useState } from "react";
import { Link } from "react-router-dom";
import gambar1 from "../../assets/agrowisata/sunrise.JPG";
import gambar2 from "../../assets/agrowisata/sunriseme.JPG";
import gambar3 from "../../assets/agrowisata/sunrisee.jpg";
import map_muncak from "../../assets/agrowisata/map-muncak.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
// import "./tentang.css";

const Agrowisata3 = () => {
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
      className="items-center bg-[#545B77] pt-20 pb-10 xl:pt-20 xl:pb-0 px-8 xl:px-24"
      id="sawit"
    >
      <div className="">
        <div
          className="relative items-center text-white text-sm"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="pointer-events-none">
            <div className="mt-1 sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
              <div className="font-black text-[#FFFDEC] font-Satisfy text-2xl sm:text-3xl text-justify xl:text-4xl mb-3">
                Sunrise di Pantai Bimorejo
              </div>
              <div className="rounded-xl bg-[#FFFDEC] text-justify p-3 mb-3 xl:hidden">
                <p className="text-light-blue font-bold">Tiket Masuk: 2.000</p>
              </div>
              <p className="text-justify xl:hidden">
                Jika anda datang ke Pantai Bimorejo pada saat matahari terbit
                antara jam 5-6 pagi. Anda akan disambut dengan panorama yang
                memukau, langitnya sangat indah dengan gradasi warna-warna dari
                oranye, kuning, hingga merah yang mempesona. Pemandangan ini
                menciptakan suasana yang magis dan tak terlupakan, memberikan
                pengalaman yang mendalam bagi jiwa yang mencintai keindahan
                alam. Rasakan kedamaian dan keajaiban alam ini saat sinar
                matahari muncul di balik cakrawala, menyinari pantulan ombak
                yang berkilauan di permukaan air laut. Tak ada kata yang bisa
                menggambarkan sepenuhnya betapa memesonanya momen ketika langit
                di Pantai Bimorejo sangat indah saat matahari terbit. Hanya
                dengan datang dan menyaksikannya sendiri, Anda akan tersihir dan
                terpesona oleh pesona alam yang luar biasa ini.
              </p>
            </div>
          </div>
          <div className="container grid grid-cols-2 xl:grid-cols-2 mt-3 gap-4 pt-4">
            <div className="xl:row-span-1 hidden xl:block text-xl text-justify">
              <div className="rounded-xl bg-[#FFFDEC] text-justify p-3 mb-3 hidden xl:flex">
                <p className="text-light-blue font-bold">
                  Tiket Masuk: 2.000 (Parkir)
                </p>
              </div>
              Jika anda datang ke Pantai Bimorejo pada saat matahari terbit
              antara jam 5-6 pagi. Anda akan disambut dengan panorama yang
              memukau, langitnya sangat indah dengan gradasi warna-warna dari
              oranye, kuning, hingga merah yang mempesona. Pemandangan ini
              menciptakan suasana yang magis dan tak terlupakan, memberikan
              pengalaman yang mendalam bagi jiwa yang mencintai keindahan alam.
              Rasakan kedamaian dan keajaiban alam ini saat sinar matahari
              muncul di balik cakrawala, menyinari pantulan ombak yang
              berkilauan di permukaan air laut. Tak ada kata yang bisa
              menggambarkan sepenuhnya betapa memesonanya momen ketika langit di
              Pantai Bimorejo sangat indah saat matahari terbit. Hanya dengan
              datang dan menyaksikannya sendiri, Anda akan tersihir dan
              terpesona oleh pesona alam yang luar biasa ini.
            </div>
            <div className="xl:row-span-1 flex justify-center transform xl:pb-0 col-span-2 xl:col-span-1">
              <img
                className="rounded-xl xl:h-3/4 w-full"
                src={gambar1}
                alt="rectangle"
              ></img>
            </div>
            <div className="flex justify-center items-center xl:h-[0%] transform xl:pb-0 md:col-span-1 xl:col-span-1">
              <img className="rounded-xl" src={gambar2} alt="rectangle"></img>
            </div>
            <div className="flex justify-center transform xl:pb-0 md:col-span-1 xl:col-span-1 items-center xl:h-2/3">
              <img className="rounded-xl" src={gambar3} alt="rectangle"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agrowisata3;
