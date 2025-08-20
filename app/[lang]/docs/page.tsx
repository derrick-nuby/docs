import React from 'react';
import Link from 'next/link';

export default function page({ params }: { params: { lang: string; }; }) {
  const versions = ['v1.0', 'v2.0', 'v3.0'];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Choose Documentation Version</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {versions.map((version) => (
          <Link
            key={version}
            href={`/${params.lang}/docs/${version}`}
            className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">{version}</h2>
            <p className="text-gray-600">Access documentation for {version}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
