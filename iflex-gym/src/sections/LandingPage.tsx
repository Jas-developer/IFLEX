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
      <div className="flex flex-col gap-2  justify-center  font-serif  font-semibold text-red-500">
        <h1 className=" text-xl md:text-5xl">
          WELCOME TO IFLEX FITNESS <br />
          GYM
        </h1>
        <span className="text-white text-lg font-normal">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </span>
        <div>
          <button className="text-white font-normal shadow-md md:text-md bg-green-600 px-6 py-2 rounded-tl-xl rounded-br-xl">
            Contact Us
          </button>
        </div>
      </div>
    </motion.div>
  );
}
