import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo',
  description: 'Interactive demonstrations of our platform',
};

export default function DemoPage() {
  return (
    <div className="container max-w-6xl py-12">
      <h1 className="text-4xl font-bold mb-6">Demo</h1>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-lg text-fd-muted-foreground mb-8">
          Explore our platform features through interactive demonstrations.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="border rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold">Data Management</h2>
            <p className="text-fd-muted-foreground">
              See how our platform handles data collection, validation, and reporting.
            </p>
            <button className="px-4 py-2 bg-fd-primary text-fd-primary-foreground rounded-md hover:bg-fd-primary/90">
              Launch Demo
            </button>
          </div>

          <div className="border rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold">Analytics Dashboard</h2>
            <p className="text-fd-muted-foreground">
              Explore our comprehensive analytics and visualization tools.
            </p>
            <button className="px-4 py-2 bg-fd-primary text-fd-primary-foreground rounded-md hover:bg-fd-primary/90">
              Launch Demo
            </button>
          </div>

          <div className="border rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold">Mobile Application</h2>
            <p className="text-fd-muted-foreground">
              Test our mobile data collection interface and offline capabilities.
            </p>
            <button className="px-4 py-2 bg-fd-primary text-fd-primary-foreground rounded-md hover:bg-fd-primary/90">
              Launch Demo
            </button>
          </div>
        </div>

        <div className="mt-12 p-6 bg-fd-muted/50 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Request a Personalized Demo</h2>
          <p className="text-fd-muted-foreground mb-4">
            Want to see how our platform can work specifically for your organization?
          </p>
          <button className="px-6 py-3 bg-fd-primary text-fd-primary-foreground rounded-md hover:bg-fd-primary/90">
            Schedule a Demo
          </button>
        </div>
      </div>
    </div>
  );
}
