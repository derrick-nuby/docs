import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Help & Support',
  description: 'Find answers to common questions and get support',
};

export default function HelpPage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-4xl font-bold mb-6">Help & Support</h1>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-lg text-fd-muted-foreground mb-8">
          Find answers to common questions and get the support you need.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="border rounded-lg p-4">
                <summary className="font-medium cursor-pointer">How do I get started with the platform?</summary>
                <p className="mt-2 text-fd-muted-foreground">
                  Check out our getting started guide in the documentation section. It covers installation, setup, and basic configuration.
                </p>
              </details>

              <details className="border rounded-lg p-4">
                <summary className="font-medium cursor-pointer">What are the system requirements?</summary>
                <p className="mt-2 text-fd-muted-foreground">
                  Our platform works on modern web browsers and mobile devices. Specific requirements are detailed in our technical documentation.
                </p>
              </details>

              <details className="border rounded-lg p-4">
                <summary className="font-medium cursor-pointer">How do I report a bug or issue?</summary>
                <p className="mt-2 text-fd-muted-foreground">
                  You can report issues through our GitHub repository or contact our support team directly via email.
                </p>
              </details>

              <details className="border rounded-lg p-4">
                <summary className="font-medium cursor-pointer">Is training available?</summary>
                <p className="mt-2 text-fd-muted-foreground">
                  Yes, we offer comprehensive training sessions for new users. Contact us to schedule a training session for your team.
                </p>
              </details>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Additional Resources</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="border rounded-lg p-6">
                <h3 className="font-semibold mb-2">Documentation</h3>
                <p className="text-fd-muted-foreground mb-4">Comprehensive guides and API references</p>
                <Link href="/docs" className="text-fd-primary hover:underline">Browse Documentation →</Link>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="font-semibold mb-2">Contact Support</h3>
                <p className="text-fd-muted-foreground mb-4">Get direct help from our support team</p>
                <Link href="/contact" className="text-fd-primary hover:underline">Contact Us →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
