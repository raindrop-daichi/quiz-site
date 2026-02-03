# Quiz Site - Developer Guide

## Architecture Overview

This quiz site is built with **Astro** and follows a modular, maintainable architecture designed for future extensibility.

### Project Structure

```
src/
├── lib/                    # Shared business logic and utilities
│   ├── quiz-types.ts      # TypeScript interfaces and types
│   └── quiz-manager.ts    # Quiz state management class
├── content/
│   ├── config.ts          # Content collection schema
│   └── quizzes/           # Quiz data (YAML files)
├── layouts/
│   └── Layout.astro       # Base layout with global styles
└── pages/
    ├── index.astro        # Quiz listing page
    └── quiz/
        └── [id].astro     # Dynamic quiz page
```

## Key Design Decisions

### 1. CSS Variables for Theming
All colors, spacing, and other design tokens are defined as CSS variables in `:root`. This makes it easy to:
- Maintain consistent design across pages
- Implement theme switching (light/dark mode)
- Update the design system quickly

### 2. Separation of Concerns
- **Business Logic**: `QuizManager` class handles state and quiz logic
- **Types**: All interfaces are defined in `quiz-types.ts`
- **UI**: Astro components handle rendering and user interaction
- **Data**: Quiz content is stored in YAML files with schema validation

### 3. Mobile-First Design
- Minimum tap target size of 44px (WCAG 2.1 AAA)
- Enhanced touch targets on mobile (64px min height)
- Responsive spacing and typography
- Smooth scrolling behaviors

### 4. Accessibility
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- Semantic HTML structure
- Progress indicators with aria-live regions

## Future Extensibility

### Adding New Quiz Types

The current architecture supports 4-choice questions. To add new question types:

1. **Update Schema** (`src/content/config.ts`):
```typescript
questions: z.array(
  z.discriminatedUnion('type', [
    z.object({
      type: z.literal('multiple-choice'),
      question: z.string(),
      choices: z.array(z.string()).length(4),
      correctAnswer: z.number(),
      explanation: z.string(),
    }),
    z.object({
      type: z.literal('true-false'),
      question: z.string(),
      correctAnswer: z.boolean(),
      explanation: z.string(),
    }),
    // Add more types...
  ])
)
```

2. **Update QuizManager** to handle different question types
3. **Update UI** to render different question types

### Adding Features

#### Quiz Categories/Tags
Add to schema:
```typescript
tags: z.array(z.string()).optional(),
category: z.string().optional(),
difficulty: z.enum(['easy', 'medium', 'hard']).optional(),
```

#### Timer Feature
1. Add timer state to QuizManager
2. Create a Timer component
3. Add timer display to quiz UI
4. Save time-based statistics

#### User Progress Persistence
1. Use localStorage or sessionStorage
2. Save quiz state in QuizManager
3. Load state on page load
4. Add "Resume Quiz" feature

#### Quiz Statistics
1. Extend QuizResult interface
2. Track time per question
3. Track attempts per question
4. Display detailed statistics

#### Multi-language Support
1. Use Astro's i18n features
2. Create language-specific content collections
3. Add language switcher
4. Use locale-aware formatting

### Component Extraction

For better reusability, consider extracting:
- `ProgressBar.astro` - Reusable progress indicator
- `QuizButton.astro` - Styled button component
- `ResultCard.astro` - Result display component

Example:
```astro
---
// src/components/ProgressBar.astro
interface Props {
  current: number;
  total: number;
  score: number;
  attempted: number;
}
const { current, total, score, attempted } = Astro.props;
---
<div class="progress-container" role="region" aria-label="クイズの進捗">
  <!-- Progress UI -->
</div>
```

## Development Workflow

### Running Tests
Currently no test framework. To add testing:

```bash
pnpm add -D vitest @vitest/ui
```

Create `src/lib/__tests__/quiz-manager.test.ts`:
```typescript
import { describe, it, expect } from 'vitest';
import { QuizManager } from '../quiz-manager';

describe('QuizManager', () => {
  it('should initialize with correct state', () => {
    const manager = new QuizManager(mockQuizData);
    expect(manager.getProgress().currentQuestion).toBe(1);
  });
});
```

### Code Quality Tools

#### ESLint Setup
```bash
pnpm add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

#### Prettier Setup
```bash
pnpm add -D prettier prettier-plugin-astro
```

### Performance Optimization

1. **Image Optimization**: Use Astro's Image component
2. **Code Splitting**: Astro handles this automatically
3. **Lazy Loading**: Consider lazy-loading quiz data for large quizzes
4. **Caching**: Implement service worker for offline support

### Mobile UX Best Practices

### Touch Target Guidelines
- Minimum: 44x44px (WCAG 2.5.5 Level AAA - Target Size)
- Recommended: 48x48px (Material Design)
- Our implementation: 64px on mobile for enhanced UX

### Spacing
- More generous spacing on mobile (20px between buttons)
- Adequate padding inside buttons (20px vertical)
- Larger tap areas reduce errors

### Feedback
- Visual feedback on tap (scale animation)
- Color changes for selected state
- Smooth transitions (0.3s)

## Security Considerations

### Content Validation
- Astro Content Collections validate all quiz data
- Type-safe at build time
- No runtime validation needed

### XSS Prevention
- Astro escapes content by default
- No `dangerouslySetInnerHTML` equivalent used
- User input is not accepted (static site)

## Deployment

### GitHub Pages
The site is configured for GitHub Pages deployment:
- Base path: `/quiz-site`
- Static site generation
- Automatic deployment via GitHub Actions

### Other Platforms
To deploy to Netlify, Vercel, or Cloudflare Pages:
1. Update `astro.config.mjs` base path
2. Connect repository to platform
3. Deploy automatically on push

## Contributing

### Adding New Quizzes
1. Create a YAML file in `src/content/quizzes/`
2. Follow the schema defined in `src/content/config.ts`
3. Test locally with `pnpm dev`
4. Build and verify with `pnpm build && pnpm preview`

### Coding Standards
- Use TypeScript for type safety
- Add JSDoc comments to functions
- Follow existing naming conventions
- Keep functions small and focused
- Use CSS variables for styling
- Ensure mobile responsiveness

## Troubleshooting

### Build Errors
- Check YAML syntax in quiz files
- Verify all required fields are present
- Run `astro check` for type errors

### Style Issues
- Check CSS variable definitions
- Verify media query breakpoints
- Test in multiple browsers

### Performance Issues
- Use Lighthouse for auditing
- Check bundle size with `astro build`
- Optimize images if needed

## Resources

- [Astro Documentation](https://docs.astro.build)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Web Content Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Material Design Guidelines](https://material.io/design)
