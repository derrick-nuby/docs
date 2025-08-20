import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from 'fumadocs-ui/layouts/home/navbar';
import Link from 'fumadocs-core/link';
import Image from 'next/image';
import { Book, ComponentIcon } from 'lucide-react';
import HispLogo from '@/public/images/hisp-logo.png';

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string; }>;
  children: ReactNode;
}) {
  const { lang } = await params;
  const langPrefix = lang && lang !== 'en' ? `/${lang}` : '';

  return (
    <HomeLayout
      nav={{
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
      }}
      style={
        {
          '--spacing-fd-container': '1120px',
        } as object
      }
      links={[
        {
          text: 'Home',
          url: `${langPrefix}/`,
          active: 'url',
        },
        {
          type: 'custom',
          on: 'nav',
          children: (
            <NavbarMenu>
              <NavbarMenuTrigger>
                <Link href={`${langPrefix}/docs`}>Documentation</Link>
              </NavbarMenuTrigger>
              <NavbarMenuContent className="text-[15px] grid grid-cols-2 gap-4 p-4">
                <NavbarMenuLink href={`${langPrefix}/docs/1.0.0`} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Book className="bg-fd-primary text-fd-primary-foreground p-1 rounded-md" size={20} />
                    <div>
                      <p className="font-medium">Version 1.0.0</p>
                      <p className="text-fd-muted-foreground text-sm">Latest stable release</p>
                    </div>
                  </div>
                </NavbarMenuLink>

                <NavbarMenuLink href={`${langPrefix}/docs/0.1.27`} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ComponentIcon className="bg-fd-muted text-fd-muted-foreground p-1 rounded-md" size={20} />
                    <div>
                      <p className="font-medium">Version 0.1.27</p>
                      <p className="text-fd-muted-foreground text-sm">Previous version</p>
                    </div>
                  </div>
                </NavbarMenuLink>
              </NavbarMenuContent>
            </NavbarMenu>
          ),
        },
        {
          text: 'Contact',
          url: `${langPrefix}/contact`,
        },
        {
          text: 'Demo',
          url: `${langPrefix}/demo`,
        },
        {
          text: 'Help',
          url: `${langPrefix}/help`,
        },
      ]}
      className="dark:bg-neutral-950 dark:[--color-fd-background:var(--color-neutral-950)]"
    >
      {children}
      <Footer lang={lang} />
    </HomeLayout>
  );
}

function Footer({ lang }: { lang: string; }) {
  const langPrefix = lang && lang !== 'en' ? `/${lang}` : '';

  return (
    <footer
      className="mt-auto border-t bg-fd-card py-12 text-fd-secondary-foreground"
      style={
        {
          '--spacing-fd-container': '1120px',
        } as object
      }
    >
      <div className="container flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center mb-2">
            <Image
              src={HispLogo}
              alt="HISP Rwanda Logo"
              width={20}
              height={20}
              className="mr-2"
            />
            <p className="text-sm font-semibold">HISP Rwanda</p>
          </div>
          <p className="text-xs">
            Built with ❤️ by{' '}
            <a
              href="https://hisprwanda.org"
              rel="noreferrer noopener"
              target="_blank"
              className="font-medium hover:underline"
            >
              HISP Rwanda PBF Team
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-2 text-xs sm:flex-row sm:items-center">
          <Link
            href={`${langPrefix}/privacy-policy`}
            className="hover:underline"
          >
            Privacy Policy
          </Link>
          <span className="hidden sm:inline">•</span>
          <Link
            href={`${langPrefix}/terms`}
            className="hover:underline"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
