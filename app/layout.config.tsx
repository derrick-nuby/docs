import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { i18n } from '@/lib/i18n';
import HispLogo from '@/public/images/hisp-logo.png';
import Image from 'next/image';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/[lang]/(home)/layout.tsx
 * Docs Layout: app/[lang]/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    i18n,
    nav: {
      title: (
        <>
          <Image
            src={HispLogo}
            alt="HISP Rwanda Logo"
            width={24}
            height={24}
            className="mr-2"
          />
          HISP Rwanda
        </>
      ),
    },
    links: [
    ],
    searchToggle: {
      enabled: false,
    }
  };
}
