const Footer = () => {
  return (
    <footer className="bg-[#081629] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 tracking-widest">NOVO</h2>
        <p className="text-slate-300 max-w-md">
          Premium shirts and pants crafted for modern style, confidence and comfort.
        </p>

        <div className="mt-8 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-slate-400">© 2026 NOVO Clothes. All Rights Reserved.</p>
          <div className="flex gap-6 text-slate-300">
            <span>Instagram</span>
            <span>Facebook</span>
            <span>TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;