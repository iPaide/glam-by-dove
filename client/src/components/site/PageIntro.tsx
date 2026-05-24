interface PageIntroProps {
  eyebrow: string;
  title: string;
  italic: string;
  body: string;
}

export function PageIntro({ eyebrow, title, italic, body }: PageIntroProps) {
  return (
    <section className="relative overflow-hidden bg-[color:var(--aubergine)] pt-32 pb-16 text-[color:var(--cream)] md:pt-40 md:pb-20">
      <div
        aria-hidden
        className="aso-pattern pointer-events-none absolute inset-0 opacity-[0.18]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-28 top-10 size-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,75,0.24),transparent_62%)]"
      />
      <div className="container relative">
        <span className="eyebrow text-[color:var(--gold-soft)]">{eyebrow}</span>
        <h1 className="mt-4 max-w-[13ch] font-display text-[clamp(2.55rem,6vw,4.8rem)] leading-[1.02] text-[color:var(--cream)]">
          {title}{" "}
          <span className="font-italic-serif italic text-[color:var(--gold-soft)]">
            {italic}
          </span>
          <span className="text-[color:var(--gold)]">.</span>
        </h1>
        <p className="mt-6 max-w-[58ch] text-[15.5px] leading-[1.8] text-[color:var(--cream)]/78 md:text-base">
          {body}
        </p>
      </div>
    </section>
  );
}
