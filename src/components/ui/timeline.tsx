"use client";
// Adapted from the installed Aceternity Timeline example.
import {
  useScroll,
  useTransform,
  motion,
  useReducedMotion,
} from "motion/react";
import { useRef } from "react";
interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}
export function Timeline({ data }: { data: TimelineEntry[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 70%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div className="career-timeline" ref={ref}>
      <div className="timeline-track">
        <motion.div style={{ scaleY: reduced ? 1 : scaleY }} />
      </div>
      {data.map((item, i) => (
        <div
          className={
            "timeline-entry " + (i === data.length - 1 ? "future-entry" : "")
          }
          key={item.title}
        >
          <div className="timeline-date">
            <span className="timeline-dot" />
            <h3>{item.title}</h3>
          </div>
          <div className="timeline-content">{item.content}</div>
        </div>
      ))}
    </div>
  );
}
