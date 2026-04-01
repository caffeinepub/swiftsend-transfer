# SwiftSend Transfer

## Current State
New project — no existing app files.

## Requested Changes (Diff)

### Add
- Mobile-first transfer amount screen (max-width 430px, centered)
- Status bar (time + battery/signal indicators)
- Top bar: close (×) icon left, "Transfer amount" title centered
- Large bold amount display ($255.91) with circular clear button
- Available balance line: "Available balance: $90,562,688"
- Currency label "USD" in blue
- "CHOOSE YOUR SPEED:" section heading
- Two side-by-side rounded cards:
  - Left: rocket emoji, "in minutes", "1.75% fee"
  - Right: balloon emoji, "in 1–3 days", "Free"
- Card selection state with blue highlight
- Continue button (full-width, dark)
- Interactive JS: card toggle, clear button, continue alert

### Modify
N/A

### Remove
N/A

## Implementation Plan
- Single React page component matching the HTML reference
- State: selected speed (fast/slow), amount
- Tailwind for styling, mobile-first layout
- No backend needed — pure frontend UI
