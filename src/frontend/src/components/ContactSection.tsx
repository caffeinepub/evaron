import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useActor } from '@/hooks/useActor';
import { useMutation } from '@tanstack/react-query';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactSection() {
  const { actor } = useActor();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const submitMutation = useMutation({
    mutationFn: async (data: { name: string; phone: string; email: string; message: string }) => {
      if (!actor) throw new Error('Backend not available');
      await actor.submitContactForm(data.name, data.phone, data.email, data.message);
    },
    onSuccess: () => {
      toast.success('Message sent successfully!', {
        description: 'We will get back to you as soon as possible.',
      });
      setFormData({ name: '', phone: '', email: '', message: '' });
    },
    onError: (error: Error) => {
      toast.error('Failed to send message', {
        description: error.message || 'Please try again later.',
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('All fields are required', {
        description: 'Please fill in all fields before submitting.',
      });
      return;
    }

    submitMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-black">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Get in <span className="text-brand-green">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-brand-green mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-bold">
            Ready to power your future? Contact us today to discuss your battery needs
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-black text-white mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-green flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Phone</h4>
                    <a 
                      href="tel:+919296174465" 
                      className="text-2xl font-black text-brand-green hover:text-brand-green-dark transition-colors"
                    >
                      +91 9296174465
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-green flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Email</h4>
                    <a 
                      href="mailto:infoevronindia@gmail.com" 
                      className="text-lg text-brand-green hover:text-brand-green-dark transition-colors break-all"
                    >
                      infoevronindia@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-green flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Location</h4>
                    <p className="text-gray-300 font-medium">Jharkhand, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-black font-bold text-base mb-2 block">
                  Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="rounded-none border-2 border-gray-300 focus:border-brand-green h-12"
                  required
                  disabled={submitMutation.isPending}
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-black font-bold text-base mb-2 block">
                  Phone *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="rounded-none border-2 border-gray-300 focus:border-brand-green h-12"
                  required
                  disabled={submitMutation.isPending}
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-black font-bold text-base mb-2 block">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="rounded-none border-2 border-gray-300 focus:border-brand-green h-12"
                  required
                  disabled={submitMutation.isPending}
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-black font-bold text-base mb-2 block">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  className="rounded-none border-2 border-gray-300 focus:border-brand-green min-h-[150px]"
                  required
                  disabled={submitMutation.isPending}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-brand-green hover:bg-brand-green-dark text-white font-black text-lg py-6 h-auto rounded-none"
                disabled={submitMutation.isPending}
              >
                {submitMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
