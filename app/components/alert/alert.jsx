'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 50, transition: { duration: 0.3 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: 50, transition: { duration: 0.2 } },
};

export default function Alert({ message, opened, setOpened }) {

  const handleClose = () => {
    setOpened(false);
  };

  if (!message) return null;

  return (
    <AnimatePresence>
      {opened && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          className="fixed bottom-2 right-4 p-4 mb-4 text-sm rounded-xl backdrop-blur-xl text-zinc-950 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800/50 z-50 shadow-xl"
          role="alert"
        >
          <div className="grid grid-cols-5 items-center">
            <p className="col-span-4 pr-5">{message}</p>
            <button
              type="button"
              className="mx-auto flex items-center justify-center rounded-lg focus:ring-2 h-8 w-8 cursor-pointer"
              onClick={handleClose}
            >
              <span className="sr-only">Close</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
