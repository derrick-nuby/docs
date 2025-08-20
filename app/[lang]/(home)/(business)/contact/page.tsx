import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the HISP Rwanda team',
};

export default function ContactPage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-lg text-fd-muted-foreground mb-8">
          Have questions or need support? We&apos;re here to help!
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-fd-muted-foreground">info@hisprwanda.org</p>
            </div>
            <div>
              <h3 className="font-medium">Phone</h3>
              <p className="text-fd-muted-foreground">+250 XXX XXX XXX</p>
            </div>
            <div>
              <h3 className="font-medium">Address</h3>
              <p className="text-fd-muted-foreground">
                Kigali, Rwanda
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Office Hours</h2>
            <div>
              <h3 className="font-medium">Monday - Friday</h3>
              <p className="text-fd-muted-foreground">8:00 AM - 5:00 PM (CAT)</p>
            </div>
            <div>
              <h3 className="font-medium">Saturday</h3>
              <p className="text-fd-muted-foreground">9:00 AM - 1:00 PM (CAT)</p>
            </div>
            <div>
              <h3 className="font-medium">Sunday</h3>
              <p className="text-fd-muted-foreground">Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
