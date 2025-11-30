"use client";
import { motion, AnimatePresence } from "framer-motion";

const NewClientCarousel = ({ isOpen, onClose, experience }) => {
  const stars = Array(5).fill(0);

  return (
    <AnimatePresence>
      {isOpen && experience && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-xl flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotateX: -25, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, rotateX: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.7, rotateX: -25, filter: "blur(10px)" }}
            transition={{ type: "spring", stiffness: 140, damping: 14 }}
            className="
              relative bg-white/10 backdrop-blur-2xl rounded-3xl p-10 w-[90%] md:w-[600px]
              text-white shadow-[0_0_50px_rgba(0,0,255,0.4)]
              overflow-hidden border border-white/20
            "
          >
            <div className="absolute inset-0 rounded-3xl border-[3px] border-transparent animate-spin-slow pointer-events-none"
              style={{
                background:
                  "linear-gradient(45deg, rgba(255,0,150,0.7), rgba(0,180,255,0.7), rgba(0,255,120,0.7))",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                padding: "3px",
              }}
            />

            <div className="flex flex-col items-center text-center relative z-10">

              <motion.img
                src={experience.img}
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="
                  w-32 h-32  rounded-full shadow-[0_0_30px_rgba(0,0,0,0.4)]
                  border-4 border-white/40 !m-4 object-cover
                "
              />

              <h2 className="text-3xl font-bold !mb-2 drop-shadow-xl">
                {experience.name}'s Experience
              </h2>

              <div className="flex !gap-2 !mb-4">
                {stars.map((_, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.4, rotate: -10 }}
                    className={`text-3xl ${
                      idx < (experience.rating || 4)
                        ? "text-yellow-400 drop-shadow-[0_0_10px_gold]"
                        : "text-gray-500"
                    } cursor-pointer transition`}
                  >
                    ★
                  </motion.span>
                ))}
              </div>

              <div
                className="
                  !px-5 !py-2 !mb-4 rounded-full
                  bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600
                  text-black font-semibold shadow-lg border border-yellow-300
                "
              >
                {experience.badge}
              </div>

              <p className="text-lg opacity-90 !mb-6 leading-relaxed">
                {experience.details}
              </p>

              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                className="
                  !px-10 !py-2 !mb-5 bg-blue-600 rounded-3xl shadow-lg
                  hover:bg-blue-700 transition font-semibold
                "
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewClientCarousel;