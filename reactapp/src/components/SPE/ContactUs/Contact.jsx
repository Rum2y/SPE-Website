import Footer from "../HomePage/footer";
import ContactForm from "./contactForm";
import Transition from "../../../transition";

export default function Contact() {
  return (
    <Transition>
      <ContactForm />
      <Footer />
    </Transition>
  );
}
