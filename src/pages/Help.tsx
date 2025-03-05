import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function Help() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Help & Support</h2>
        <p className="text-muted-foreground">
          Get help with your account and find answers to common questions
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Contact Support</CardTitle>
            <CardDescription>
              Send a message to our support team
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="What can we help you with?" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Please describe your issue in detail..."
                className="min-h-32"
              />
            </div>
          </CardContent>
          <CardFooter className="justify-end">
            <Button>Submit Request</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>
              Find answers to common questions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How do I update my company profile?
                </AccordionTrigger>
                <AccordionContent>
                  You can update your company profile by navigating to the
                  "Company Profile" section in the sidebar. There you can edit
                  all your company information including name, contact details,
                  address, and business description.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How do I add new products or services?
                </AccordionTrigger>
                <AccordionContent>
                  To add new products or services, go to the respective section
                  in the sidebar (Products or Services) and click the "Add"
                  button. Fill in the required information and save your changes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  How are customer leads generated?
                </AccordionTrigger>
                <AccordionContent>
                  Customer leads are generated when visitors to your profile
                  express interest in your products or services. This can happen
                  through contact form submissions, direct inquiries, or when
                  they request more information about specific offerings.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Can I export my business data?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, you can export your business data in various formats from
                  the Reports section. Available exports include customer lists,
                  sales data, product catalogs, and performance analytics.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  How do I change my subscription plan?
                </AccordionTrigger>
                <AccordionContent>
                  You can change your subscription plan in the Settings section
                  under "Subscription Plan." Click on "Change Plan" to view
                  available options and upgrade or downgrade as needed.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Resources</CardTitle>
          <CardDescription>
            Helpful guides and documentation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium">Getting Started Guide</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Learn the basics of setting up your business profile
              </p>
              <Button variant="link" className="mt-2 p-0">
                View Guide
              </Button>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium">Marketing Best Practices</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Tips to maximize your profile visibility
              </p>
              <Button variant="link" className="mt-2 p-0">
                View Guide
              </Button>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium">API Documentation</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Technical documentation for developers
              </p>
              <Button variant="link" className="mt-2 p-0">
                View Docs
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}