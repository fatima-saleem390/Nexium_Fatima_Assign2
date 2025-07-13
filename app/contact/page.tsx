import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">Contact Us</h1>
        <p className="text-gray-600">
          We’d love to hear from you! Reach out using the details below.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-blue-50 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Our Details</h2>
          <div className="flex items-center mb-3">
            <Mail className="w-5 h-5 mr-2 text-blue-600" />
            <span>hello@example.com</span>
          </div>
          <div className="flex items-center mb-3">
            <Phone className="w-5 h-5 mr-2 text-blue-600" />
            <span>+92 300 1234567</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-blue-600" />
            <span>Lahore, Pakistan</span>
          </div>
        </div>

        <div className="p-6 bg-blue-50 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Send a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-2 border rounded"
            ></textarea>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
