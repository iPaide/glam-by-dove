# Glam By Dove — Design Brainstorm

Three distinct creative directions for the Glam By Dove service website. Each is a complete, opinionated visual world — not a variation on the same template. After reviewing, one direction will be chosen and committed to fully.

---

<response>
<text>

## Direction 1 — "Editorial Atelier"

A high-fashion print magazine translated to the web. Think *Vogue Nigeria* spreads, the inside of a Lagos couture lookbook, the calm authority of a luxury beauty house. Every page reads like a curated editorial story rather than a service page.

- **Design Movement**: Modern editorial / fashion print revival, with traces of Swiss typography discipline.
- **Core Principles**:
  1. Type as the hero — large display serifs set the rhythm before any image.
  2. Asymmetric column layouts that mimic magazine spreads (12-col grid with intentional column jumps).
  3. Generous, deliberate whitespace; the page breathes like a printed page.
  4. Imagery is large, uncropped, and never decorative — it is the story.
- **Color Philosophy**: Warm cream paper (#F6EFE6) as base, deep espresso ink (#221913) for text, with a single signature accent of muted rose-gold (#B98A6E). The palette evokes printed paper, soft studio light, and skin tones — restrained, expensive, timeless. No gradients.
- **Layout Paradigm**: Editorial split-page layouts. Hero is a left-aligned oversized serif headline beside a single full-bleed portrait. Service sections alternate left/right with rule-line dividers and small numbered captions ("01 / Bridal", "02 / Gele"). No centered hero blocks.
- **Signature Elements**:
  1. Numbered section markers in small caps tracked wide (e.g., "N° 02 — OWAMBE").
  2. Hairline rules and pull-quotes set in italic serif.
  3. A recurring "GBD" monogram mark used as a paragraph terminator and favicon.
- **Interaction Philosophy**: Restrained and confident. Hovering an image reveals a caption sliding up from the bottom like a magazine cutline. Buttons are thin-bordered with letter-spaced labels. Nothing flashes — it composes.
- **Animation**: Slow, considered fades (300–500ms) with `cubic-bezier(0.23, 1, 0.32, 1)`. Section headings reveal with a 24px upward translate + opacity, staggered 60ms. Image entrances use a subtle scale from 1.04 → 1.00 with a soft mask wipe. No bouncing, no parallax tricks.
- **Typography System**: Display: **Cormorant Garamond** (700, italic for accents) for editorial headers. Body: **Inter Tight** 400/500 for clean readability. Eyebrow labels: **Inter** 500 small caps, tracked +0.18em. Strict scale: 72 / 48 / 28 / 18 / 14.

Best for: positioning Dove as a premium bridal artist serving discerning, image-conscious clients. Photographs the brand as a beauty house, not a service vendor.

</text>
<probability>0.07</probability>
</response>

---

<response>
<text>

## Direction 2 — "Gilded Owambe"

A celebratory, unapologetically Nigerian luxury aesthetic. Inspired by aso-ebi color stories, gold-leaf wedding invitations, velvet-textured Owambe halls, and the geometric beauty of pleated gele. Warm, regal, and joyful — but expensively so.

- **Design Movement**: Afro-luxe maximalism with art-deco discipline. References Yoruba textile patterns, gilded frames, and Lagos wedding stationery.
- **Core Principles**:
  1. Warmth over coolness — every neutral leans gold or terracotta.
  2. Pattern as punctuation — geometric motifs frame, never fill.
  3. Layered depth via soft shadows, gold foil textures, and subtle grain.
  4. Curves and arches reference gele silhouettes and bridal headpieces.
- **Color Philosophy**: A rich, regal palette: deep aubergine (#3B1F2B) and burnished plum as primaries, paired with antique gold (#C9A24B), champagne cream (#F4E7D0), and a blush rose (#E7B7B0) for softness. The palette feels like a velvet invitation card lit by candlelight — celebratory but grown.
- **Layout Paradigm**: Arched containers and asymmetric "stacked card" compositions. The hero uses a large arched portrait window (think bridal mirror) anchored to the left, with stacked text + gold rule on the right. Services are presented as "ceremony cards" with arched tops and gold hairline frames. No flat rectangles in the hero zone.
- **Signature Elements**:
  1. Arched image masks ("gele arches") used for portraits and service cards.
  2. Hairline gold dividers with a tiny diamond/lozenge centerpiece.
  3. A subtle repeating geometric motif (inspired by adire/aso-oke) used as section background at 6% opacity.
- **Interaction Philosophy**: Warm and tactile. Cards lift slightly with a soft gold glow on hover. The booking CTA uses a foil-shimmer sweep on hover. Floating WhatsApp button has a gentle pulse, like a bell at a celebration.
- **Animation**: Smooth, ceremonial pacing (250–450ms). Arches reveal with a clip-path that opens from the bottom like a curtain. Gold rules draw in horizontally from left over 400ms. Hovers use scale(1.02) + a 4px lift with a warm shadow. Reduced motion is fully respected.
- **Typography System**: Display: **Playfair Display** 700/italic for headlines (high-contrast serif evokes wedding stationery). Sub-headers: **Cormorant** italic for romantic accents. Body: **Manrope** 400/500 for modern legibility. Eyebrows: **Manrope** 600 small caps, tracked +0.16em. Numbers and prices use **Playfair** for ceremony.

Best for: leaning into the celebratory, Nigerian luxury identity Dove already lives in. Feels native to bridal halls, Owambe, and gele culture without being kitschy.

</text>
<probability>0.09</probability>
</response>

---

<response>
<text>

## Direction 3 — "Soft Studio Minimal"

A quiet, light-filled beauty studio. Inspired by Scandinavian skincare brands, Aesop product pages, and the calm of a morning makeup chair by a window. Minimal, airy, and skin-toned — letting the makeup work itself be loud.

- **Design Movement**: Quiet luxury / Japandi minimalism applied to beauty. Restraint over ornament.
- **Core Principles**:
  1. The work is the decoration — UI recedes so portraits dominate.
  2. Soft, diffused light tones — nothing pure white, nothing pure black.
  3. Organic blob shapes and soft radii instead of sharp geometry.
  4. Calm pacing — pages scroll like a slow exhale.
- **Color Philosophy**: A skin-tone palette: warm porcelain (#FBF5EF) base, soft blush (#EBD3CB) for surfaces, dusty mauve (#A8807B) accent, and a deep cocoa (#2A1E1A) for text. Avoids pink-as-cliché by leaning into nude/mauve undertones. Feels like morning light on skin.
- **Layout Paradigm**: Long-scroll, single-column-with-offsets. Sections breathe with 160px+ vertical padding. The hero is a left-aligned editorial paragraph (not a giant headline) beside a soft-edged portrait that bleeds off the right edge. Services are presented as tall, narrow vertical cards with offset text — never a uniform 3-column grid.
- **Signature Elements**:
  1. Soft organic blob shapes used as background watermarks behind portraits.
  2. Ultra-thin underline links and arrow-suffixed CTAs ("Book a session →").
  3. A subtle film-grain overlay on imagery for texture warmth.
- **Interaction Philosophy**: Whisper-quiet. Hovers shift opacity, never color. CTAs underline animate from left. Scrolling triggers slow, low-amplitude reveals. The site never demands attention — it earns it.
- **Animation**: Long, soft easings (400–600ms) with `cubic-bezier(0.16, 1, 0.3, 1)`. Images parallax at very low intensity (~6%). Text reveals with 16px translate + opacity, no scale. Buttons have a gentle 1.01 hover scale. Reduced motion gracefully removes all parallax.
- **Typography System**: Display: **Fraunces** 400 (optical, soft) for headlines — warm serif with personality. Body: **DM Sans** 400/500 for clean, neutral reading. Eyebrows: **DM Mono** uppercase for technical contrast. Strict, generous line-height (1.6 body, 1.1 display).

Best for: positioning Dove as a calm, skilled, premium artist — appealing to brides who want quiet luxury rather than maximalist Owambe energy. Internationally readable.

</text>
<probability>0.06</probability>
</response>

---

## Recommendation

For Glam By Dove specifically — a Nigerian bridal & gele artist whose work is celebratory, warm, and deeply tied to Owambe/wedding culture — **Direction 2: "Gilded Owambe"** is the strongest fit. It honors the cultural specificity of the brand (gele, aso-ebi, bridal halls), reads as luxurious without going generic-Pinterest-pink, and gives the portfolio work a frame worthy of it. Direction 1 is a strong alternative if Dove ever wants to push into pure editorial/fashion-house positioning.

**Selected direction: Gilded Owambe.**
