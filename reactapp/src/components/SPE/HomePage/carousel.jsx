import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Observer from "../../../Observer";

export default function ImgCarousel() {
  return (
    <div className="h-[55vh] relative flex justify-center items-center mb-10 w-full shadow-2xl">
      <div
        className="absolute h-full w-full bg-no-repeat bg-cover"
        style={{
          zIndex: 0,
          backgroundImage: `url(/img/oil_3.jpg)`,
          backgroundPosition: "0% 75%",
        }}
      >
        <div
          className="absolute top-0 left-0 h-full w-full"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        ></div>
      </div>
      <div className="w-full flex xs:justify-center lg:justify-start items-center z-10">
        <Observer>
          <div className="xs:w-full xs:text-center lg:text-left lg:w-[90%] p-5 lg:ml-10">
            <h1 className="text-white xs:text-[3rem] lg:text-[4rem] font-medium font-roboto">
              SPE UALBERTA
            </h1>
            <p className="text-2xl text-[white]">
              Supporting future Engineers in the Energy Industry and Academia
            </p>
            <Link to={"/AboutUs"}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#0D4C94",
                  padding: { xs: ".7rem 2rem", md: "1rem 3rem" },
                  marginTop: "2rem",
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  "&:hover": { backgroundColor: "#2167b8", color: "white" },
                }}
              >
                Learn More
              </Button>
            </Link>
          </div>
        </Observer>
      </div>
    </div>
  );
}
