import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogPost: React.FC = () => {
  return (
    <div className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-8 py-8 md:py-12">
      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Main Article Content */}
        <main className="w-full lg:w-2/3 flex flex-col gap-12">
          <article className="flex flex-col gap-5 border-b border-border-dark pb-10">
            {/* Meta */}
            <div className="flex items-center gap-2 text-text-secondary text-sm">
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              <span>24 Mei 2024</span>
              <span className="mx-2">•</span>
              <span className="material-symbols-outlined text-[18px]">person</span>
              <span>Admin Geo-EWS</span>
            </div>
            
            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-black leading-tight tracking-tight text-white">
               Mengenal Geo-EWS: Solusi Cerdas Pantau Lahan Anda
            </h1>
            
            {/* Featured Image */}
            <div className="w-full aspect-video bg-cover bg-center rounded-xl overflow-hidden border border-border-dark relative group" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuADNT6h_MnTVT9saXeK6GmfrO4WWqEEmM9lrtxtVHbzzPpGvuoKpcL-HTofPlEbIQb5_i83MHl4tnDBmbzKaSvcM-a1uVu9WUu_bO1SDABhcRD7dKiG-cfArpcbJ9bIWMneVtOJIPnP1b5d7Bt3WvlUsfNf6J_FAuumMrykb0ecX0nnAE6GbGwayYQhGg_NXRDGeZ0hqIidgVfjGRCIdOro6_nPSiuA0d6nwzz9gJQ0XVTxv1xUZIfqHVbeca2GXPAcokbJsjXrfVnc")'}}>
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            
            {/* Content Body */}
            <div className="text-text-secondary text-lg leading-relaxed space-y-6">
               <p>
                 Selamat datang di blog resmi Geo-EWS. Dalam era di mana perubahan iklim semakin tidak menentu, pemantauan kondisi lahan secara <em>real-time</em> menjadi kebutuhan krusial bagi petani, pengelola perkebunan, hingga pemerintah daerah.
               </p>
               <p>
                 Geo-EWS (Geospatial Early Warning System) hadir sebagai jembatan antara data sensor lapangan dan analisis geospasial. Sistem kami tidak hanya memberikan data mentah, tetapi juga peringatan dini yang dapat diakses langsung melalui perangkat Anda.
               </p>

               {/* Features Box */}
               <div className="bg-[#1a3320] border border-border-dark rounded-xl p-6 my-6">
                 <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                   <span className="material-symbols-outlined text-primary">check_circle</span>
                   Fitur Utama Versi 2.0
                 </h3>
                 <ul className="space-y-3">
                   {['Sensor kelembaban tanah dengan akurasi tinggi.', 'Integrasi data curah hujan harian dari stasiun cuaca terdekat.', 'Peta interaktif sebaran potensi longsor.'].map((item, idx) => (
                     <li key={idx} className="flex items-start gap-3 text-text-secondary">
                        <span className="material-symbols-outlined text-primary text-sm mt-1">arrow_forward_ios</span>
                        <span>{item}</span>
                     </li>
                   ))}
                 </ul>
               </div>
               
               <p>
                 Teknologi ini memungkinkan deteksi dini yang lebih akurat, mengurangi risiko kerugian material dan lingkungan. Bergabunglah dengan ribuan pengguna lain yang telah beralih ke metode pemantauan cerdas ini.
               </p>
            </div>
            
            {/* Tags & Action */}
            <div className="flex items-center justify-between mt-4">
               <div className="flex gap-2">
                 <span className="bg-[#23482c] text-primary px-3 py-1 rounded-full text-xs font-medium border border-[#32673f]">#Teknologi</span>
                 <span className="bg-[#23482c] text-primary px-3 py-1 rounded-full text-xs font-medium border border-[#32673f]">#Lingkungan</span>
               </div>
               <button className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-black px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-[0_0_15px_rgba(19,236,73,0.3)] hover:shadow-[0_0_25px_rgba(19,236,73,0.5)]">
                 Bagikan Artikel
                 <span className="material-symbols-outlined text-sm font-bold">share</span>
               </button>
            </div>
          </article>
          
          {/* Related/Next Article Summary */}
          <article className="flex flex-col gap-4">
             <div className="flex items-center gap-2 text-text-secondary text-sm">
               <span className="material-symbols-outlined text-[18px]">calendar_today</span>
               <span>10 Mei 2024</span>
             </div>
             <h2 className="text-2xl font-bold text-white hover:text-primary cursor-pointer transition-colors">
               Pembaruan Algoritma Deteksi Dini Longsor
             </h2>
             <p className="text-text-secondary leading-relaxed line-clamp-3">
               Tim teknis kami baru saja merilis pembaruan pada algoritma backend Geo-EWS. Pembaruan ini meningkatkan sensitivitas deteksi pergerakan tanah sebesar 15% tanpa menambah beban server...
             </p>
             <NavLink to="/blog/2" className="text-primary text-sm font-bold hover:underline decoration-2 underline-offset-4 flex items-center gap-1 w-fit">
               Lanjut Membaca <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
             </NavLink>
          </article>
        </main>
        
        {/* Sidebar */}
        <aside className="w-full lg:w-1/3 flex flex-col gap-8">
           {/* Search */}
           <div className="bg-surface-dark p-1 rounded-lg">
              <label className="flex flex-col w-full">
                <div className="flex w-full items-stretch rounded-lg h-12 border border-border-dark focus-within:border-primary transition-colors">
                   <div className="text-text-secondary flex bg-[#1a2e1e] items-center justify-center pl-4 rounded-l-lg border-r-0">
                      <span className="material-symbols-outlined">search</span>
                   </div>
                   <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-white focus:outline-0 bg-[#1a2e1e] placeholder:text-text-secondary/50 px-4 text-sm font-normal leading-normal" placeholder="Cari di blog ini..." />
                </div>
              </label>
           </div>
           
           {/* Author Profile */}
           <div className="bg-[#1a2e1e] border border-border-dark rounded-xl p-5 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                 <div className="size-14 rounded-full bg-cover bg-center border-2 border-primary" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBWI6zb1CyjTngmlzvY20XjxJ1SsAi74jO7Qx6n9iXfcZ1N_pXP95GRLSRejKWvUBstXtakWVY--9wAayS4BvEXAoLgDr7rL81-xZSSUFimXre_T6EsxpHaCzyhsHdK_7nxD1HM_GTmixt5cMbb22xGRAQeokmkEHN8FTeeDj4p6fpalL06ko4xNBI_h3ISTxRxnFc26CWgGEBhG75suGfgCnz3tJn8XPp6h4HK6JiMmWWjdiviqWdGSmBevTnowxz56WVPzdbzhDp4")'}}></div>
                 <div>
                    <h3 className="text-white font-bold text-lg">Tim Geo-EWS</h3>
                    <p className="text-primary text-xs font-medium">Pengembang Sistem</p>
                 </div>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Kami adalah komunitas pengembang dan pemerhati lingkungan yang berdedikasi membangun sistem pemantauan lahan berbasis komunitas yang terjangkau dan akurat.
              </p>
              <a href="#" className="text-white text-xs font-bold border-b border-primary pb-0.5 hover:text-primary transition-colors">Lihat Profil Lengkap</a>
           </div>
           
           {/* Labels */}
           <div className="flex flex-col gap-3">
              <h3 className="text-white text-sm font-bold uppercase tracking-wider border-b border-border-dark pb-2">Label</h3>
              <div className="flex flex-wrap gap-2">
                 {['#TanahLongsor', '#Cuaca', '#SensorIoT', '#Tutorial', '#UpdateSistem'].map(tag => (
                   <a key={tag} href="#" className="px-3 py-1.5 bg-[#1a2e1e] border border-border-dark rounded text-xs text-text-secondary hover:text-white hover:border-primary hover:bg-[#23482c] transition-all">{tag}</a>
                 ))}
              </div>
           </div>
           
           {/* CTA */}
           <div className="bg-gradient-to-br from-[#1a3320] to-[#112215] border border-primary/30 rounded-xl p-6 text-center mt-4 relative overflow-hidden">
              <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-primary relative z-10">
                 <span className="material-symbols-outlined">monitoring</span>
              </div>
              <h3 className="text-white font-bold mb-2 relative z-10">Pantau Sekarang</h3>
              <p className="text-text-secondary text-xs mb-4 relative z-10">Akses dashboard peta interaktif untuk melihat kondisi lahan realtime.</p>
              <button className="w-full bg-transparent border border-primary text-primary hover:bg-primary hover:text-black transition-colors py-2 rounded-lg text-sm font-bold relative z-10">
                 Buka Dashboard
              </button>
           </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogPost;