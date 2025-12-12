import React from 'react';
import { NavLink } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="flex-grow w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[450px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark/90 to-transparent z-10"></div>
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMpQPNv3svL91zhXxFT6UTnpqWigUeo4GtUht7o1nHU8yxx04393Q7zcwcbnMm7kihqy4wYQ5644gy7vHUsT3lVf7eo13bbk3dP8WSuSwm4JSaqMx5Flw9X5K7oCGnSmmqMzIhXHFH4tr_BA2i-Jcep4V8nhGLNBtFREvB50kegJ4Iz0SnfyZlf043bomHLWFdEL35Xo1YB4eUJAUbEM5iSY1ceQoDRXTRiyo0T7lleJjQkzlOpAXLsvkO9HW2AgrBm9hbTH6l20mB" 
            alt="Earth View" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto text-center px-4 mt-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(19,236,73,0.15)]">
            Informasi Sistem
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-4 drop-shadow-lg">
            Tentang Geo-EWS
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            Platform Peringatan Dini Geospasial Partisipatif untuk pemantauan lahan yang lebih akurat, cepat, dan transparan.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1280px] mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Content Column */}
          <article className="lg:col-span-8 flex flex-col gap-12">
            
            {/* Intro */}
            <section>
               <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                 <span className="w-1.5 h-8 bg-primary rounded-full block shadow-[0_0_10px_rgba(19,236,73,0.5)]"></span>
                 Apa itu Geo-EWS?
               </h2>
               <div className="prose prose-lg prose-invert text-slate-300 leading-relaxed">
                 <p className="mb-4">
                   <strong>Geo-EWS (Geospatial Early Warning System)</strong> adalah sistem peringatan dini berbasis partisipasi masyarakat yang menggabungkan teknologi geospasial mutakhir dengan laporan langsung dari lapangan.
                 </p>
                 <p>
                   Berbeda dengan sistem pemantauan konvensional yang hanya mengandalkan citra satelit, Geo-EWS memberdayakan masyarakat lokal untuk menjadi "sensor" aktif. Dengan demikian, perubahan lahan sekecil apapun dapat terdeteksi lebih dini, memungkinkan respon yang lebih cepat untuk pencegahan bencana atau kerusakan lingkungan.
                 </p>
               </div>
            </section>

            {/* Steps / Process */}
            <section className="bg-surface-dark border border-border-dark rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-8 border-b border-border-dark pb-4">Cara Kerja Sistem</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Connecting Line Desktop */}
                <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 z-0"></div>

                {/* Step 1 */}
                <div className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-24 h-24 bg-[#112215] border-2 border-primary rounded-full flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(19,236,73,0.2)] group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-4xl text-primary">add_a_photo</span>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">1. Pelaporan</h4>
                  <p className="text-sm text-text-secondary">Pengguna mengambil foto kondisi lahan melalui aplikasi mobile Pantaulahan.</p>
                </div>

                {/* Step 2 */}
                <div className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-24 h-24 bg-[#112215] border-2 border-primary rounded-full flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(19,236,73,0.2)] group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-4xl text-primary">verified</span>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">2. Validasi</h4>
                  <p className="text-sm text-text-secondary">Data diverifikasi oleh sistem AI dan tim ahli geospasial di pusat data.</p>
                </div>

                {/* Step 3 */}
                <div className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-24 h-24 bg-[#112215] border-2 border-primary rounded-full flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(19,236,73,0.2)] group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-4xl text-primary">campaign</span>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">3. Peringatan</h4>
                  <p className="text-sm text-text-secondary">Notifikasi dini dikirimkan ke pemangku kepentingan jika terdeteksi anomali.</p>
                </div>
              </div>
            </section>

            {/* Tech Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
               <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Teknologi Crowdsourcing</h2>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    Aplikasi <strong>Pantaulahan</strong> dirancang untuk bekerja bahkan di area dengan sinyal rendah (offline-first). Saat pengguna mengambil data, aplikasi mencatat koordinat GPS presisi, orientasi arah pandang, dan timestamp.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Data ini kemudian disinkronisasi ke server cloud Geo-EWS begitu perangkat terhubung kembali ke internet, menciptakan database partisipatif yang real-time.
                  </p>
               </div>
               <div className="relative rounded-xl overflow-hidden border border-border-dark group">
                 <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors z-10"></div>
                 <img 
                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuChsfRzfE3vBrTCHQFY5-lp6iU1GV-jv5wAXrEfXARL8Jw4yAHEMjcp9eG1TQDwhT9-Caz9TF6_c43X8ipdxUf9fc9pVYq_AUXAA0O5M79EfJrIqnUzwc4XYftY13WK_HLyw_qjzQ-lGlM7TX67q00Qz6NOEpZDJfOT0VpqyW5UyCrC_R-ipmaDcyJkE3uhF1CuS4AQ-7crKw825DUpDgxGRst8ZYmg0yFB8UOZSUca9LgsshCx558Dp7aLzTIMNCGmOuevVOAb1TUI" 
                   alt="App Interface" 
                   className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                 />
               </div>
            </section>

             {/* Community Role */}
             <section>
                <h2 className="text-2xl font-bold text-white mb-4">Peran Masyarakat</h2>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Keberhasilan Geo-EWS bergantung pada Anda. Masyarakat yang tinggal di sekitar kawasan hutan, daerah aliran sungai, dan lahan kritis adalah garda terdepan dalam menjaga kelestarian lingkungan.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-surface-dark border border-border-dark hover:border-primary/50 transition-colors">
                    <span className="material-symbols-outlined text-primary text-3xl mt-1">groups</span>
                    <div>
                      <h4 className="text-white font-bold mb-1">Komunitas Lokal</h4>
                      <p className="text-sm text-text-secondary">Pemberdayaan kelompok tani dan masyarakat desa.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-surface-dark border border-border-dark hover:border-primary/50 transition-colors">
                    <span className="material-symbols-outlined text-primary text-3xl mt-1">school</span>
                    <div>
                      <h4 className="text-white font-bold mb-1">Akademisi</h4>
                      <p className="text-sm text-text-secondary">Penelitian dan pengembangan metode pemantauan.</p>
                    </div>
                  </div>
                </div>
             </section>

          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 flex flex-col gap-8">
            {/* CTA Widget */}
            <div className="bg-gradient-to-br from-surface-dark to-surface-darker rounded-xl p-6 border border-border-dark shadow-lg sticky top-24">
              <div className="flex justify-center mb-4">
                <div className="bg-[#112215] p-3 rounded-full border border-border-dark shadow-[0_0_15px_rgba(19,236,73,0.1)]">
                  <span className="material-symbols-outlined text-4xl text-primary">smartphone</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">Mulai Memantau</h3>
              <p className="text-text-secondary text-sm text-center mb-6">Unduh aplikasi Pantaulahan sekarang dan berkontribusi untuk lingkungan.</p>
              
              <button className="w-full bg-primary hover:bg-primary-hover text-background-dark font-bold py-3 px-4 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-md flex items-center justify-center gap-2 mb-3">
                <span className="material-symbols-outlined">android</span>
                <span>Google Play</span>
              </button>
              <button className="w-full bg-[#23482c] hover:bg-[#2d5c38] text-white font-bold py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 border border-border-dark">
                <span className="material-symbols-outlined">phone_iphone</span>
                <span>App Store</span>
              </button>
            </div>

            {/* Related Articles */}
            <div className="rounded-xl pt-4">
               <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                 <span className="material-symbols-outlined text-primary">article</span>
                 Artikel Terkait
               </h3>
               <div className="flex flex-col gap-4">
                 <NavLink to="/blog/1" className="group flex gap-4 items-start">
                   <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-surface-dark">
                     <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB21x59A39_gddh9kI7OVholS8OLn4JcTfCXxzWzscj7GrSvhY9yopd769vVufPjPUhD_3IUGtKt_8_4Z2LZO9xTAE8R9CAhpLRi9HC7UIQkBPnC_c3gH4v2e4bQL-p5CJo6IexhZDXlq3CbaUYaZoTn9293Bb1qM7zlPHa41pc8FHU7qlVCP2jhHtFeKGwhmf_915WBDXIzGANBpcLH85aZYyN2NCt-V8E3NsgFHVfT-j33OXDMV3ErJi209d_RVEI3ZnPVaoeSobd" alt="Thumbnail" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"/>
                   </div>
                   <div>
                     <h4 className="text-white text-sm font-medium group-hover:text-primary transition-colors line-clamp-2 mb-1">
                       Tutorial: Cara Mengambil Foto Geotagging yang Benar
                     </h4>
                     <span className="text-xs text-slate-500">12 Okt 2023</span>
                   </div>
                 </NavLink>
                 <NavLink to="/blog/2" className="group flex gap-4 items-start">
                   <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-surface-dark">
                     <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0QdrgN_l_kkRwz_fK0CsldeCBhSTy3q1R3jOlRj4vy_i0ROeL8FwOKCbr7_pEZjiwBDqCWmb7F9OPQaju3fDnruZ9Bb01yDsBjYd_bBgFbA7Q_ZILxPY0_m8ryEzPxTVh89JNXo18StgfAU-j6alp9gMGhAlslmX9Jh8vKHYreRs_9vOm_ssznF42uaNEkJVD_2gST9fweLT-6ARGCawfG4ueeG8LCJELMrCeOzcJX1-gnjDcuBLL5xN8gOea4XNE49IBCN2UIJgS" alt="Thumbnail" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"/>
                   </div>
                   <div>
                     <h4 className="text-white text-sm font-medium group-hover:text-primary transition-colors line-clamp-2 mb-1">
                       Laporan Bulanan: 500 Hektar Lahan Terverifikasi
                     </h4>
                     <span className="text-xs text-slate-500">05 Okt 2023</span>
                   </div>
                 </NavLink>
               </div>
            </div>
            
            {/* Tags Widget */}
            <div className="pt-4 border-t border-border-dark">
              <h3 className="text-lg font-bold text-white mb-4">Topik Populer</h3>
              <div className="flex flex-wrap gap-2">
                {['#Lingkungan', '#Geospasial', '#Pantaulahan', '#EWS', '#Partisipasi'].map(tag => (
                   <span key={tag} className="text-xs font-medium text-slate-300 bg-surface-dark hover:bg-primary hover:text-background-dark border border-border-dark rounded px-3 py-1.5 transition-colors cursor-pointer">
                     {tag}
                   </span>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;