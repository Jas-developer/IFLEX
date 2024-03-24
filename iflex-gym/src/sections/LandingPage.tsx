import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      id="home"
    >
      <div className="flex flex-col gap-2   justify-center  font-serif  font-semibold text-gray-100">
        <div className="bg-green-700 md:py-2 md:px-4 rounded-br-xl rounded-tl-xl">
          <h1 className=" text-2xl md:text-5xl">
            Welcome to i. <span className="text-red-600">Flex</span> Fitness Gym{" "}
            <br />
          </h1>
          <hr />
          <span className="text-gray-100 text-lg font-sans font-normal">
            Iflex is not your typical concept of fitness. Iflex gives the most
            unique way to be in good shape. <br /> Watch out for grand opening
            of Iflex fitness gym.
          </span>
        </div>
        <div>
          <button className="text-white transition-all hover:scale-110 duration-500 font-normal shadow-md md:text-md bg-red-600 px-6 py-2 rounded-tl-xl rounded-br-xl">
            Contact Us
          </button>
        </div>
      </div>
    </motion.div>
  );
}
