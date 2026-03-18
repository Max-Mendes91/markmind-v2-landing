# Device Breakpoints Reference

> Adapted from live-portfolio. Last updated: 2026-02.

---

## Tailwind Breakpoints
s
| Breakpoint | Min-Width | Target Devices |
|---|---|---|
| default | 0px | XS Mobile (< 640px) |
| `sm:` | 640px | Large phones, phablets |
| `md:` | 768px | Tablets portrait |
| `lg:` | 1024px | Laptops, landscape tablets |
| `xl:` | 1280px | Desktops |
| `2xl:` | 1536px | Large desktops |

---

## Target Devices by Category

### XS Mobile (< 375px)
- Galaxy Z Fold 5: 344×882
- Galaxy S8+: 360×740
- iPhone SE: 375×667

### Mobile (375–430px)
- iPhone 12 Pro: 390×844
- Pixel 7 / Galaxy A51: 412×915
- iPhone 14 Pro Max: 430×932

### Tablet (768–1023px)
- iPad Mini: 768×1024
- iPad Air: 820×1180
- iPad Pro 11": 834×1194

### Short Height (< 700px) — Critical for `h-screen` sections
- Nest Hub: 1024×600
- Nest Hub Max: 1280×800
- iPhone SE landscape: 667×375
- Surface Duo landscape: 720×540

---

## Custom Height Breakpoints

Add to `globals.css`:

```css
@custom-variant short (@media (max-height: 700px));
@custom-variant tall  (@media (min-height: 800px));
```

Usage in components:
```tsx
className="h-screen short:h-auto short:min-h-[500px]"
```

---

## Design Strategy by Category

### XS Mobile (< 375px)
- Single column layouts
- Hide decorative/atmospheric elements
- Tightest spacing (`py-16` instead of `py-28`)
- Smallest text sizes

### Mobile (375–639px)
- Single column
- Condensed section padding (`py-20`)
- Cards stack vertically
- Marquee speed may be reduced

### Tablet (640–1023px)
- 2-column grids where applicable
- Intermediate padding (`py-24`)
- Bento grid: 2-col

### Desktop (1024px+)
- Full layout — all animations, all columns, max spacing
- Bento grid: full 12-col editorial

### Short Height (< 700px)
- **Never** use `h-screen` without a `short:` fallback
- Reduce all `py-*` values
- The reveal-cards sticky section needs `short:` handling — `h-screen` will overflow on Nest Hub
