import React from 'react';

const BenefitsPage: React.FC = () => {
  return (
    <div className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-8 py-8 md:py-12">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
           <div className="flex items-center gap-3 text-sm text-text-secondary">
             <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">Artikel Utama</span>
             <span>•</span>
             <span>24 Oktober 2023</span>
           </div>
           <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight text-white">
             Transformasi Pengendalian Tanah dengan Geo-EWS
           </h1>
           <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl">
             Meningkatkan kualitas tata kelola pertanahan melalui sistem peringatan dini yang terintegrasi, responsif, dan berbasis data real-time.
           </p>
        </div>
        
        {/* Main Image */}
        <div className="w-full h-[320px] md:h-[450px] rounded-xl overflow-hidden relative group">
           <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent z-10"></div>
           <img 
             src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGinXjSA3U9jXZEVJZIdEqtuyo5vibc_pz7wiPkqyE1ydQbVFLf_cXlWRD5JYVYlnkdozkz8-Jv5_7nYe-KHiP_dxTZCuiouggNZkpuxHqmIGEDh-pWbIusEZa4VwuVVXd0PxtZ7TuBsHJiWZnXjqGm-vRCjSS0X3814DalgjB84WBQnXLbyDL3U3m3qKCNZbGozYAVe3yvyKJcx_-2Q0L3f4g8redHCiYKhLz5mON-P_vBXAiGOYWv-ofE2dnJ9QTX5HxBbDycXWb" 
             alt="Land Map" 
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
           />
           <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 text-white/80 text-sm">
             <span className="material-symbols-outlined text-[18px]">location_on</span>
             <span>Peta Digital Pertanahan Nasional</span>
           </div>
        </div>
        
        {/* Content */}
        <div className="prose prose-lg prose-invert max-w-none text-gray-300">
           <p className="mb-6">
             Dalam era digitalisasi agraria, kebutuhan akan data yang akurat dan respons cepat terhadap perubahan penggunaan lahan menjadi sangat krusial. <strong>Geo-EWS (Early Warning System)</strong> hadir sebagai solusi teknologi mutakhir yang dirancang untuk menjawab tantangan kompleks dalam pengawasan tata ruang dan pertanahan nasional.
           </p>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 not-prose">
              {/* Card 1 */}
              <div className="flex flex-col gap-4 rounded-xl border border-border-dark bg-surface-dark p-6 hover:border-primary/50 transition-colors">
                 <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">gavel</span>
                 </div>
                 <div>
                    <h3 className="text-white text-lg font-bold mb-2">Penegakan Hukum</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                       Memperkuat basis bukti digital untuk penindakan pelanggaran tata ruang. Data satelit menjadi acuan yang tak terbantahkan.
                    </p>
                 </div>
              </div>
              
              {/* Card 2 */}
              <div className="flex flex-col gap-4 rounded-xl border border-border-dark bg-surface-dark p-6 hover:border-primary/50 transition-colors">
                 <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">shield</span>
                 </div>
                 <div>
                    <h3 className="text-white text-lg font-bold mb-2">Keamanan Aset</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                       Pencegahan proaktif terhadap okupasi ilegal pada aset strategis negara dan BUMN melalui deteksi anomali perubahan tutupan lahan.
                    </p>
                 </div>
              </div>

               {/* Card 3 (Full width) */}
               <div className="flex flex-col gap-4 rounded-xl border border-border-dark bg-surface-dark p-6 hover:border-primary/50 transition-colors md:col-span-2">
                 <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                       <span className="material-symbols-outlined text-3xl">handshake</span>
                    </div>
                    <div>
                       <h3 className="text-white text-lg font-bold mb-2">Dukungan Reforma Agraria</h3>
                       <p className="text-text-secondary text-sm leading-relaxed">
                          Mempercepat identifikasi Tanah Objek Reforma Agraria (TORA) yang <em>clean and clear</em>, memastikan redistribusi lahan tepat sasaran kepada masyarakat yang membutuhkan.
                       </p>
                    </div>
                 </div>
              </div>
           </div>
           
           <h2 className="text-2xl font-bold text-white mt-12 mb-6">Analisis Dampak Operasional</h2>
           
           <div className="rounded-xl border border-border-dark bg-surface-dark/50 overflow-hidden not-prose mb-8">
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border-dark">
                 <div className="p-6">
                    <div className="flex items-center gap-2 mb-2 text-primary">
                       <span className="material-symbols-outlined text-xl">speed</span>
                       <span className="font-bold text-sm uppercase tracking-wide">Efisiensi</span>
                    </div>
                    <h4 className="text-white font-bold text-lg mb-1">Penghematan Waktu Survei</h4>
                    <p className="text-text-secondary text-sm">Mengurangi kebutuhan survei lapangan awal hingga 60% berkat data penginderaan jauh yang presisi.</p>
                 </div>
                 <div className="p-6">
                    <div className="flex items-center gap-2 mb-2 text-primary">
                       <span className="material-symbols-outlined text-xl">visibility</span>
                       <span className="font-bold text-sm uppercase tracking-wide">Transparansi</span>
                    </div>
                    <h4 className="text-white font-bold text-lg mb-1">Akses Informasi Publik</h4>
                    <p className="text-text-secondary text-sm">Membuka akses status lahan bagi stakeholder terkait, mengurangi celah mafia tanah bermain di area abu-abu.</p>
                 </div>
              </div>
              <div className="border-t border-border-dark p-6">
                 <div className="flex items-center gap-2 mb-2 text-primary">
                    <span className="material-symbols-outlined text-xl">warning</span>
                    <span className="font-bold text-sm uppercase tracking-wide">Mitigasi Risiko</span>
                 </div>
                 <h4 className="text-white font-bold text-lg mb-1">Deteksi Dini Konflik</h4>
                 <p className="text-text-secondary text-sm">Sistem mampu mendeteksi pola pergerakan atau pembukaan lahan yang berpotensi menjadi konflik sosial sebelum eskalasi terjadi.</p>
              </div>
           </div>
           
           <h2 className="text-2xl font-bold text-white mt-12 mb-6">Kesimpulan</h2>
           <p className="mb-8">
             Geo-EWS bukan hanya alat pemantauan, melainkan fondasi baru bagi kedaulatan data pertanahan Indonesia. Dengan integrasi teknologi ini, cita-cita mewujudkan tertib administrasi dan keadilan agraria semakin dekat untuk dicapai.
           </p>

           <div className="flex flex-wrap gap-2 mt-8 py-6 border-t border-border-dark">
              <span className="text-sm text-white font-semibold mr-2 self-center">Tags:</span>
              {['#ReformaAgraria', '#GeoSpasial', '#SmartGov', '#HukumPertanahan'].map(tag => (
                 <a key={tag} href="#" className="px-3 py-1 rounded-full bg-surface-dark border border-border-dark text-xs text-text-secondary hover:text-primary hover:border-primary transition-colors">{tag}</a>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsPage;