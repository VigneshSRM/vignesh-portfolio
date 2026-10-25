// Portfolio adaptation of @aceternity/timeline-demo.
import { Timeline } from "@/components/ui/timeline";
import { milestones } from "@/config/portfolio";
export default function TimelineDemo() {
  return (
    <Timeline
      data={milestones.map((m) => ({
        title: m.year,
        content: (
          <>
            <span className="eyebrow">{m.chapter}</span>
            <h4>{m.role}</h4>
            <p>{m.description}</p>
            <div className="tags">
              {m.focus.map((f) => (
                <span key={f}>{f}</span>
              ))}
            </div>
          </>
        ),
      }))}
    />
  );
}
