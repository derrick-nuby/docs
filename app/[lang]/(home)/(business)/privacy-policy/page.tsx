import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'HISP Rwanda Privacy Policy',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-sm text-fd-muted-foreground mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              HISP Rwanda (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <h3 className="text-lg font-medium mb-2">Personal Information</h3>
            <p>
              We may collect personal information that you voluntarily provide, including but not limited to:
            </p>
            <ul>
              <li>Name and contact information</li>
              <li>Professional credentials and organizational affiliation</li>
              <li>Account credentials</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-lg font-medium mb-2 mt-4">Usage Information</h3>
            <p>
              We automatically collect certain information about how you use our platform, including:
            </p>
            <ul>
              <li>Device and browser information</li>
              <li>IP address and location data</li>
              <li>Usage patterns and preferences</li>
              <li>Performance and diagnostic information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p>We use the collected information for:</p>
            <ul>
              <li>Providing and improving our services</li>
              <li>User authentication and account management</li>
              <li>Technical support and customer service</li>
              <li>Security and fraud prevention</li>
              <li>Analytics and platform optimization</li>
              <li>Communications about updates and services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <ul>
              <li>Email: privacy@hisprwanda.org</li>
              <li>Address: Kigali, Rwanda</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
