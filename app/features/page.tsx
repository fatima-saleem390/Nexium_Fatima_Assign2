import { CheckCircle } from 'lucide-react';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-950">Features</h1>
        <p className="text-center text-blue-950 mb-10">
          Explore what makes our Blog Summariser powerful and easy to use.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex items-start space-x-4 bg-blue-50 p-4 rounded-xl shadow-sm">
            <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-1 text-blue-950">Smart Summarisation</h2>
              <p className="text-blue-950">
                Automatically generate summaries from any blog URL with static logic.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 bg-blue-50 p-4 rounded-xl shadow-sm">
            <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-1 text-blue-950">Urdu Translation</h2>
              <p className="text-blue-950">
                Instantly translate summaries to Urdu using our built-in dictionary.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 bg-blue-50 p-4 rounded-xl shadow-sm">
            <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-1 text-blue-950">Save to Cloud</h2>
              <p className="text-blue-950">
                Save full text in MongoDB and summaries in Supabase with ease.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 bg-blue-50 p-4 rounded-xl shadow-sm">
            <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-1 text-blue-950">Modern UI</h2>
              <p className="text-blue-950">
                Clean, responsive, and beautiful UI built with ShadCN and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
