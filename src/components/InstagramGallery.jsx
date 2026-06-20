const galleryImages = [
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506629905607-53e82b52f0f6?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop",
];

const InstagramGallery = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <p className="uppercase tracking-[5px] text-sm text-slate-500 mb-3">
          Social Lookbook
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#0B1E3A]">
          Instagram Style Gallery
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden group h-[220px] md:h-[320px]"
          >
            <img
              src={img}
              alt={`gallery-${index}`}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramGallery;