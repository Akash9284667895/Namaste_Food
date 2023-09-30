import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Footer Column 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Company Name</h2>
            <p className="text-gray-400">© 2023 Bundl Technologies Pvt. Ltd</p>
          </div>

          {/* Footer Column 2 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="list-none">
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Footer Column 3 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-400">123 Main St<br />City, State 12345<br />Email: example@example.com<br />Phone: (123) 456-7890</p>
          </div>

          {/* Footer Column 4 */}
          <div className="mb-8">
  <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
  <div className="flex space-x-4">
    <a href="#" className="text-gray-400 hover:text-white">
      <i className="fa fa-facebook"></i>
    </a>
    <a href="#" className="text-gray-400 hover:text-white">
      <i className="fa fa-twitter"></i>
    </a>
    <a href="#" className="text-gray-400 hover:text-white">
      <i className="fa fa-instagram"></i>
    </a>
    <a href="#" className="text-gray-400 hover:text-white">
      <i className="fa fa-linkedin"></i>
    </a>
  </div>
</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
