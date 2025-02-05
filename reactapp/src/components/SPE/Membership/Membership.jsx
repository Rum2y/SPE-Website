import Transition from "../../../transition";
import { Members } from "./members";
import Footer from "../HomePage/footer";

const Membership = () => {
  return (
    <Transition>
      <Members />
      <Footer />
    </Transition>
  );
};

export default Membership;
