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
    email: '',
    message: '',
  });

  const submitMutation = useMutation({
    mutationFn: async (data: { name: string; email: string; message: string }) => {
      if (!actor) throw new Error('Backend not available');
      await actor.submitContactForm(data.name, data.email, data.message);
    },
    onSuccess: () => {
      toast.success('Message sent successfully!', {
        description: 'We will get back to you as soon as possible.',
      });
      setFormData({ name: '', email: '', message: '' });
    },
    onError: (error: Error) => {
      toast.error('Failed to send message', {
        description: error.message || 'Please try again later.',
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
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
            Get in <span className="text-brand-orange">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                  <div className="w-12 h-12 bg-brand-orange flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Email</h4>
                    <p className="text-gray-300">info@evaron.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-orange flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Phone</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-orange flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Location</h4>
                    <p className="text-gray-300">Global Battery Solutions</p>
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
                  className="rounded-none border-2 border-gray-300 focus:border-brand-orange h-12"
                  required
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
                  className="rounded-none border-2 border-gray-300 focus:border-brand-orange h-12"
                  required
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
                  placeholder="Tell us about your battery needs..."
                  className="rounded-none border-2 border-gray-300 focus:border-brand-orange min-h-[150px] resize-none"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={submitMutation.isPending}
                className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-lg py-6 h-auto rounded-none"
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
