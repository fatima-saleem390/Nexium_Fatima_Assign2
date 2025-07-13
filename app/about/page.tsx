import { Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center">
        <Users className="w-12 h-12 mx-auto text-blue-600 mb-4" />
        <h1 className="text-4xl font-bold mb-2 text-blue-700">About Us</h1>
        <p className="text-gray-600 mb-8">
          Learn more about our project, our mission, and the people behind it.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-blue-50 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-700">
            We aim to make blog reading easier by providing quick summaries
            and Urdu translations, helping people save time and read in their preferred language.
          </p>
        </div>

        <div className="p-6 bg-blue-50 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Our Team</h2>
          <p className="text-gray-700">
            We are a passionate team of developers and designers working together
            to build accessible, open-source tools for everyone.
          </p>
        </div>
      </div>
    </div>
  );
}
