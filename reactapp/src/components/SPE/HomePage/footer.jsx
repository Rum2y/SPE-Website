import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Observer from "../../../Observer";

export default function Footer() {
  return (
    <Observer>
      <footer className="bg-[#0D4C94] text-white py-4">
        <div className="mx-auto text-center my-[5rem] xs:w-[90%] lg:w-3/4">
          <div className="w-full flex justify-center">
            <div className="xs:w-full md:w-3/4 lg:w-1/2 flex justify-center ">
              <p className="mb-[3rem] text-3xl">
                The best time to dive into petroleum engineering was yesterday.
                The second best is now!
              </p>
            </div>
          </div>

          <p className="mb-12 xs:text-[.7rem] xs: font-medium lg:text-[1rem]">
            &copy;
            {` ${new Date().getFullYear()} University of Alberta - Petroleum Engineering
            Department. All rights reserved.`}
          </p>
          <div className="flex justify-center space-x-4 mb-4">
            <a
              href="https://www.instagram.com/speualbertachapter/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/spe-ualberta/?originalSubdomain=ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </footer>
    </Observer>
  );
}
