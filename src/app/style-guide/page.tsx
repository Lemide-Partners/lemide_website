import { Button, Card, CardHeader, CardTitle, CardContent, Input, Textarea, Badge, Logo } from "@/components/ui";

const brandColors = [
  { name: "Deep Navy", token: "primary", hex: "#0B1D4B", class: "bg-primary" },
  { name: "Golden Bronze", token: "accent", hex: "#CC9E49", class: "bg-accent" },
  { name: "Linen", token: "background", hex: "#F7EBDF", class: "bg-background" },
  { name: "Shadow Grey", token: "inverse-bg", hex: "#171721", class: "bg-inverse-bg" },
];

const navyScale = [
  { step: "50", hex: "#E8ECF3" },
  { step: "100", hex: "#C5CDDF" },
  { step: "200", hex: "#8B9BBF" },
  { step: "300", hex: "#51699F" },
  { step: "400", hex: "#2E4578" },
  { step: "500", hex: "#0B1D4B" },
  { step: "600", hex: "#091840" },
  { step: "700", hex: "#071234" },
  { step: "800", hex: "#050D28" },
  { step: "900", hex: "#03081C" },
];

const goldScale = [
  { step: "50", hex: "#FBF5E8" },
  { step: "100", hex: "#F5E5C5" },
  { step: "200", hex: "#EBCB8B" },
  { step: "300", hex: "#D9AD5E" },
  { step: "400", hex: "#CC9E49" },
  { step: "500", hex: "#B8893A" },
  { step: "600", hex: "#9A712E" },
  { step: "700", hex: "#7C5A23" },
  { step: "800", hex: "#5E4319" },
  { step: "900", hex: "#3F2D10" },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-16">
      <h2 className="type-h3 text-foreground mb-6 pb-3 border-b border-border">{title}</h2>
      {children}
    </section>
  );
}

function ColorSwatch({ hex, label, dark }: { hex: string; label: string; dark?: boolean }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className="h-16 w-full rounded-lg border border-border"
        style={{ backgroundColor: hex }}
      />
      <span className={`type-caption ${dark ? "text-inverse-fg" : ""}`}>{label}</span>
      <span className="type-body-sm text-muted-foreground">{hex}</span>
    </div>
  );
}

