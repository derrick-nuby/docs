import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { i18n } from '@/lib/i18n'; // your i18n config

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string; }>;
  children: ReactNode;
}) {
  const { lang } = await params;

  // If you hide the prefix for the default locale, omit it.
  const hideDefault = (i18n as any).hidePrefix === 'default-locale'; // name per docs
  const isDefault = lang === i18n.defaultLanguage;
  const prefix = hideDefault && isDefault ? '' : `/${lang}`;

  return (
    <DocsLayout
      tree={source.pageTree[lang]}           // i18n-aware tree
      {...baseOptions(lang)}                 // pass locale into UI
      sidebar={{
        tabs: [
          {
            title: 'v1',
            url: `${prefix}/docs/v1`,
            // make the tab visible on “/docs” too (optional default)
            urls: new Set([`${prefix}/docs`, `${prefix}/docs/v1`]),
          },
          {
            title: 'v2',
            url: `${prefix}/docs/v2`,
          },
        ],
      }}
    >
      {children}
    </DocsLayout>
  );
}
