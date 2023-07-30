import { useState } from "react";
import { Link } from "react-router-dom";
import gambar1 from "../../assets/agrowisata/sunkal.JPG";
import gambar2 from "../../assets/agrowisata/sunan.jpg";
import gambar3 from "../../assets/agrowisata/bcil.JPG";
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
                Yayasan Pondok Pesantren Sunan Kalijaga
              </div>
              <div className="rounded-xl bg-[#FFFDEC] text-justify p-3 mb-3 xl:hidden">
                <p className="text-light-blue font-bold">Masuk: Gratis </p>
              </div>
              <p className="text-justify xl:hidden">
                Yayasan ini mempunyai fasilitas pendidikan mulai dari tingkat sd
                sampai hingga smk. Yayasan ini terbagi menjadi dua tempat yaitu
                pondok pesantren kaum hawa dan kaum adam. Pada yayasan ini
                terdapat banyak santriwan dan santriwati yang sedang menempuh
                pendidikan sesuai dengan umur dan jenjang yang seharusnya mereka
                tempuh. Didalam yayasan ini tersimpan pantai yang sangat indah
                dengan ombak air yang tenang. Tidak hanya itu pemandangan langit
                dipantai ini sangat layak untuk dinikmati baik sendiri maupun
                bersama orang lain.
              </p>
            </div>
          </div>
          <div className="container grid grid-cols-2 xl:grid-cols-2 mt-3 gap-4 pt-4">
            <div className="xl:row-span-1 hidden xl:block text-xl text-justify">
              <div className="rounded-xl bg-[#FFFDEC] text-justify p-3 mb-3 hidden xl:flex">
                <p className="text-light-blue font-bold">Masuk: Gratis</p>
              </div>
              Yayasan ini mempunyai fasilitas pendidikan mulai dari tingkat sd
              sampai hingga smk. Yayasan ini terbagi menjadi dua tempat yaitu
              pondok pesantren kaum hawa dan kaum adam. Pada yayasan ini
              terdapat banyak santriwan dan santriwati yang sedang menempuh
              pendidikan sesuai dengan umur dan jenjang yang seharusnya mereka
              tempuh. Didalam yayasan ini tersimpan pantai yang sangat indah
              dengan ombak air yang tenang. Tidak hanya itu pemandangan langit
              dipantai ini sangat layak untuk dinikmati baik sendiri maupun
              bersama orang lain.
            </div>
            <div className="xl:row-span-1 flex justify-center transform xl:pb-0 col-span-2 xl:col-span-1">
              <img
                className="rounded-xl xl:h-3/4 w-full"
                src={gambar2}
                alt="rectangle"
              ></img>
            </div>
            <div className="flex justify-center items-center xl:h-[0%] transform xl:pb-0 md:col-span-1 xl:col-span-1">
              <img className="rounded-xl" src={gambar1} alt="rectangle"></img>
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
