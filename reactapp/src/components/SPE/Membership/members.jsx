import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import Headers from "../HomePage/Header";
import Modals from "../../../Modal";
import { useState } from "react";

export const Members = (props) => {
  const [state, setState] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const clicked = () => {
    setState((prevState) => !prevState);
  };

  const steps = [
    "Be a student of the University of Alberta",
    "Fill Out Our Membership Form",
  ];

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const styles = {
    color: "white",
    padding: { xs: ".8rem .8rem", md: "1rem 1rem" },
    fontSize: "1rem",
    backgroundColor: "#0065CC",
    borderRadius: 1,
    textAlign: "center",
    "&:hover": { backgroundColor: "#10439F" },
  };

  const register = {
    title: "Select Registration Option",
    option: "Membership form",
    link: "https://docs.google.com/forms/d/1ut7_DlVY220CUFTc-QqoOYxAsfy-VIoudVaovo5F63s/edit",
  };
  return (
    <>
      <Headers image={"/img/SPEG.jpeg"} message={"Become a Member"} />
      <div className="pt-[5rem] mb-[10rem] flex justify-center items-center flex-col w-full">
        <Modals click={state} obj={register} func={clicked} />
        <div className="w-full flex justify-center mb-10">
          <img
            src={"/img/spe.png"}
            className="xs:w-[75%] md:w-[50%] lg:w-[30%] xl:w-[20%]"
          />
        </div>

        <div className="mb-20 xs:w-[95%] flex justify-center gap-2 xs:flex-wrap lg:flex-nowrap">
          <Button
            variant="contained"
            className=""
            sx={styles}
            onClick={clicked}
          >
            Membership Form
          </Button>
          <Button
            variant="contained"
            className=""
            sx={styles}
            href="https://www.spe.org/en/join/"
            target="blank"
          >
            SPE International Registration
          </Button>
          <Button
            variant="contained"
            className=""
            sx={styles}
            href="https://www.spe.org/en/join/renew/"
            target="blank"
          >
            SPE International Renewal
          </Button>
        </div>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginBottom: "5rem",
            backgroundImage: "linear-gradient(to right, #0D4C94, #0065CC)",
            color: "white",
          }}
        >
          <div className="xs:w-full xl:w-1/2 py-12">
            <h1 className="font-normal text-3xl text-[white] mb-10 xs:text-center">
              HOW TO BECOME A MEMBER
            </h1>
            <Stepper
              activeStep={activeStep}
              alternativeLabel
              sx={{
                width: "100%",
                "& .MuiStepConnector-line": {
                  borderColor: "white",
                },
              }}
            >
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                return (
                  <Step
                    key={label}
                    {...stepProps}
                    sx={{
                      "& .MuiStepLabel-root .Mui-completed": {
                        color: "#D3D3D3", // Greyed out completed steps
                      },
                      "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                        {
                          color: "#D3D3D3", // Grey out label text for completed steps
                        },
                      "& .Mui-active": {
                        color: "white", // Active step icon color
                      },
                      "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                        {
                          color: "white", // Active step label color
                        },
                      "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                        fill: "black", // Active step number/text color
                      },
                      "& .MuiStepLabel-root .Mui-active": {
                        color: "#FFd700",
                      },
                    }}
                  >
                    <StepLabel
                      {...labelProps}
                      sx={{
                        "& .MuiStepLabel-label": {
                          fontSize: { xs: "1rem", md: "1.2rem" },
                        },
                      }}
                    >
                      {label}
                    </StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {
              <>
                <Typography
                  sx={{
                    py: 5,
                    textAlign: "center",
                    fontSize: { xs: "1.2rem", md: "1.5rem" },
                    color: "#FFD700",
                    margin: "auto",
                    width: { xs: "95%", md: "75%" },
                  }}
                >
                  {activeStep === 0
                    ? "Members must either be a current or returning student at the University of Alberta"
                    : "All signups must use a valid UofA email address"}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button
                    onClick={handleNext}
                    disabled={activeStep === steps.length - 1}
                    color="inherit"
                  >
                    Next
                  </Button>
                </Box>
              </>
            }
          </div>
        </Box>

        <div className="flex  xs:w-full xs:flex-col lg:flex-row lg:w-[1000px] mb-10 justify-center items-center">
          <div className="lg:w-[60%] xs:w-3/4 flex lg:justify-end xs:justify-center ">
            <img src={"/img/chevron.jpg"} alt="" className="" />
          </div>
          <div className=" flex justify-center w-[100%] leading-6">
            <div className="w-[95%]">
              <h1 className="font-normal text-3xl text-[#0D4C94] mb-5 xs:text-center">
                Network, Learn, and Contribute.
              </h1>
              <p className="md:text-lg xs:text-base ">
                SPE International is open to any discipline and majors. We have
                158,000 members in 143 countries participate in 203 sections and
                382 student chapters. SPE’s membership includes more than 73,000
                student members. <br />
                Chevron has been kind enough to pay the membership fee's for
                students who join. You have nothing to lose and so much to gain.
                Consider joining SPE today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