export default function StyleGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border px-8 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Logo />
          <span className="type-caption text-muted-foreground">Design System Reference</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-12">
        <h1 className="type-h1 text-foreground mb-2">Lemide Design System</h1>
        <p className="type-body-lg text-muted-foreground mb-16">
          Tokens, typography, and base components for the Lemide Partners website.
        </p>

        {/* ── Logo ────────────────────────────────────────────── */}
        <Section title="Logo">
          <div className="flex flex-wrap items-start gap-12">
            <div>
              <p className="type-body-sm text-muted-foreground mb-3">Default (min 120px)</p>
              <div className="border border-dashed border-border rounded-lg p-2 inline-block">
                <Logo />
              </div>
            </div>
            <div>
              <p className="type-body-sm text-muted-foreground mb-3">Large (240px)</p>
              <div className="border border-dashed border-border rounded-lg p-2 inline-block">
                <Logo />
              </div>
            </div>
            <div>
              <p className="type-body-sm text-muted-foreground mb-3">Inverse (on dark)</p>
              <div className="bg-inverse-bg border border-dashed border-navy-700 rounded-lg p-2 inline-block">
                <Logo inverse />
              </div>
            </div>
          </div>
          <p className="type-body-sm text-muted-foreground mt-4">
            Dashed border shows enforced clear space. Min width: 120px (full), 16px (mark).
          </p>
        </Section>

        {/* ── Brand Colors ────────────────────────────────────── */}
        <Section title="Brand Colors">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
            {brandColors.map((c) => (
              <ColorSwatch key={c.token} hex={c.hex} label={c.name} />
            ))}
          </div>

          <h3 className="type-h5 text-foreground mb-4">Navy Scale</h3>
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 mb-8">
            {navyScale.map((c) => (
              <div key={c.step} className="flex flex-col items-center gap-1">
                <div
                  className="h-10 w-full rounded border border-border"
                  style={{ backgroundColor: c.hex }}
                />
                <span className="type-caption">{c.step}</span>
              </div>
            ))}
          </div>

          <h3 className="type-h5 text-foreground mb-4">Gold Scale</h3>
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 mb-8">
            {goldScale.map((c) => (
              <div key={c.step} className="flex flex-col items-center gap-1">
                <div
                  className="h-10 w-full rounded border border-border"
                  style={{ backgroundColor: c.hex }}
                />
                <span className="type-caption">{c.step}</span>
              </div>
            ))}
          </div>

          <h3 className="type-h5 text-foreground mb-4">Semantic Tokens</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Card", class: "bg-card border border-border" },
              { label: "Muted", class: "bg-muted" },
              { label: "Border", class: "bg-border" },
              { label: "Destructive", class: "bg-destructive" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-1.5">
                <div className={`h-12 rounded-lg ${s.class}`} />
                <span className="type-caption">{s.label}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Typography ──────────────────────────────────────── */}
        <Section title="Typography">
          <div className="space-y-6">
            <div>
              <span className="type-caption text-muted-foreground">H1 — Display Light 300, 48px</span>
              <p className="type-h1 text-foreground">Operational Excellence</p>
            </div>
            <div>
              <span className="type-caption text-muted-foreground">H2 — Display Regular 400, 36px</span>
              <p className="type-h2 text-foreground">Trusted Infrastructure</p>
            </div>
            <div>
              <span className="type-caption text-muted-foreground">H3 — Display Regular 400, 28px</span>
              <p className="type-h3 text-foreground">Early-Stage Partnerships</p>
            </div>
            <div>
              <span className="type-caption text-muted-foreground">H4 — Display Medium 500, 22px</span>
              <p className="type-h4 text-foreground">Compliance & Banking</p>
            </div>
            <div>
              <span className="type-caption text-muted-foreground">H5 — Display Medium 500, 18px</span>
              <p className="type-h5 text-foreground">Legal Operations</p>
            </div>
            <div>
              <span className="type-caption text-muted-foreground">H6 — Display Medium 500, 16px</span>
              <p className="type-h6 text-foreground">Corporate Formation</p>
            </div>
            <hr className="border-border" />
            <div>
              <span className="type-caption text-muted-foreground">Body Large — 18px</span>
              <p className="type-body-lg text-foreground">
                Lemide Partners provides operational infrastructure for early-stage
                startups — legal, compliance, banking, and entity management through
                a dedicated partner and retainer model.
              </p>
            </div>
            <div>
              <span className="type-caption text-muted-foreground">Body — 16px</span>
              <p className="type-body text-foreground">
                We handle the operational complexity so founders can focus on building.
                Every engagement is structured around a long-term partnership, not
                transactional billing.
              </p>
            </div>
            <div>
              <span className="type-caption text-muted-foreground">Body Small — 14px</span>
              <p className="type-body-sm text-muted-foreground">
                Published on August 30, 2026 · 5 min read
              </p>
            </div>
            <div>
              <span className="type-caption text-muted-foreground">Caption — 12px, uppercase</span>
              <p className="type-caption text-muted-foreground">Case Study · Financial Services</p>
            </div>
          </div>
        </Section>

        {/* ── Buttons ─────────────────────────────────────────── */}
        <Section title="Buttons">
          <div className="space-y-8">
            <div>
              <h3 className="type-h5 text-foreground mb-4">Variants</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="accent">Accent</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </div>
            <div>
              <h3 className="type-h5 text-foreground mb-4">Sizes</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
            <div>
              <h3 className="type-h5 text-foreground mb-4">States</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button>Default</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>
            <div>
              <h3 className="type-h5 text-foreground mb-4">On Dark Surface</h3>
              <div className="bg-inverse-bg rounded-lg p-6 flex flex-wrap items-center gap-4">
                <Button variant="accent">Get Started</Button>
                <Button variant="outline" className="border-white/20 text-inverse-fg hover:bg-white/5">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* ── Badges ──────────────────────────────────────────── */}
        <Section title="Badges">
          <div className="flex flex-wrap items-center gap-4">
            <Badge variant="default">Default</Badge>
            <Badge variant="accent">Accent</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="muted">Muted</Badge>
          </div>
        </Section>

        {/* ── Cards ───────────────────────────────────────────── */}
        <Section title="Cards">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="default">
              <CardHeader>
                <CardTitle>Default</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  White surface with 1px border on Linen background.
                </p>
              </CardContent>
            </Card>
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Elevated</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  White surface with shadow, no border.
                </p>
              </CardContent>
            </Card>
            <Card variant="outlined">
              <CardHeader>
                <CardTitle>Outlined</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Transparent with border — for on-white surfaces.
                </p>
              </CardContent>
            </Card>
            <Card variant="inverse">
              <CardHeader>
                <CardTitle>Inverse</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-inverse-muted">
                  Dark surface for feature blocks.
                </p>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* ── Form Inputs ─────────────────────────────────────── */}
        <Section title="Form Inputs">
          <div className="max-w-md space-y-6">
            <Input label="Full Name" placeholder="Jane Smith" />
            <Input label="Email" type="email" placeholder="jane@company.com" />
            <Input label="Company" placeholder="Optional" />
            <Input label="With Error" placeholder="Required field" error="This field is required" />
            <Input label="Disabled" placeholder="Cannot edit" disabled />
            <Textarea label="Message" placeholder="Tell us about your needs..." />
          </div>
        </Section>

        {/* ── Inverse Section Example ─────────────────────────── */}
        <Section title="Inverse Section">
          <div className="bg-inverse-bg text-inverse-fg rounded-xl p-12">
            <Badge variant="accent" className="mb-4">Partnership</Badge>
            <h2 className="type-h2 text-inverse-fg mb-4">
              Built for founders who need an operator, not a vendor.
            </h2>
            <p className="type-body-lg text-inverse-muted mb-8 max-w-2xl">
              We embed with your team from day one — handling legal, compliance,
              and banking so you can focus on building what matters.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="accent">Schedule a Call</Button>
              <Button variant="outline" className="border-white/20 text-inverse-fg hover:bg-white/5">
                Read Case Studies
              </Button>
            </div>
          </div>
        </Section>

        {/* ── Spacing Reference ───────────────────────────────── */}
        <Section title="Spacing Scale">
          <div className="space-y-2">
            {[
              { label: "4px (1)", width: "w-1" },
              { label: "8px (2)", width: "w-2" },
              { label: "12px (3)", width: "w-3" },
              { label: "16px (4)", width: "w-4" },
              { label: "24px (6)", width: "w-6" },
              { label: "32px (8)", width: "w-8" },
              { label: "48px (12)", width: "w-12" },
              { label: "64px (16)", width: "w-16" },
              { label: "96px (24)", width: "w-24" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-4">
                <span className="type-body-sm text-muted-foreground w-20">{s.label}</span>
                <div className={`h-3 ${s.width} bg-accent rounded-sm`} />
              </div>
            ))}
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-inverse-bg text-inverse-fg px-8 py-8 mt-16">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Logo inverse />
          <span className="type-body-sm text-inverse-muted">
            &copy; 2026 Lemide Partners
          </span>
        </div>
      </footer>
    </div>
  );
}
