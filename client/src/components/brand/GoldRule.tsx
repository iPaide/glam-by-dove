/**
 * GoldRule — signature gold hairline divider with a small lozenge centerpiece.
 * Style: "Gilded Owambe" — used to separate sections like a wedding invitation.
 */
import { cn } from "@/lib/utils";

export function GoldRule({
  className,
  align = "center",
}: {
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "gold-rule",
        align === "left" && "justify-start",
        className,
      )}
      aria-hidden
    >
      {align === "center" && (
        <>
          {/* hairlines on both sides via ::before/::after */}
        </>
      )}
      <span className="lozenge" />
    </div>
  );
}
