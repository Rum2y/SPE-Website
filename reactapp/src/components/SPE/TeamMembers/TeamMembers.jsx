import Footer from "../HomePage/footer";
import { Team } from "./Team";
import Transition from "../../../transition";

const TeamMembers = () => {
  return (
    <Transition>
      <Team />
      <Footer />
    </Transition>
  );
};

export default TeamMembers;
