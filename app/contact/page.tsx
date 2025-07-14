import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-950 mb-2">Contact Us</h1>
          <p className="text-blue-950">
            We’d love to hear from you! Reach out using the details below.
          </p>
        </div>

        <div className="p-6 bg-blue-50 rounded-xl shadow-sm max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-blue-950">Our Details</h2>
          <div className="flex items-center mb-3 text-blue-950">
            <Mail className="w-5 h-5 mr-2 text-blue-300" />
            <span>blogSummerizer@hotmail.com</span>
          </div>
          <div className="flex items-center mb-3 text-blue-950">
            <Phone className="w-5 h-5 mr-2 text-blue-300" />
            <span>+92 300 1234567</span>
          </div>
          <div className="flex items-center text-blue-950">
            <MapPin className="w-5 h-5 mr-2 text-blue-300" />
            <span>Lahore, Pakistan</span>
          </div>
        </div>
      </div>
    </div>
  );
}
