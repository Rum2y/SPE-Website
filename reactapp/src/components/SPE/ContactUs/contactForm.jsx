import ContactDiv from "../HomePage/contactDiv";
import Map from "../HomePage/embedMap";

export default function ContactForm() {
  return (
    <div className=" mb-[15rem] bg-[#e9ebec]">
      <ContactDiv opacity={1} padding={"7rem"} margin={"3px"} />
      <Map />
    </div>
  );
}
