'use client';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 border-t shadow-inner mt-12">
      <div className="max-w-6xl mx-auto p-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Blog Summariser. All rights reserved.
      </div>
    </footer>
  );
}
