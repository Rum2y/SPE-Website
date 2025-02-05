export default function Line() {
  return (
    <>
      <div className="flex justify-center">
        <hr
          className="my-12 xs:w-[80%] md: w-[70%] lg:w-[40%] text-center"
          style={{
            border: "none",
            height: "5px",
            backgroundImage: "linear-gradient(to right, #0D4C94, #2167b8)",
            borderRadius: "100px",
          }}
        />
      </div>
    </>
  );
}
