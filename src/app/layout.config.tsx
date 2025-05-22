import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <img
          src="/othello.png"
          alt="Othello Logo"
          width={48}
          height={48}
          style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 0, marginTop: 16, marginBottom: 16 }}
        />
        Othello
      </>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [],
};
