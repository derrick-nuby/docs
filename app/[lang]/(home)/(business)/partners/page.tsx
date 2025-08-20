import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partners',
  description: 'Our network of partners and collaborators',
};

export default function PartnersPage() {
  return (
    <div className="container max-w-6xl py-12">
      <h1 className="text-4xl font-bold mb-6">Partners</h1>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-lg text-fd-muted-foreground mb-8">
          We work with leading organizations to deliver innovative health information solutions.
        </p>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Strategic Partners</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="border rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-fd-muted rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold">UiO</span>
                </div>
                <h3 className="font-semibold mb-2">University of Oslo</h3>
                <p className="text-fd-muted-foreground text-sm">
                  Leading research and development in health information systems
                </p>
              </div>

              <div className="border rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-fd-muted rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold">WHO</span>
                </div>
                <h3 className="font-semibold mb-2">World Health Organization</h3>
                <p className="text-fd-muted-foreground text-sm">
                  Global health leadership and technical expertise
                </p>
              </div>

              <div className="border rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-fd-muted rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold">MOH</span>
                </div>
                <h3 className="font-semibold mb-2">Ministry of Health Rwanda</h3>
                <p className="text-fd-muted-foreground text-sm">
                  National health policy and implementation leadership
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Implementation Partners</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="border rounded-lg p-6">
                <h3 className="font-semibold mb-2">Local Health Organizations</h3>
                <p className="text-fd-muted-foreground">
                  Working directly with healthcare providers to implement and maintain health information systems.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="font-semibold mb-2">Technology Partners</h3>
                <p className="text-fd-muted-foreground">
                  Collaborating with technology companies to ensure robust, scalable solutions.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Become a Partner</h2>
            <div className="border rounded-lg p-8 bg-fd-muted/20">
              <p className="text-fd-muted-foreground mb-6">
                Interested in partnering with HISP Rwanda? We&apos;re always looking for organizations that share our vision of improving health through technology.
              </p>
              <div className="space-y-4">
                <h3 className="font-semibold">Partnership Opportunities:</h3>
                <ul className="space-y-2 text-fd-muted-foreground">
                  <li>• Technical collaboration and development</li>
                  <li>• Implementation and deployment support</li>
                  <li>• Training and capacity building</li>
                  <li>• Research and innovation</li>
                </ul>
              </div>
              <button className="mt-6 px-6 py-3 bg-fd-primary text-fd-primary-foreground rounded-md hover:bg-fd-primary/90">
                Contact Us About Partnership
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
