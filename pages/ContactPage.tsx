import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="flex-grow w-full max-w-[1280px] mx-auto px-6 lg:px-10 py-10">
      <div className="flex flex-col gap-4 mb-12">
         <h1 className="text-white text-4xl lg:text-5xl font-black leading-tight">Hubungi Tim Geo-EWS</h1>
         <p className="text-[#92c9a0] text-lg font-normal leading-relaxed max-w-2xl">
            Punya pertanyaan tentang pantau lahan atau butuh dukungan teknis? Kirimkan pesan kepada kami, tim kami siap membantu Anda 24/7.
         </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-10">
         {/* Form Section */}
         <div className="lg:col-span-7 xl:col-span-8">
            <form className="flex flex-col gap-6 bg-[#193320]/30 border border-border-dark rounded-xl p-6 lg:p-8">
               <div className="flex flex-col md:flex-row gap-6">
                  <label className="flex flex-col flex-1 gap-2">
                     <span className="text-white text-sm font-medium">Nama Lengkap</span>
                     <input type="text" placeholder="Nama Anda" className="w-full rounded-lg bg-[#193320] border border-[#32673f] text-white placeholder-[#5a8165] focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 transition-all" />
                  </label>
                  <label className="flex flex-col flex-1 gap-2">
                     <span className="text-white text-sm font-medium">Alamat Email</span>
                     <input type="email" placeholder="nama@email.com" className="w-full rounded-lg bg-[#193320] border border-[#32673f] text-white placeholder-[#5a8165] focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 transition-all" />
                  </label>
               </div>
               
               <label className="flex flex-col gap-2">
                  <span className="text-white text-sm font-medium">Subjek</span>
                  <div className="relative">
                     <select className="w-full appearance-none rounded-lg bg-[#193320] border border-[#32673f] text-white focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 pr-10 transition-all cursor-pointer">
                        <option value="" disabled selected>Pilih topik bantuan</option>
                        <option value="support">Dukungan Teknis</option>
                        <option value="partnership">Kerjasama & Kemitraan</option>
                        <option value="general">Pertanyaan Umum</option>
                     </select>
                     <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-[#92c9a0]">
                        <span className="material-symbols-outlined">expand_more</span>
                     </div>
                  </div>
               </label>

               <label className="flex flex-col gap-2">
                  <span className="text-white text-sm font-medium">Pesan</span>
                  <textarea placeholder="Tuliskan detail pertanyaan atau masalah Anda..." className="w-full rounded-lg bg-[#193320] border border-[#32673f] text-white placeholder-[#5a8165] focus:border-primary focus:ring-1 focus:ring-primary min-h-[180px] p-4 resize-y transition-all"></textarea>
               </label>

               <div className="pt-2">
                  <button type="button" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-[#0fd640] text-black font-bold h-12 px-8 rounded-lg transition-colors w-full md:w-auto shadow-[0_0_15px_rgba(19,236,73,0.3)]">
                     <span>Kirim Pesan</span>
                     <span className="material-symbols-outlined text-[20px]">send</span>
                  </button>
               </div>
            </form>
         </div>

         {/* Info Section */}
         <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
            <div className="bg-[#193320] border border-border-dark rounded-xl p-6 flex flex-col gap-6">
               <h3 className="text-white text-xl font-bold border-b border-border-dark pb-4">Informasi Kontak</h3>
               <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4 group">
                     <div className="size-10 rounded-full bg-[#23482c] flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <span className="material-symbols-outlined text-primary">mail</span>
                     </div>
                     <div>
                        <p className="text-[#92c9a0] text-sm mb-1">Email</p>
                        <a href="mailto:support@geo-ews.id" className="text-white font-medium hover:text-primary transition-colors">support@geo-ews.id</a>
                     </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                     <div className="size-10 rounded-full bg-[#23482c] flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <span className="material-symbols-outlined text-primary">location_on</span>
                     </div>
                     <div>
                        <p className="text-[#92c9a0] text-sm mb-1">Lokasi Kantor</p>
                        <p className="text-white font-medium">Gedung Geo Tower Lt. 12<br/>Jl. Jend. Sudirman, Jakarta Pusat</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                     <div className="size-10 rounded-full bg-[#23482c] flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <span className="material-symbols-outlined text-primary">call</span>
                     </div>
                     <div>
                        <p className="text-[#92c9a0] text-sm mb-1">Telepon (Darurat)</p>
                        <p className="text-white font-medium">+62 21 555 0199</p>
                     </div>
                  </div>
               </div>
               
               <div className="mt-4 pt-6 border-t border-border-dark">
                  <p className="text-[#92c9a0] text-sm mb-4">Ikuti Kami</p>
                  <div className="flex gap-3">
                     {['FB', 'TW', 'IG'].map(social => (
                       <a key={social} href="#" className="size-10 rounded-lg bg-[#23482c] flex items-center justify-center text-white font-bold text-xs hover:bg-primary hover:text-black transition-all">
                         {social}
                       </a>
                     ))}
                  </div>
               </div>
            </div>

            {/* Map Preview */}
            <div className="relative w-full h-48 rounded-xl overflow-hidden border border-border-dark bg-[#193320]">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY1BLLPaa_W9y4QMtfg0tY0SpIyXGglt6L0KMuEdY2T5kKnqcoD1J-utfx6i0LFKmtKX27rnNggZUAkin4i2dXolEj5CLstDZmM5pP8FxBl4e1sMCpX9RzfqrtdBHyl5bWpItYbP8oOYmAFhmRpiFaAexYEPx4Lz9LIRwYQ6YBlEVXmnV8LDVguz0Gm_fphY0k6pyB673MMSFmUVoKRB0_IIfG_Ifs08MHmsuNnYchwIutdYISRJEsghys7xXgFvydOceA-uQpvQOu" alt="Map" className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity" />
               <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur px-3 py-1 rounded-md border border-white/10">
                  <span className="text-xs text-white font-medium flex items-center gap-1">
                     <span className="material-symbols-outlined text-[14px] text-primary">my_location</span>
                     Lihat di Peta
                  </span>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default ContactPage;