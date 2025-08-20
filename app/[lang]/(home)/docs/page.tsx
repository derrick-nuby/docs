import { Building2, LibraryIcon } from 'lucide-react';
import Link, { type LinkProps } from 'next/link';

interface DocsPageProps {
  params: Promise<{ lang: string; }>;
}

export default async function DocsPage({ params }: DocsPageProps) {
  const { lang } = await params;

  const content = {
    en: {
      version100Title: 'Version 1.0.0',
      version100Description: 'Latest stable version with all the newest features.',
      version027Title: 'Version 0.1.27',
      version027Description: 'Previous version for compatibility and reference.',
    },
    fr: {
      version100Title: 'Version 1.0.0',
      version100Description: 'Version stable la plus récente avec toutes les nouvelles fonctionnalités.',
      version027Title: 'Version 0.1.27',
      version027Description: 'Version précédente pour la compatibilité et la référence.',
    },
  };

  const text = content[lang as keyof typeof content] || content.en;

  return (
    <main className="container flex flex-col items-center justify-center text-center z-2 h-[80vh] pt-24">
      <div className="absolute inset-0 z-[-1] overflow-hidden duration-1000 animate-in fade-in [perspective:2000px]">
        {/* Top grid */}
        <div
          className="absolute top-[20%] left-1/2 size-[1200px] origin-top bg-fd-primary/30 opacity-30"
          style={{
            transform: 'rotateX(-75deg) translate(-50%, -400px)',
            backgroundImage:
              'radial-gradient(50% 50% at center,transparent,var(--color-fd-background)), repeating-linear-gradient(to right,var(--color-fd-primary),var(--color-fd-primary) 1px,transparent 2px,transparent 100px), repeating-linear-gradient(to bottom,var(--color-fd-primary),var(--color-fd-primary) 2px,transparent 3px,transparent 100px)',
          }}
        />
        {/* Bottom grid */}
        <div
          className="absolute bottom-[20%] left-1/2 size-[1200px] origin-bottom bg-fd-primary/30 opacity-30"
          style={{
            transform: 'rotateX(75deg) translate(-50%, 400px)',
            backgroundImage:
              'radial-gradient(50% 50% at center,transparent,var(--color-fd-background)), repeating-linear-gradient(to right,var(--color-fd-primary),var(--color-fd-primary) 1px,transparent 2px,transparent 100px), repeating-linear-gradient(to bottom,var(--color-fd-primary),var(--color-fd-primary) 2px,transparent 3px,transparent 100px)',
          }}
        />
      </div>
      <div className="flex justify-center items-center min-h-full">
        <div className="grid grid-cols-1 gap-6 text-left md:grid-cols-2 max-w-4xl">
          <Item href="/docs/1.0.0">
            <Icon>
              <Building2 className="size-full" />
            </Icon>
            <h2 className="mb-2 text-lg font-semibold">{text.version100Title}</h2>
            <p className="text-sm text-fd-muted-foreground">
              {text.version100Description}
            </p>
          </Item>
          <Item href="/docs/0.1.27">
            <Icon>
              <LibraryIcon className="size-full" />
            </Icon>
            <h2 className="mb-2 text-lg font-semibold">{text.version027Title}</h2>
            <p className="text-sm text-fd-muted-foreground">
              {text.version027Description}
            </p>
          </Item>
        </div>
      </div>
    </main>
  );
}

function Icon({ children }: { children: React.ReactNode; }): React.ReactElement {
  return (
    <div
      className="mb-2 size-9 rounded-lg border p-1.5 shadow-fd-primary/30"
      style={{
        boxShadow: 'inset 0px 8px 8px 0px var(--tw-shadow-color)',
      }}
    >
      {children}
    </div>
  );
}

function Item(
  props: LinkProps & { children: React.ReactNode; },
): React.ReactElement {
  return (
    <Link
      {...props}
      className="rounded-2xl border border-transparent p-6 shadow-lg"
      style={{
        backgroundImage:
          'linear-gradient(to right bottom, var(--color-fd-background) 10%, var(--color-fd-accent), var(--color-fd-background) 60%),' +
          'linear-gradient(to right bottom, rgb(40,40,40) 10%, rgb(180,180,180), rgb(30,30,30) 60%)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
      }}
    >
      {props.children}
    </Link>
  );
}