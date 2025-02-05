import Button from "@mui/material/Button";
import Observer from "../../../Observer";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <Observer>
      <div className="w-full flex justify-center items-center xs:my-[0.2rem] lg:my-[3rem] z-10">
        <div className="xs:w-full lg:w-3/4 xl:w-1/2 text-center xs:text-2xl lg:text-3xl ">
          <p>
            "The SPE at the University of Alberta connects students with the
            energy sector through networking opportunities and events to prepare
            future leaders in the evolving energy industry."
          </p>
          <Link to={"/TeamMembers"}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#0D4C94",
                padding: { xs: ".7rem 2rem", md: "1rem 3rem" },
                marginTop: "2.5rem",
                fontSize: { xs: "1rem", md: "1.2rem" },
                "&:hover": { backgroundColor: "#2167b8", color: "white" },
              }}
            >
              Meet Our Team
            </Button>
          </Link>
        </div>
      </div>
    </Observer>
  );
}
