"use client";

import { motion, type MotionProps, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { EASING, DURATION } from "@/lib/animations/tokens";

type RevealProps = PropsWithChildren<
  MotionProps & {
    className?: string;
    delay?: number;
    yOffset?: number;
    staggerChildren?: number;
  }
>;

export function Reveal({
  children,
  className,
  delay = 0,
  yOffset = 20,
  staggerChildren,
  ...props
}: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  if (staggerChildren) {
    return (
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren,
              delayChildren: delay,
            },
          },
        }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{
        duration: DURATION.MEDIUM,
        delay,
        ease: EASING.editorial,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  yOffset = 18,
}: PropsWithChildren<{ className?: string; yOffset?: number }>) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: yOffset },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: DURATION.MEDIUM,
            ease: EASING.editorial,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function ImageReveal({
  children,
  className,
  delay = 0,
}: PropsWithChildren<{ className?: string; delay?: number }>) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 1.03 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{
        duration: DURATION.SLOW,
        delay,
        ease: EASING.editorial,
      }}
    >
      {children}
    </motion.div>
  );
}

