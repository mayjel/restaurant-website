function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Fixed Background Image */}
      <div
        className="absolute top-0 left-0 bottom-0 right-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1600&q=80')",
        }}
      />

      {/* Right White Column (wider now) */}
      <div className="absolute top-0 right-0 h-full w-56 bg-white flex flex-col justify-between items-center py-8 px-4 shadow-lg">
        {/* Top Text (kept together) */}
        <div
          className="text-black text-sm tracking-widest text-center transform rotate-180"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Restaurant & Bar
        </div>

        {/* Bottom Text */}
        <div
          className="text-black text-sm tracking-widest text-center transform rotate-180"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Est. 2035
        </div>
      </div>
    </section>
  );
}

export default Hero;