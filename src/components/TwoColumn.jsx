function TwoColumn() {
  return (
    <section className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-stretch min-h-screen w-full">

        {/* Left Content */}
        <div className="md:w-1/2 flex flex-col justify-center items-center text-center space-y-6 p-8">
          <h3 className="text-4xl font-light">
            Made With Love.<br />
            Simply Delicious
          </h3>

          <p className="text-black leading-relaxed max-w-md">
            Our chefs use the freshest seasonal ingredients to prepare exquisite dishes 
            that delight the senses. Every plate is a combination of tradition, passion, and creativity.
            Join us for a memorable dining experience where taste, ambiance, and service 
            come together perfectly.
          </p>

          <a
            href="#menu"
            className="bg-[#452829] text-white px-8 py-4 text-xs tracking-widest hover:bg-yellow-900 transition inline-block"
          >
            View Menu
          </a>
        </div>

        {/* Right Image */}
        <div className="md:w-[55%] md:-mr-8 mt-20 md:mt-20">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80"
            alt="Delicious plated meal"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}

export default TwoColumn;