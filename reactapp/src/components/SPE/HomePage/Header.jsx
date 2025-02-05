export default function Headers(props) {
  return (
    <>
      <div className="h-[40vh] relative flex justify-center items-center mb-10 w-full shadow-2xl">
        <div
          className="absolute h-full w-full bg-no-repeat bg-cover"
          style={{
            zIndex: 0,
            backgroundImage: `url(${props.image})`,
            backgroundPosition: "0% 40%",
          }}
        >
          <div
            className="absolute top-0 left-0 h-full w-full"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          ></div>
        </div>
        <div className="w-full flex xs:justify-center md:justify-start items-center z-[1]">
          <div className=" lg:w-1/2 p-10 lg:ml-10 ">
            <h1 className="text-white xs:text-[3.5rem] xs:text-center lg:text-[6rem] font-medium font-roboto">
              <span className="bg-[#0D4C94]">{props.message}</span>
            </h1>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-2 bg-transparent shadow-lg translate-y-2 blur-sm"></div>
      </div>
    </>
  );
}
