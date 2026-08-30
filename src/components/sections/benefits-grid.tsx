import { Reveal } from "./reveal";

interface BenefitMetric {
  type: "metric";
  value: string;
  label: string;
}

interface BenefitFeature {
  type: "feature";
  title: string;
  tag?: string;
  description: string;
}

type BenefitItem = BenefitMetric | BenefitFeature;

interface BenefitsGridProps {
  label?: string;
  heading: string;
  headingAccent?: string;
  items: BenefitItem[];
}

export function BenefitsGrid({
  label = "Benefits",
  heading,
  headingAccent,
  items,
}: BenefitsGridProps) {
  return (
    <section className="bg-inverse-bg py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <span className="type-caption text-accent">{label}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="type-h2 text-inverse-fg mt-4 max-w-3xl mx-auto">
              {heading}{" "}
              {headingAccent && (
                <span className="text-inverse-muted">{headingAccent}</span>
              )}
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="bg-white/[0.05] border border-white/[0.08] rounded-xl p-6 lg:p-8 hover:bg-white/[0.08] hover:border-accent/20 transition-all duration-300">
                {item.type === "metric" ? (
                  <>
                    <div
                      className="font-display font-light text-accent"
                      style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
                    >
                      {item.value}
                    </div>
                    <p className="type-body-sm text-inverse-muted mt-2">
                      {item.label}
                    </p>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="type-h6 text-inverse-fg">{item.title}</h3>
                      {item.tag && (
                        <span className="type-caption text-accent bg-accent/10 px-2 py-0.5 rounded-md">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="type-body-sm text-inverse-muted">
                      {item.description}
                    </p>
                  </>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
