import Transition from "../../../transition";
import Line from "./Line";
import ImgCarousel from "./carousel";
import Events from "./Events";
import ContactUs from "./ContactUs";
import Welcome from "./welcome";
import EmbeddedMap from "./map";
import Footer from "./footer";

export default function HomePage() {
  return (
    <>
      <Transition>
        <ImgCarousel />
        <Line />
        <Welcome />
        <Line />
        <Events />
        <ContactUs />
        <EmbeddedMap />
        <Footer />
      </Transition>
    </>
  );
}
