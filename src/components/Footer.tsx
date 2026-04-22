const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-900 font-bold text-xl mb-4">
          Niaina<span className="text-blue-600">.</span>
        </p>
        <p className="text-gray-500 text-sm mb-6">
          © {new Date().getFullYear()} Niaina. Tous droits réservés.
        </p>
        <div className="flex justify-center gap-6">
          <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">GitHub</a>
          <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
