# IMPLEMENTATION_UPDATE_VISUALS.MD

## Goal Description
Transform the `BrandedPragueLanding` page from a basic layout into a premium, high-converting, and visually stunning experience. The update will focus on modern web aesthetics, including glassmorphism, dynamic animations, water-themed visual flourishes, and a more interactive user experience.

## User Review Required
> [!IMPORTANT]
> The plan involves significant visual changes. Please review the proposed aesthetic direction (Glassmorphism + Water Theme) before execution.

## Proposed Changes

### Phase 1: Design System & Assets
- [ ] Define a refined color palette in `tailwind.css` using HSL for better control.
- [ ] Add glassmorphism utility classes (backdrop-blur, border-opacity).
- [ ] Implement custom animations for water-like effects (waves, ripples).
- [ ] Source or generate high-quality water-themed background assets.

### Phase 2: Hero Section Overhaul
- [ ] **[MODIFY] [BrandedPragueLanding.tsx](file:///c:/Users/adamh/OneDrive/Plocha/Coding/Figma_Plumbing_Service/src/screens/BrandedPragueLanding/BrandedPragueLanding.tsx)**
    - [ ] Replace static background with a dynamic, animated gradient or video/image with overlay.
    - [ ] Apply glassmorphism to the main CTA button and stats container.
    - [ ] Implement staggered `fade-up` animations for the headline and subtext.

### Phase 3: Interactive Content Cards
- [ ] **[MODIFY] [BrandedPragueLanding.tsx](file:///c:/Users/adamh/OneDrive/Plocha/Coding/Figma_Plumbing_Service/src/screens/BrandedPragueLanding/BrandedPragueLanding.tsx)**
    - [ ] Convert "Kdo jsme / Pro koho" cards into glassmorphic tiles with hover-lift effects.
    - [ ] Add subtle parallax effects to background decorative elements.
    - [ ] Animate icons (Check, X) on scroll/hover.

### Phase 4: Process & Trust Sections
- [ ] **[MODIFY] [BrandedPragueLanding.tsx](file:///c:/Users/adamh/OneDrive/Plocha/Coding/Figma_Plumbing_Service/src/screens/BrandedPragueLanding/BrandedPragueLanding.tsx)**
    - [ ] Modernize the "Process Steps" with a vertical timeline or connecting line animation.
    - [ ] Add a "shimmer" effect to the final CTA to draw attention.
    - [ ] Implement a smooth scroll behavior for the entire page.

### Phase 5: Final Polish & Verification
- [ ] [ ] Test responsiveness across mobile, tablet, and desktop.
- [ ] [ ] Ensure accessibility (contrast ratios, aria-labels).
- [ ] [ ] Verify animation performance (avoiding jank).

## Verification Plan

### Automated Tests
- [ ] Run `npm run lint` to ensure no new warnings.
- [ ] Use Lighthouse to check performance impact of new animations.

### Manual Verification
- [ ] Visual inspection of glassmorphism effects on different backgrounds.
- [ ] Cross-browser testing (Chrome, Safari, Firefox) for animation compatibility.
- [ ] Mobile interaction testing for hover states and touch targets.

## Progress Checklist
- [ ] **Design Foundation**
    - [ ] Colors defined
    - [ ] Utilities added
- [ ] **Hero Section**
    - [ ] Background animation
    - [ ] Glassmorphic CTA
- [ ] **Content Sections**
    - [ ] Card modernization
    - [ ] Parallax effects
- [ ] **Process Section**
    - [ ] Timeline animation
- [ ] **Polish**
    - [ ] Responsive check
    - [ ] Performance check
