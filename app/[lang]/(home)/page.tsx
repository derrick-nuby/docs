import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CheckCircle, Database, Shield, Globe, TrendingUp, Users, Phone, Mail } from "lucide-react";
import "./../../index.css";


export default function HomePage() {
  const features = [
    {
      icon: <Database className="h-8 w-8" />,
      title: "Health Facility Data Entry",
      description: "Streamlined digital data collection from health facilities",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Quality Score Assessment",
      description: "Automated quality verification and scoring systems",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Payment Calculations",
      description: "Automated, transparent payment processing",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Audit-Ready Records",
      description: "Complete traceability and compliance reporting",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Multi-Country Support",
      description: "Scalable across regions with local customization",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Stakeholder Management",
      description: "Unified platform for all program participants",
    },
  ];

  const impactStats = [
    { number: "100K+", label: "Health Records Tracked Monthly" },
    { number: "500+", label: "Facilities Onboarded" },
    { number: "100%", label: "Digital Payment Traceability" },
    { number: "15+", label: "Countries Ready for Deployment" },
  ];

  const testimonials = [
    {
      quote:
        "The PBF App has transformed how we manage health facility payments — we now have real-time visibility and trust in our numbers.",
      author: "Dr. Sarah Johnson",
      title: "Director of Health Programs",
      organization: "Global Health Initiative",
    },
    {
      quote:
        "Finally, a platform that understands the complexity of performance-based financing while keeping it simple for field workers.",
      author: "Michael Chen",
      title: "Program Manager",
      organization: "World Health Partners",
    },
    {
      quote: "The transparency and accountability features have revolutionized our funding disbursement process.",
      author: "Dr. Amara Okafor",
      title: "Ministry of Health",
      organization: "Republic of Ghana",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Next-Generation Health Financing
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  Powering Performance-Based Financing for Stronger Health Systems
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  A digital platform that transforms how health data is collected, verified, and funded — tailored for
                  low and middle-income countries.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Learn How It Works
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                  Partner with Us
                </Button>
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Request a Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <Card className="p-8 border-2">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Database className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Real-time Data Collection</h3>
                      <p className="text-sm text-muted-foreground">Live facility performance tracking</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Transparent Payments</h3>
                      <p className="text-sm text-muted-foreground">Automated, audit-ready disbursements</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Global Scale</h3>
                      <p className="text-sm text-muted-foreground">Multi-country deployment ready</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What is PBF Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">What Is the PBF App?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The PBF App is a robust, modular digital platform designed to support Performance-Based Financing in
                health systems. It digitizes every aspect of PBF — from data entry and quality score verification to
                payment calculation and reporting.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We serve as the digital backbone for ministries of health, donor organizations, and partners committed
                to improving primary health care delivery through performance-linked investments.
              </p>
            </div>
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  Key Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Transparency and accountability in real-time</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Automated payment calculations and disbursements</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Comprehensive reporting and analytics</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Multi-language and multi-country support</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Why Invest in PBF?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Health systems worldwide face critical challenges. The PBF App provides comprehensive solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-destructive" />
                </div>
                <h3 className="font-semibold mb-2">Performance Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  Difficulty tracking service delivery performance across facilities
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-destructive" />
                </div>
                <h3 className="font-semibold mb-2">Data Verification</h3>
                <p className="text-sm text-muted-foreground">
                  Ensuring accurate, verifiable data collection and reporting
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-destructive" />
                </div>
                <h3 className="font-semibold mb-2">Fund Disbursement</h3>
                <p className="text-sm text-muted-foreground">
                  Disbursing funds transparently and on time to health facilities
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-destructive" />
                </div>
                <h3 className="font-semibold mb-2">Impact Demonstration</h3>
                <p className="text-sm text-muted-foreground">
                  Demonstrating measurable impact to stakeholders and funders
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Card className="inline-block p-8 bg-primary/5 border-primary/20">
              <CardContent className="pt-0">
                <h3 className="text-2xl font-bold text-primary mb-4">The PBF App Solves All These Problems</h3>
                <p className="text-lg">Real-time solutions across thousands of facilities with audit-ready records</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">A Platform That Covers the Entire PBF Lifecycle</h2>
            <p className="text-xl text-muted-foreground">
              From data collection to payment disbursement, PBF App covers it all
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scale and Adaptability Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">Built for National Programs and Donor Flexibility</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're a country government piloting PBF in a few districts or a donor agency funding
                results-based health initiatives across regions — our platform adapts to your scale.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Custom Rules</h4>
                    <p className="text-sm text-muted-foreground">Per country or program configuration</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Multi-tenant Architecture</h4>
                    <p className="text-sm text-muted-foreground">Cross-country deployments</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Security & Audit</h4>
                    <p className="text-sm text-muted-foreground">Built-in authentication & logging</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Offline-First</h4>
                    <p className="text-sm text-muted-foreground">Field data entry capabilities</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle>Integration Ready</CardTitle>
                <CardDescription>Seamlessly connects with existing health information systems</CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <span className="font-medium">DHIS2 Integration</span>
                    <Badge variant="secondary">Available</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <span className="font-medium">Custom APIs</span>
                    <Badge variant="secondary">Supported</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <span className="font-medium">Mobile Apps</span>
                    <Badge variant="secondary">iOS & Android</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <span className="font-medium">Cloud Deployment</span>
                    <Badge variant="secondary">Multi-region</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Proven in the Field</h2>
            <p className="text-xl text-muted-foreground">
              PBF App is already deployed in live health programs with measurable results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center p-8">
                <CardContent className="pt-6">
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Card className="inline-block p-6 bg-primary text-primary-foreground">
              <CardContent className="pt-0">
                <p className="text-lg font-medium">Trusted by ministries, NGOs & development partners worldwide</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">What Our Partners Say</h2>
            <p className="text-xl text-muted-foreground">
              Hear from health leaders who are transforming their systems with PBF App
            </p>
          </div>
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="p-8 text-center">
                    <CardContent className="pt-6">
                      <blockquote className="text-xl italic mb-6 text-muted-foreground">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="space-y-2">
                        <p className="font-semibold text-lg">{testimonial.author}</p>
                        <p className="text-muted-foreground">{testimonial.title}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.organization}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Who We're Looking For */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Join Us In Scaling Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are seeking visionary partners, funders, and governments who believe in data-driven healthcare delivery
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Better Patient Outcomes</h3>
                <p className="text-sm text-muted-foreground">
                  Improved healthcare delivery through performance incentives
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Faster Disbursements</h3>
                <p className="text-sm text-muted-foreground">
                  Automated, fair payment processing for health facilities
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Real Accountability</h3>
                <p className="text-sm text-muted-foreground">
                  Complete transparency at every level of the health system
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Evidence-Based Policy</h3>
                <p className="text-sm text-muted-foreground">Data-driven insights for informed decision making</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Let's Build Stronger Health Systems Together</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're ready to scale. Are you ready to join us? Let's discuss how we can tailor the PBF App to your
              country, your program, or your funding initiative.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Schedule a Call</h3>
                <p className="text-muted-foreground mb-6">
                  Book a personalized demo and discuss your specific PBF implementation needs
                </p>
                <Button size="lg" className="w-full">
                  Book Demo Call
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <p className="text-muted-foreground mb-6">
                  Send us your questions and requirements. We'll respond within 24 hours
                </p>
                <Button size="lg" variant="outline" className="w-full bg-transparent">
                  <a href="/contact" className="w-full">
                    Contact Us
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Become a Partner</h3>
                <p className="text-muted-foreground mb-6">
                  Join our network of health organizations transforming healthcare delivery
                </p>
                <Button size="lg" variant="secondary" className="w-full">
                  Partnership Info
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="inline-block p-8 bg-primary text-primary-foreground">
              <CardContent className="pt-0">
                <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span>Secure & Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Database className="h-4 w-4" />
                    <span>Data-driven Insights</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span>Globally Scalable</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
