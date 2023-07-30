import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faDiscord,
  faFacebook,
  faFacebookSquare,
  faInstagram,
  faInstagramSquare,
  faLine,
  faLinkedin,
  faSteam,
  faTiktok,
  faTwitter,
  faGoogle,
  faTwitterSquare,
  faUssunnah,
  faWhatsapp,
  faYoutube,
  faMailchimp,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/Logo KKN.svg";
import logo from "../assets/logo-saujana-big.png";
// import festival_footer from "../assets/footer/festival-gm-footer.svg";
// import ornament_footer from "../assets/footer/ornament-footer.svg";
// import ikuti_footer from "../assets/footer/ikuti-kami-footer.svg";
// import sitemap_footer from "../assets/footer/sitemap-footer.svg";

const footer = () => {
  return (
    <footer className=" bg-[#4d6a6d] z-100 xl:px-10 py-8">
      <div className="flex flex-row">
        <div className="container mx-auto px-2 text-left sm:w-auto xl:w-full h-full">
          <div className="mx-4 flex justify-evenly gap-y-2 xl:flex-row xl:items-start flex-col gap-8 mobile:text-2xl">
            <div className="flex flex-col items-center self-center xl:items-start xl:self-auto">
              <div className="flex items-center sm:px-[15rem] xl:px-0 xl:gap-10 xl:flex-row mb-4 xl:py-12">
                <img
                  src={Logo}
                  alt=""
                  className="transition-all xl:hidden xl:h-28 xl:scale-[1.4]"
                />
                <img
                  src={Logo}
                  alt=""
                  className=" hidden transition-all xl:inline-flex xl:h-28 xl:scale-[1.4]"
                />
                <span className="hidden xl:block">
                  <p className="">
                    <span className="font-bold content-left text-lg xl:text-xl text-white">
                      DESA BIMOREJO
                    </span>
                    <br />
                    <span className="text-center xl:content-left text-md xl:text-lg text-white">
                      Kecamatan Wongsorejo, Kabupaten Banyuwangi, Jawa Timur
                    </span>
                  </p>
                </span>
                {/* <p className="text-center xl:content-left text-lg text-white">
                  Kecamatan Ngablak, Kabupaten Magelang, Jawa Tengah, 56194
                </p> */}
              </div>
              <span className="xl:hidden">
                <p className="font-bold text-center text-lg text-white lg:mt-6">
                  DESA BIMOREJO
                </p>
                <p className="text-center text-base text-white lg:mt-6 mb-2">
                  Kecamatan Wongsorejo, Kabupaten Banyuwangi, Jawa Timur
                </p>
              </span>
            </div>
            {/* quick link */}
            <div className="flex flex-col text-lg text-white xl:gap-2 xl:text-xl gap-2 my-6">
              <div className="flex flex-col text-lg gap-2">
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  to="/"
                  className="w-fit transition-colors hover:text-yellow-500 mobile:text-xl"
                >
                  Beranda
                </Link>
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  to="/tentang"
                  className="w-fit transition-colors hover:text-yellow-500 mobile:text-xl"
                >
                  Agrowisata dan Pariwisata
                </Link>
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  to="/teater"
                  className="w-fit transition-colors hover:text-yellow-500 mobile:text-xl"
                >
                  UMKM
                </Link>
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  to="/pasar-rakyat"
                  className="w-fit transition-colors hover:text-yellow-500 mobile:text-xl"
                >
                  Budaya
                </Link>
              </div>
            </div>
            {/* kontak person whatsapp */}
            <div className="flex flex-col text-base xl:text-lg text-white gap-2 xl:py-6">
              <div className="flex flex-col gap-2">
                <p className="font-bold">Hubungi Kami</p>
                <a
                  href={"https://wa.me/6282257223474"}
                  rel="noreferrer"
                  target="_blank"
                  className="group w-fit transition-colors hover:text-yellow-500"
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    color="white"
                    size="1x"
                    className="transition-all  group-hover:text-yellow-500"
                  ></FontAwesomeIcon>{" "}
                  Whatsapp
                  <p>(+62)822-5722-3474 (Fatin)</p>
                </a>
                <a
                  href={"mailto:kknwongsorejo23@gmail.com"}
                  rel="noreferrer"
                  target="_blank"
                  className="group w-fit transition-colors hover:text-yellow-500"
                >
                  <FontAwesomeIcon
                    icon={faGoogle}
                    size="sm"
                    color="white"
                    className="transition-all group-hover:text-yellow-500"
                  ></FontAwesomeIcon>{" "}
                  Email
                  <p>kknwongsorejo23@gmail.com</p>
                </a>
                <a
                  href={"https://www.instagram.com/kknugm.wongsorejo"}
                  rel="noreferrer"
                  target="_blank"
                  className="group w-fit transition-colors hover:text-yellow-500"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    color="white"
                    size="1x"
                    className="transition-all  group-hover:text-yellow-500"
                  ></FontAwesomeIcon>{" "}
                  Instagram
                  <p>kknugm.wongsorejo</p>
                </a>
                {/* <p>
                  (+62)813-9213-6199 (Priyo)
                  <br />
                  dsgirirejongablak@gmail.com
                </p> */}
              </div>
            </div>
            {/* <div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
      <p className="text-xs text-white bg-[#4d6a6d] mt-3 py-2">
        Developed by Tim KKN-PPM UGM - Bahari Wongsorejo 2023
      </p>
    </footer>
  );
};

export default footer;
