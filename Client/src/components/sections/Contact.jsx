import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser"

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form=useRef();

  const handleSubmit=(e)=>{
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lofo1c4",
        "template_wamzpft",
        form.current,
        "2vqR4H5itjxElQNP0"

      )
      .then(()=>{
        alert("Enquiry Form Submited Succesfully");
        form.current.reset();
      },
      (error)=>{
        alert("Failed "+error.text);
      }
    );
  }



  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   // Simulate API call
  //   setTimeout(() => {
  //       setIsSubmitting(false);
  //       alert("Message sent successfully!");
  //   }, 1500);
  // };

  const whatsappNumber = "917099414274";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

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
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-start space-x-4 group"
                aria-label="Chat on WhatsApp"
              >
                <div className="bg-gray-800 p-3 rounded-lg text-green-400 group-hover:text-green-300 transition-colors">
                  <svg
                    viewBox="0 0 32 32"
                    className="h-6 w-6"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M19.11 17.13c-.28-.14-1.64-.81-1.89-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.09-.16.18-.32.2-.6.07-.28-.14-1.16-.43-2.2-1.36-.81-.72-1.36-1.6-1.52-1.88-.16-.28-.02-.43.12-.57.12-.12.28-.32.41-.48.14-.16.18-.28.27-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.28-.95.93-.95 2.27 0 1.34.98 2.63 1.12 2.81.14.18 1.93 2.95 4.68 4.14.66.28 1.17.45 1.57.57.66.21 1.27.18 1.74.11.53-.08 1.64-.67 1.88-1.31.23-.64.23-1.19.16-1.31-.07-.12-.25-.2-.52-.34ZM16 4C9.38 4 4 9.38 4 16c0 2.11.55 4.1 1.52 5.83L4 28l6.34-1.67A11.93 11.93 0 0 0 16 28c6.62 0 12-5.38 12-12S22.62 4 16 4Zm0 21.5c-2.01 0-3.88-.55-5.48-1.5l-.39-.23-3.76.99.99-3.66-.25-.4A9.47 9.47 0 0 1 6.5 16C6.5 10.76 10.76 6.5 16 6.5S25.5 10.76 25.5 16 21.24 25.5 16 25.5Z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-lg">WhatsApp</div>
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    Chat on WhatsApp
                  </span>
                </div>
              </a>
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
            <form ref={form} className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-1 text-gray-600">First Name</label>
                    <input required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="chandan" name="name"/>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1 text-gray-600">Last Name</label>
                    <input required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="Boruah" name="name" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-600">Email Address</label>
                <input required type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="xyz@example.com" name="email" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-600">Message</label>
                <textarea required rows="4" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none" placeholder="Tell us about your project needs..." name="message"></textarea>
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
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <svg
                viewBox="0 0 32 32"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M19.11 17.13c-.28-.14-1.64-.81-1.89-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.09-.16.18-.32.2-.6.07-.28-.14-1.16-.43-2.2-1.36-.81-.72-1.36-1.6-1.52-1.88-.16-.28-.02-.43.12-.57.12-.12.28-.32.41-.48.14-.16.18-.28.27-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.28-.95.93-.95 2.27 0 1.34.98 2.63 1.12 2.81.14.18 1.93 2.95 4.68 4.14.66.28 1.17.45 1.57.57.66.21 1.27.18 1.74.11.53-.08 1.64-.67 1.88-1.31.23-.64.23-1.19.16-1.31-.07-.12-.25-.2-.52-.34ZM16 4C9.38 4 4 9.38 4 16c0 2.11.55 4.1 1.52 5.83L4 28l6.34-1.67A11.93 11.93 0 0 0 16 28c6.62 0 12-5.38 12-12S22.62 4 16 4Zm0 21.5c-2.01 0-3.88-.55-5.48-1.5l-.39-.23-3.76.99.99-3.66-.25-.4A9.47 9.47 0 0 1 6.5 16C6.5 10.76 10.76 6.5 16 6.5S25.5 10.76 25.5 16 21.24 25.5 16 25.5Z" />
              </svg>
            </a>
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
