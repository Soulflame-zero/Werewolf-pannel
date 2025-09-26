# Werewolves Game Manager - Design Guidelines

## Design Approach: Game-Themed Utility Interface

**Selected Approach:** Design System with gaming aesthetics
**Justification:** This is a utility-focused application requiring quick reference during gameplay, but benefits from thematic visual appeal to enhance the gaming experience.

## Core Design Elements

### A. Color Palette
**Dark Theme Primary:**
- Background: 220 15% 8% (deep midnight blue)
- Surface: 220 12% 12% (dark slate)
- Primary: 265 85% 65% (mystical purple)
- Text: 220 10% 92% (soft white)
- Accent: 45 85% 65% (warm amber for important actions)

**Light Theme Primary:**
- Background: 220 20% 96% (pale moonlight)
- Surface: 220 15% 100% (pure white)
- Primary: 265 75% 55% (deep purple)
- Text: 220 15% 15% (dark charcoal)

### B. Typography
**Font Selection:** Inter via Google Fonts CDN
- Headers: 600 weight, larger sizes for role names
- Body: 400 weight for descriptions and lists
- UI Elements: 500 weight for buttons and labels
- Monospace: JetBrains Mono for night order numbers

### C. Layout System
**Spacing System:** Tailwind units of 2, 4, 6, and 8
- Cards: p-6 for content, m-4 for spacing
- Lists: gap-2 between items
- Sections: mb-8 for major divisions
- Buttons: px-6 py-2 for consistent touch targets

### D. Component Library

**Navigation:**
- Top navigation bar with app title and game settings
- Tab navigation for "Current Game" and "Role Library"

**Core Components:**
- Role cards with night order badges
- Drag-and-drop role list for night sequence
- Modal dialogs for adding/editing roles
- Quick action buttons for common operations

**Data Displays:**
- Night sequence timeline view
- Role grid for browsing available roles
- Compact list view for active game roles

**Forms:**
- Role creation form with name, description, and night order
- Game setup wizard for new configurations

**Game-Specific Elements:**
- Night order badges with mystical styling
- Role category indicators (Werewolf, Villager, Special)
- Game phase indicator (Day/Night toggle)

### E. Visual Enhancements
**Subtle Animations:**
- Smooth transitions between day/night themes
- Gentle hover states on interactive elements
- Slide transitions for modal appearances

**Gaming Aesthetics:**
- Subtle card shadows suggesting depth
- Rounded corners throughout for friendly feel
- Night order badges with subtle glow effects
- Mystical purple gradients for primary actions

## Key Design Principles
1. **Quick Reference Priority:** Information must be scannable during active gameplay
2. **Thematic Consistency:** Maintain werewolves/mystery game atmosphere without sacrificing usability
3. **Mobile-First:** Optimized for tablet/phone use during games
4. **Clear Hierarchy:** Night order and role information prominently displayed
5. **Minimal Cognitive Load:** Simple, predictable interface patterns

## Images
**No Hero Image Required**
This utility app focuses on functional content over marketing imagery. Any decorative elements should be subtle background patterns or small iconography related to the werewolves theme (moon phases, subtle textures).