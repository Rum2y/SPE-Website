import Forms from "./form";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function ContactDiv(props) {
  const style = {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: "5rem 0",
  };
  return (
    <>
      <div
        className="flex xs:flex-col lg:flex-row justify-center items-center"
        style={{
          opacity: props?.opacity,
          backgroundColor: props?.bgcolor,
          margin: `${props.margin} 0`,
          padding: `${props?.padding} 0`,
        }}
      >
        <div className="text-center" style={style}>
          <h1 className="text-5xl font-extralight text-[#0D4C94]">
            CONTACT SPE UALBERTA
          </h1>
          <p className="mt-12">
            Univeristy of Alberta Engineering Building <br />
            <br />
            speualberta@gmail.com
            <br />
            <br />
          </p>
          <a
            href="https://www.instagram.com/speualbertachapter/?hl=en"
            target="blank"
            className="text-black px-3"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/spe-ualberta/?originalSubdomain=ca"
            target="blank"
            className="text-black px-3"
          >
            <LinkedInIcon />
          </a>
        </div>
        <div className="form-div" style={style}>
          <Forms />
        </div>
      </div>
    </>
  );
}
