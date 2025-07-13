import { Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Users className="w-12 h-12 mx-auto text-blue-950 mb-4" />
          <h1 className="text-4xl font-bold mb-2 text-blue-950">About Us</h1>
          <p className="text-blue-950 mb-8">
            Learn more about our project, our mission, and the people behind it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-blue-50 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-2 text-blue-950">Our Mission</h2>
            <p className="text-blue-950">
              We aim to make blog reading easier by providing quick summaries
              and Urdu translations, helping people save time and read in their preferred language.
            </p>
          </div>

          <div className="p-6 bg-blue-50 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-2 text-blue-950">Our Team</h2>
            <p className="text-blue-950">
              We are a passionate team of developers and designers working together
              to build accessible, open-source tools for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
