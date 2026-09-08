import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HelloOverlayProps {
  onComplete?: () => void;
  duration?: number;
}

// Apple "hello" SVG Vector Strokes (Iconic cursive handwriting)
const PATH_1 =
  "M 52.4 110.8 C 52.4 110.8 71.2 53.6 84.8 15.6 C 88.8 4.4 95.6 0.8 100.8 4 C 106 7.2 103.6 20.4 97.2 40.8 C 90.8 61.2 78 112 78 112 C 78 112 90.8 77.6 112.4 77.6 C 127.2 77.6 131.6 92.4 125.6 108.4 C 120.4 122.4 128.4 125.6 138.8 116.8 C 149.2 108 158.8 94.4 161.2 86 C 163.6 77.6 154 75.2 143.6 86 C 133.2 96.8 132.8 114 148 117.6 C 163.2 121.2 178 105.6 189.6 76.8 C 201.2 48 215.6 14.8 222.4 17.6 C 229.2 20.4 220.4 46.8 208.4 83.2 C 196.4 119.6 205.2 126.8 218 119.6 C 230.8 112.4 248.4 79.6 261.2 36.4 C 271.6 2 281.2 9.2 275.6 34.4 C 265.2 78 258 118 271.6 126.8 C 282 133.6 296.8 118.8 309.2 104 C 320.4 90.8 333.6 79.6 345.6 86.8";

const PATH_2 =
  "M 345.6 86.8 C 336 90.4 324.4 102.8 324.4 115.6 C 324.4 128.4 338 132.4 351.6 125.2 C 365.2 118 371.6 100.4 363.6 88.8 C 355.6 77.2 341.2 83.6 348.8 98 C 356.4 112.4 380.8 117.6 412.4 109.2 C 454.4 98 496 90.8 516 93.6";

export const HelloOverlay: React.FC<HelloOverlayProps> = ({
  onComplete,
  duration = 1.0,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Exact requested timing:
    // Path 1 runs for 0.8 * duration
    // Path 2 starts at 0.7 * duration and runs for 2.8 * duration (ends at 3.5 * duration)
    // Hold on screen for 0.5s before smooth fade out
    const totalRuntime = (duration * 0.7 + duration * 2.8 + 0.5) * 1000;
    const timer = setTimeout(() => {
      setVisible(false);
      if (onComplete) onComplete();
    }, totalRuntime);
    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="hello-overlay"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.75, ease: [0.45, 0, 0.55, 1] },
          }}
        >
          <div className="hello-svg-container">
            <svg
              viewBox="0 0 540 160"
              fill="none"
              className="hello-svg-art"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* First Stroke: "hell" loop */}
              <motion.path
                d={PATH_1}
                stroke="#FFFFFF"
                strokeWidth={5}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  pathLength: {
                    duration: duration * 0.8,
                    ease: [0.45, 0, 0.55, 1],
                  },
                  opacity: { duration: 0.12 },
                }}
              />

              {/* Second Stroke: "o" & underline flourish */}
              <motion.path
                d={PATH_2}
                stroke="#FFFFFF"
                strokeWidth={5}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  pathLength: {
                    delay: duration * 0.7,
                    duration: duration * 2.8,
                    ease: [0.45, 0, 0.55, 1],
                  },
                  opacity: { delay: duration * 0.7, duration: 0.12 },
                }}
              />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
