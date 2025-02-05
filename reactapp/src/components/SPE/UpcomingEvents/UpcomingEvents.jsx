import Footer from "../HomePage/footer";
import Calendar from "./Calendar";
import Transition from "../../../transition";

export default function UpcomingEvents() {
  return (
    <Transition>
      <Calendar />
      <Footer />
    </Transition>
  );
}
