import { useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Tentang = () => {
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  const [width] = useState(window.innerWidth);
  const isDesktop = width > 640;

  return (
    <div className="items-center bg-[#FFFDEC] pt-8 xl:pt-16 pb-8 block px-8 xl:px-24">
      <div className="xl:grid xl:grid-cols-2 flex flex-col">
        <div
          className="relative items-end text-left text-white mobile:text-sm xl:w-[90%]"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="sm:text-3xl md:text-4xl lg:text-5xl xl:mb-5 xl:text-5xl pointer-events-none">
            <div className="mt-1 flex flex-row sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
              <p className="font-Satisfy text-[#545B77] mobile:text-2xl font-bold mb-3">
                Sekilas Bimorejo
              </p>
            </div>
          </div>

          <div className="text-justify text-[#545B77] sm:text-base xl:text-xl">
            Hai
            <br />
            <br />
            Ini
            <br />
            <br />
            Isinya
            <br />
            Penjelasan
          </div>

          <Link to="/tentang">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              class="mt-4 rounded bg-[#374249] py-2 px-6 font-Montserrat text-lg md text-white transition-all duration-300 ease-out hover:scale-[1] hover:px-[1.33rem] hover:font-bold hover:shadow-[5px_5px_0_rgb(128,128,128)]  mobile:text-sm"
            >
              Selengkapnya
            </button>
          </Link>
        </div>

        <div
          className="mt-12 xl:mt-0 flex justify-center items-center container"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <iframe
            className="container h-[400px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31612.43265609404!2d114.39391041877934!3d-7.941550633893535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd13b9bfe2ee021%3A0xbf1a0eac89a0861!2sBimorejo%2C%20Wongsorejo%2C%20Banyuwangi%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1688999110674!5m2!1sen!2sid"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="map_girirejo"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
