import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Loader2 } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
        setIsSubmitting(false);
        alert("Message sent successfully!");
    }, 1500);
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-4xl font-bold mb-6">Let's talk about your project</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Ready to take the next step? Fill out the form or reach out to us directly. We usually respond within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-800 p-3 rounded-lg text-blue-400">
                    <Mail size={24} />
                </div>
                <div>
                  <div className="font-semibold text-lg">Email</div>
                  <div className="text-gray-400">technologiesofsubansiri@gmail.com</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-gray-800 p-3 rounded-lg text-blue-400">
                    <Phone size={24} />
                </div>
                <div>
                  <div className="font-semibold text-lg">Phone</div>
                  <div className="text-gray-400">+91 7099414274</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-gray-800 p-3 rounded-lg text-blue-400">
                    <MapPin size={24} />
                </div>
                <div>
                  <div className="font-semibold text-lg">Office</div>
                  <div className="text-gray-400">North Lakhimpur, Assam, India</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-gray-900 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-1 text-gray-600">First Name</label>
                    <input required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="chandan" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1 text-gray-600">Last Name</label>
                    <input required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="Boruah" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-600">Email Address</label>
                <input required type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="xyz@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-600">Message</label>
                <textarea required rows="4" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none" placeholder="Tell us about your project needs..."></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gray-700 text-white px-6 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 animate-spin" size={20} />
                        Sending...
                    </>
                ) : (
                    'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-gray-400 to-gray-400 bg-clip-text text-transparent">
            Subansiri Technology
          </div>
          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Subansiri Technology Inc. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
