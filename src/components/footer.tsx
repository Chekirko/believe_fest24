//@ts-nocheck
import { Typography, Button, IconButton } from "@material-tailwind/react";
import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Company", "About Us", "Team", "Products", "Blog"];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <Typography
            as="a"
            href="https://www.instagram.com/newlife_borislav/"
            target="_blank"
            variant="h6"
            className="text-black"
          >
            Церква Нове життя м. Борислав
          </Typography>
          {/* <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  color="white"
                  className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul> */}
          <div className="flex w-fit justify-center gap-2">
            <Link
              href={"https://www.facebook.com/groups/2409312272430993"}
              target="blank"
            >
              <IconButton size="sm" color="gray" variant="text">
                <i className="fa-brands fa-facebook text-lg" />
              </IconButton>
            </Link>
            <Link
              href={"https://www.youtube.com/@zerkva_nove_jitya_borislav"}
              target="blank"
            >
              <IconButton size="sm" color="gray" variant="text">
                <i className="fa-brands fa-youtube text-lg" />
              </IconButton>
            </Link>
            <Link
              href={"https://www.instagram.com/youth.new.life/"}
              target="blank"
            >
              <IconButton size="sm" color="gray" variant="text">
                <i className="fa-brands fa-instagram text-lg" />
              </IconButton>
            </Link>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="text-center mt-12 font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR} Made with Love by{" "}
          <a href="https://www.instagram.com/chekirko/" target="_blank">
            Victor Chekirko
          </a>
          .
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
