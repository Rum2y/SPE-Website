import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Modals from "../../../Modal";
import { useState } from "react";

export default function About() {
  const [state, setState] = useState(false);

  const clicked = () => {
    setState((prevState) => !prevState);
  };

  const styles = {
    color: "white",
    padding: ".5rem .7rem",
    fontSize: "1.0rem",
    backgroundColor: "#0D4C94",
    borderRadius: 1,
    "&:hover": { backgroundColor: "#2167b8" },
  };

  const linkedIn = {
    title: "Check out our LinkedIn Page",
    option: "LinkedIn",
    link: "https://www.linkedin.com/in/spe-ualberta/?originalSubdomain=ca",
  };

  return (
    <div className="flex justify-center xs:pt-[10rem] lg:pt-[15rem] pb-[15rem]">
      <div className="flex xs:flex-col-reverse lg:flex-row justify-center items-center xs:w-full lg:w-[80%] xl:w-[1000px]">
        <Modals click={state} obj={linkedIn} func={clicked} />
        <div className="w-[100%] flex xs:justify-center lg:justify-end items-center lg:pr-10 leading-6">
          <div className="xs:w-[90%] xs:mt-5 w-[70%] xs:text-center lg:text-left">
            <h1 className="font-light text-6xl text-[#0D4C94] mb-7 ">
              ABOUT US
            </h1>
            <p>
              Society of Petroleum Engineers (SPE) University of Alberta Chapter
              is a student-run organization dedicated to providing resources,
              networking opportunities, and professional development
              opportunities for students interested in the field of energy. Our
              members strive to connect students with industry professionals,
              organize events and workshops, attend conferences, and promote the
              exchange of knowledge and ideas within the energy community. Our
              Chapter is committed to providing outstanding support for future
              generations of engineers in the energy industry as well as
              academia.
            </p>
            <Stack
              spacing={2}
              direction="row"
              sx={{
                mt: 4,
                width: "100%",
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Link to={"/TeamMembers"} className="">
                <Button variant="contained" sx={styles}>
                  Meet Our Team
                </Button>
              </Link>
              <Link className="">
                <Button variant="contained" sx={styles} onClick={clicked}>
                  LinkedIN page
                </Button>
              </Link>
            </Stack>
          </div>
        </div>
        <div className="xs:w-[60%] lg:w-full flex lg:justify-start xs:justify-center ">
          <img src={"/img/logo_2.jpg"} alt="" />
        </div>
      </div>
    </div>
  );
}
