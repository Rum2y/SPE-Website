import Observer from "../../../Observer";
import React from "react";

export default function Events() {
  const events = [
    {
      name: "Energizing Tomorrow",
      img: "/img/Events/ET.jpg",
      desc: "Join us for Energizing Tomorrow, an engaging series of talks by leading energy experts. This event explores the latest advancements in energy technologies, sustainable practices, and future innovations. Discover how we can address global energy challenges and transition to a greener, more sustainable future.",
    },
    {
      name: "First Year Night",
      img: "/img/Events/FYN.jpg",
      desc: "The First Year Night event brought together over 120 enthusiastic first-year engineering students, many of whom expressed strong interest in joining the Petroleum Engineering program at the University of Alberta. This event serves as an exciting introduction to the world of petroleum engineering, offering students the chance to learn about the program, interact with faculty, and meet fellow students. It's a great opportunity to ignite a passion for engineering and help shape the future of the energy industry.",
    },
    {
      name: "Technical talks",
      img: "/img/Events/TTs.jpg",
      desc: "Technical Talks provide a platform for industry experts, researchers, and professionals to share their insights on the latest trends, innovations, and challenges in technology and engineering. These sessions offer deep dives into specialized topics, fostering knowledge exchange and collaboration among attendees. Whether discussing breakthrough technologies or best practices, Technical Talks are essential for staying at the forefront of industry developments.",
    },
    {
      name: "Yearly Conference Trips",
      img: "/img/SPEG.jpeg",
      desc: "Each year, students have the incredible opportunity to attend fully funded conferences, connecting with industry leaders, experts, and peers from around the world. These trips offer participants the chance to present research, engage in technical discussions, and explore cutting-edge advancements in energy and engineering fields. The conferences are designed to enhance learning, foster professional growth, and build valuable networks within the global energy community.",
    },
  ];
  return (
    <div className=" mt-[7rem]">
      <h1 className="font-base text-4xl text-center text-[#0D4C94] mb-7">
        SOCIAL AND NETWORKING EVENTS
      </h1>
      <div className="flex w-full relative flex-wrap xs:gap-3 lg:gap-0">
        {events.map((el, index) => {
          return (
            <React.Fragment key={index + 1}>
              <div
                className="xs:w-full lg:w-1/2 flex justify-center items-center h-[700px]"
                style={{
                  backgroundImage: `url(${el.img})`,
                  backgroundPosition: "center",
                }}
                key={index + 1}
              >
                <div className="text-white z-10 xs:w-full lg:w-[60%] text-center">
                  <Observer>
                    <h1 className="text-5xl mb-5 font-roboto">{el.name}</h1>
                    <p className="text-xl">{el.desc}</p>
                  </Observer>
                </div>
              </div>
              <div
                className="absolute top-0 left-0 h-full w-full"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.25)",
                }}
              ></div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
