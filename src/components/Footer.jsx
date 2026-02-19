function Footer() {
  return (
    <footer className="w-full mt-24 bg-gray-900 text-white px-12 py-16 relative z-10">
      
      {/* Main Info */}
      <div className="flex justify-between mb-12 flex-wrap">
        
        {/* Address Left */}
        <div className="text-left flex-1 mb-8 md:mb-0">
          <h2 className="font-bold text-3xl mb-4">Address</h2>
          <p className="text-xl">500 Terry Francine Street</p>
          <p className="text-xl">San Francisco, CA 94158</p>
        </div>

        {/* Opening Hours Center */}
        <div className="text-center flex-1 mb-8 md:mb-0">
          <h2 className="font-bold text-3xl mb-4">Opening Hours</h2>
          <p className="text-xl">Mon - Fri: 11am - 10pm</p>
          <p className="text-xl">Sat - Sun: 11am - 12am</p>
        </div>

        {/* Contact Right */}
        <div className="text-right flex-1">
          <h2 className="font-bold text-3xl mb-4">Contact Us</h2>
          <p className="text-xl">info@mysite.com</p>
          <p className="text-xl">123 456 6780</p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;
