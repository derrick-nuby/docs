import Link from 'next/link';

interface HomePageProps {
  params: Promise<{ lang: string; }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;

  const content = {
    en: {
      title: 'Hello World',
      description: 'You can open',
      linkText: '/docs',
      suffix: 'and see the documentation.',
    },
    fr: {
      title: 'Bonjour le Monde',
      description: 'Vous pouvez ouvrir',
      linkText: '/docs',
      suffix: 'et voir la documentation.',
    },
  };

  const text = content[lang as keyof typeof content] || content.en;

  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">{text.title}</h1>
      <p className="text-fd-muted-foreground">
        {text.description}{' '}
        <Link
          href={`/${lang}/docs`}
          className="text-fd-foreground font-semibold underline"
        >
          {text.linkText}
        </Link>{' '}
        {text.suffix}
      </p>
    </main>
  );
}
