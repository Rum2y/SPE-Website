import About from "./About";
import Footer from "../HomePage/footer";
import Transition from "../../../transition";

export default function AboutUs() {
  return (
    <Transition>
      <About />
      <Footer />
    </Transition>
  );
}
