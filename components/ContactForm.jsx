'use client'

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

function ContactForm() {
  const [state, handleSubmit] = useForm("xgovwqll");
  if (state.succeeded) {
    return (
      <Card className="p-8">
        <p className="text-center text-lg">Thanks for your message! I'll get back to you soon.</p>
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground mb-2">Or email me directly at</p>
          <a href="mailto:fatimaezzahra.legchayri@gmail.com" className="text-lg font-semibold hover:underline">
            fatimaezzahra.legchayri@gmail.com
          </a>
        </div>
      </Card>
    );
  }
  return (
    <Card className="p-8">
      <form onSubmit={handleSubmit} className="space-y-6" id='contact-form'>
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <Input id="name" name="name" placeholder="Your name" required />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input id="email" type="email" name="email" placeholder="your@email.com" required />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            Project Details
          </label>
          <Textarea id="message" name="message" placeholder="Tell me about your project..." rows={5} required />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>
        <Button className="w-full" size="lg" type="submit" disabled={state.submitting}>
          {state.submitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
      <div className="mt-8 pt-8 border-t text-center">
        <p className="text-sm text-muted-foreground mb-2">Or email me directly at</p>
        <a href="mailto:fatimaezzahra.legchayri@gmail.com" className="text-lg font-semibold hover:underline">
          fatimaezzahra.legchayri@gmail.com
        </a>
      </div>
    </Card>
  );
}

export default ContactForm;