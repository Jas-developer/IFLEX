export default function LandingPage() {
  return (
    <section id="home">
      <div className="flex flex-col gap-2  justify-center  font-serif  font-semibold text-red-500">
        <h1 className="shadow-lg text-5xl">
          WELCOME TO IFLEX FITNESS <br />
          GYM
        </h1>
        <span className="text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </span>
        <div>
          <button className="text-white text-md bg-green-600 px-6 py-2 rounded-tl-xl rounded-br-xl">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
