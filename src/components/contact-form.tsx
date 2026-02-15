"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ContactForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Request a Quote</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          action="https://formsubmit.co/info@le-rentals.com"
          method="POST"
          className="space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                Name
              </label>
              <Input id="name" name="name" required placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                Phone
              </label>
              <Input id="phone" name="phone" type="tel" placeholder="Your phone number" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
              Email
            </label>
            <Input id="email" name="email" type="email" required placeholder="your@email.com" />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Tell us about your rental needs..."
            />
          </div>
          <Button type="submit" className="w-full bg-brand-blue text-white hover:bg-brand-blue/90">
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
