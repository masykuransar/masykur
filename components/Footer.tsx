import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border-dark bg-[#0d1a10] py-10 mt-auto">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
               <div className="size-6 text-primary">
                 <span className="material-symbols-outlined text-[24px]">landscape</span>
               </div>
               <h3 className="text-white text-lg font-bold">Geo-EWS</h3>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
              Mewujudkan pemantauan lahan yang transparan dan akurat melalui kolaborasi teknologi dan masyarakat untuk masa depan yang berkelanjutan.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-text-secondary hover:text-primary text-sm transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="text-text-secondary hover:text-primary text-sm transition-colors">Hubungi Kami</a></li>
              <li><a href="#" className="text-text-secondary hover:text-primary text-sm transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="text-text-secondary hover:text-primary text-sm transition-colors">Syarat & Ketentuan</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Sosial Media</h4>
             <div className="flex gap-3">
              <a href="#" className="size-10 rounded-lg bg-surface-dark flex items-center justify-center text-text-secondary hover:bg-primary hover:text-background-dark transition-colors border border-border-dark hover:border-primary">
                <span className="text-xs font-bold">FB</span>
              </a>
              <a href="#" className="size-10 rounded-lg bg-surface-dark flex items-center justify-center text-text-secondary hover:bg-primary hover:text-background-dark transition-colors border border-border-dark hover:border-primary">
                <span className="text-xs font-bold">TW</span>
              </a>
              <a href="#" className="size-10 rounded-lg bg-surface-dark flex items-center justify-center text-text-secondary hover:bg-primary hover:text-background-dark transition-colors border border-border-dark hover:border-primary">
                <span className="text-xs font-bold">IG</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border-dark pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-xs">© 2024 Geo-EWS Project. Hak Cipta Dilindungi.</p>
          <div className="flex gap-6">
             <span className="text-text-secondary/60 text-xs">Powered by Open Data</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;