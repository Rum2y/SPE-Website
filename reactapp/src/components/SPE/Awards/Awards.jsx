import Footer from "../HomePage/footer";
import Transition from "../../../transition";
import Headers from "../HomePage/Header";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Awards = () => {
  const certs = [
    {
      image: "/img/certificates/Regional.jpg",
      title:
        "2024 Regional Section Recognition - University of Alberta SPE Chapter",
      text: "The Society of Petroleum Engineers (SPE) has awarded the University of Alberta SPE Chapter the 2024 Regional Section Recognition for its commitment to professional development. This prestigious recognition highlights the chapter’s dedication to innovation, noteworthy programs, and significant progress within the SPE community. The award acknowledges the hard work of the chapter officers and members in furthering SPE’s mission and supporting local members.",
    },
    {
      image: "/img/certificates/years.png",
      title:
        "University of Alberta Chapter Celebrated for 35 Years of Excellence by the Society of Petroleum Engineers",
      text: "The Society of Petroleum Engineers (SPE) has honored the University of Alberta Chapter with a milestone anniversary certificate, recognizing 35 years of dedication to furthering SPE's mission and supporting local members. This prestigious acknowledgment is signed by Olivier Houzé, the 2025 SPE President, and Simon Seaton, the SPE CEO & Executive VP, highlighting the chapter's significant contributions to the field of petroleum engineering.",
    },
  ];
  return (
    <Transition>
      <Headers image={"/img/books.jpg"} message={"Awards & Certificates"} />
      <div className="w-full flex flex-col justify-center items-center my-[5rem]">
        {certs.map((el, index) => {
          return (
            <Card
              key={index + 1}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                width: { xs: "90%", md: "80%", lg: "90%", xl: "70%" },
                marginY: "2rem",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: { xs: "100%", lg: "45%" },
                  marginLeft: { xs: 0, lg: 3 },
                  padding: { xs: 3 },
                }}
                image={el.image}
                alt={el.title}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: { xs: 0, lg: 5 },
                }}
              >
                <CardContent
                  sx={{
                    flex: "1 0 auto",
                    width: "100%",
                    borderTop: { xs: 1, lg: 0 },
                    textAlign: { xs: "center" },
                  }}
                >
                  <Typography
                    component="div"
                    variant="h5"
                    sx={{
                      fontSize: { xs: "2rem", lg: "2.5rem" },
                      marginBottom: "2rem",
                      color: "#0D4C94",
                    }}
                  >
                    {el.title}
                  </Typography>
                  <Typography
                    variant="text"
                    component="div"
                    sx={{
                      color: "text.secondary",
                      fontSize: { xs: ".8rem", md: "1.1rem" },
                    }}
                  >
                    {el.text}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          );
        })}
      </div>
      <Footer />
    </Transition>
  );
};

export default Awards;
