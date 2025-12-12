import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogList: React.FC = () => {
  return (
    <div className="flex-grow w-full">
      {/* Featured Post Hero */}
      <section className="w-full bg-[#112215] border-b border-border-dark">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-8 md:py-12">
          <div className="flex flex-col gap-6 md:gap-10 lg:flex-row items-center">
             <div className="w-full lg:w-3/5 aspect-video rounded-xl shadow-2xl overflow-hidden group relative">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgnYifrTptST1mw6psprLreKILVOniIInniXUCRO2ZpUa2Z5bqUlzVFKgoxqkN-gkpDsa6fMEzKKkWmhyH-2TXdLJa05oTyDq7WRljD6s1Ijh1gae0OBGpuiWaJEM6zi1y3R9JnXyAxQnPeWHKT5arHKsZnCPZawq0M5yClW8TPKbJMgoCO7V0R7IdjQxNleCeWrgp9rHzA7F1_ZammoBP4X2UTJr2_LdXSSJrGhbkPLpmJjXs4lYqOL9a_ldG2scpop-QNU19og9L" 
                  alt="Featured Post" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                <div className="absolute top-4 left-4 bg-primary text-[#112215] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Fitur Baru
                </div>
             </div>
             
             <div className="flex flex-col gap-6 w-full lg:w-2/5 justify-center">
                <div className="flex flex-col gap-3 text-left">
                  <div className="flex items-center gap-2 text-text-secondary text-sm mb-1">
                    <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                    <span>24 Oktober 2023</span>
                    <span className="mx-1">•</span>
                    <span>Tim Pengembang</span>
                  </div>
                  <h1 className="text-white text-3xl md:text-4xl font-black leading-tight">
                    Versi 2.0 Geo-EWS Resmi Diluncurkan
                  </h1>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    Pelajari bagaimana algoritma baru kami membantu deteksi dini sengketa lahan dan fitur analisis tanah terbaru yang lebih akurat dan cepat.
                  </p>
                </div>
                <NavLink to="/blog/featured" className="flex w-fit items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-primary-hover text-[#112215] text-base font-bold transition-colors gap-2 group">
                  <span>Baca Selengkapnya</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </NavLink>
             </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="max-w-[1280px] mx-auto px-4 md:px-8 py-10 flex flex-col lg:flex-row gap-10">
         
         {/* Article Feed */}
         <div className="flex-1 flex flex-col gap-8">
            {/* Headlines & Filters */}
            <div className="flex flex-col gap-4">
               <div className="flex items-center justify-between">
                  <h2 className="text-white text-2xl md:text-[28px] font-bold">Artikel Terbaru</h2>
                  <div className="hidden md:flex gap-2">
                     <button className="size-8 flex items-center justify-center rounded bg-border-dark text-white hover:bg-primary hover:text-background-dark transition-colors">
                        <span className="material-symbols-outlined text-[20px]">grid_view</span>
                     </button>
                     <button className="size-8 flex items-center justify-center rounded bg-transparent text-text-secondary hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-[20px]">view_list</span>
                     </button>
                  </div>
               </div>
               {/* Filters */}
               <div className="flex gap-3 flex-wrap overflow-x-auto pb-2 scrollbar-hide">
                  <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-[#112215] px-4 hover:opacity-90 transition-opacity">
                     <span className="material-symbols-outlined text-[18px]">check</span>
                     <p className="text-sm font-bold">Semua</p>
                  </button>
                  {['Reforma Agraria', 'Studi Kasus', 'Pembaruan Sistem', 'Tutorial'].map((cat, idx) => (
                    <button key={idx} className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-dark border border-border-dark hover:border-primary/50 text-white px-4 transition-colors">
                       <p className="text-sm font-medium">{cat}</p>
                    </button>
                  ))}
               </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {/* Article 1 */}
               <article className="group flex flex-col rounded-xl bg-surface-dark border border-border-dark overflow-hidden hover:border-primary/40 transition-colors shadow-lg">
                  <div className="h-56 w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBwL95AcIX5BbMG7soG4D2FjxiPqE5W2VZUeiEDBUcBPBEVejc_qVqu6QoBb5iq3MfQ-dbFDhr5s40jafaMZrvGoT2Kt9UOiE2OqFkeS1ugoixxN3aeAaeSwMtr8OkAaTvqz3LTwdFn-CeQBEjPXuPL6NJsXgr-Qd5o7hwF34K2kW-FxO3YC2eUFZWl18GN9NMar_rb0PzPUw6cCUXtYms_0NLS7IQs3BVE7HNgSVKiC5P335rmnzi4Z5pmZK7og9miyVuDC_szwtQX")'}}></div>
                  <div className="p-6 flex flex-col gap-3 flex-1 relative bg-surface-dark">
                     <div className="flex items-center justify-between">
                        <span className="text-primary text-xs font-bold uppercase tracking-wider">Reforma Agraria</span>
                        <span className="text-text-secondary text-xs">2 Hari yang lalu</span>
                     </div>
                     <h3 className="text-white text-xl font-bold leading-snug group-hover:text-primary transition-colors">Penyelesaian Sengketa Lahan di Kalimantan Barat</h3>
                     <p className="text-gray-400 text-sm line-clamp-3 mb-2">Studi kasus mendalam mengenai bagaimana data spasial membantu mediasi konflik antara perusahaan dan masyarakat adat.</p>
                     <div className="mt-auto pt-4 border-t border-border-dark flex items-center justify-between">
                        <div className="flex items-center gap-2">
                           <div className="size-6 rounded-full bg-gray-500 bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBtfrxVKCL5BJxP5gSGTrFyGppL6jpH1Jgmo8_oBgpYdUHTk3u7KxAUvptq8qs9YFKu73gvC7rbdatmJkkHpqOvPyvtsmlatnbkK7kOK_zy4eYIq15IZJrh4RvyCFY4z4FqNbPt5Iql9Qs7zDbLlrLTO3WR57fbKNcBx3oIwp1JfTqe1Knz41MJNoFpJ4mn6br96UsLizWub8L6U5UAsEARiqcpFcpS6JnM07ixsnE6NfIfByuWg8B0WVJtQvsYEHPAJMTYL-HFZYe_")'}}></div>
                           <span className="text-white text-xs font-medium">Budi Santoso</span>
                        </div>
                        <NavLink to="/blog/1" className="text-white text-sm font-bold hover:text-primary flex items-center gap-1 transition-colors">
                           Baca <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </NavLink>
                     </div>
                  </div>
               </article>

               {/* Article 2 */}
               <article className="group flex flex-col rounded-xl bg-surface-dark border border-border-dark overflow-hidden hover:border-primary/40 transition-colors shadow-lg">
                  <div className="h-56 w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAbFGE1bRX0BA2U_6yrG6uyYRoIb0TwupvftHXMBVawFiogazem9EK4WRax1C8Z0WdZUyFgZ-ozcFZRGta_Cqe7zx2mstP4YCzFpGdp2krCsoT87ejD5XYH9AaiWM1VC_YmWjz5I1MCk0T0UgMu-0NuKGLlb1VzPKwXYaWMo6tXwwqz3ZAHtWovRvzL60X3KSR6QWver-ZleKH5gYPY6CuCM_avIb-hLHa9xDVCfyf8JGXFN2Ash51I9j-Lfzw4D8inlnrAsfuHKQGk")'}}></div>
                  <div className="p-6 flex flex-col gap-3 flex-1 relative bg-surface-dark">
                     <div className="flex items-center justify-between">
                        <span className="text-primary text-xs font-bold uppercase tracking-wider">Tutorial</span>
                        <span className="text-text-secondary text-xs">5 Hari yang lalu</span>
                     </div>
                     <h3 className="text-white text-xl font-bold leading-snug group-hover:text-primary transition-colors">Panduan Ekspor Data SHP ke GeoJSON</h3>
                     <p className="text-gray-400 text-sm line-clamp-3 mb-2">Langkah demi langkah cara mengonversi data shapefile Anda agar kompatibel dengan sistem Geo-EWS.</p>
                     <div className="mt-auto pt-4 border-t border-border-dark flex items-center justify-between">
                        <div className="flex items-center gap-2">
                           <div className="size-6 rounded-full bg-gray-500 bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBWeXWH8RCXy3FipFLRlKKZ7rbajN2BydF4GDdlxiyyP0goQ2klv6ak7RNxxoTTNWB96uSN42vT2tRFe8rnGrW5BRF_4ogVJN2tiPPTSTP4AKMDvPDG63CHifQ3SyYdgyerUlA53BG4Y7fokvTFALlvR7ah2r4sDkcEIMi3j1XFAL49pqCMA4U-lDzEJzrquuPsJn0-64GvMIZI2vqTN2BGTRhPVJ3ZFLX6QeJgo0uJky8Sz5dHcyM5rRESCVSzCPjguUzL3MRIKQhG")'}}></div>
                           <span className="text-white text-xs font-medium">Siti Rahma</span>
                        </div>
                        <NavLink to="/blog/2" className="text-white text-sm font-bold hover:text-primary flex items-center gap-1 transition-colors">
                           Baca <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </NavLink>
                     </div>
                  </div>
               </article>

               {/* Article 3 */}
               <article className="group flex flex-col rounded-xl bg-surface-dark border border-border-dark overflow-hidden hover:border-primary/40 transition-colors shadow-lg">
                  <div className="h-56 w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDzKqObRkH1paINk6GqxT2_kSzr4kRp1NJTJKglOM8etWZXNHEfB9kMu6nK3erJ7ctD_UlS9iqbbMtpKuM0jFMNXmvBrv8Ua8ZfA5ZwVQ96MOeZ8GEq0rjlS34JcFRMJKcEatYeyZPK16BLXG1HolHLnfAPq75IIuMt8UMOGHynhRrNKIkC_FBZSaF_rEDrdTrCHYEkuZYhP2ZAmmgP1MjpmNWULPsfJ-ua_TBOsRsZTYt5y1Xt7tr5-bNUOv_SH1cB3efpfDMLdDsd")'}}></div>
                  <div className="p-6 flex flex-col gap-3 flex-1 relative bg-surface-dark">
                     <div className="flex items-center justify-between">
                        <span className="text-primary text-xs font-bold uppercase tracking-wider">Pembaruan Sistem</span>
                        <span className="text-text-secondary text-xs">1 Minggu yang lalu</span>
                     </div>
                     <h3 className="text-white text-xl font-bold leading-snug group-hover:text-primary transition-colors">Maintenance Server Terjadwal: 1 Nov 2023</h3>
                     <p className="text-gray-400 text-sm line-clamp-3 mb-2">Informasi mengenai downtime terencana untuk peningkatan kapasitas server database spasial kami.</p>
                     <div className="mt-auto pt-4 border-t border-border-dark flex items-center justify-between">
                        <div className="flex items-center gap-2">
                           <div className="size-6 rounded-full bg-gray-500 bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDAlQPlbpksII-2o0omgcfWGrqJL2fA8samVvU9YAwRlPavHy8dLZEvsBwp6o36YRs-XBTP-P7VzNjsrmiTMRJQMWlAmUxk4A7Vqhh94IKLJimlnlzWeWWV2Een_CYWc-A5yc4wlSkfFrEknEJj2dHwcckR9IUuTfyKt2w67wM2afxRHS6bnSFQ46PhIBkDB3xr3shj8Ht4NzzQcQbGfLYOIgIY-XmriBOXKRXgJJiPekQpx_D21pE-QKqz2c6ilMFrYJNUDuYTxw23")'}}></div>
                           <span className="text-white text-xs font-medium">Admin Sys</span>
                        </div>
                        <NavLink to="/blog/3" className="text-white text-sm font-bold hover:text-primary flex items-center gap-1 transition-colors">
                           Baca <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </NavLink>
                     </div>
                  </div>
               </article>

               {/* Article 4 */}
               <article className="group flex flex-col rounded-xl bg-surface-dark border border-border-dark overflow-hidden hover:border-primary/40 transition-colors shadow-lg">
                  <div className="h-56 w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC2pRPm1dF355T5lnDt8q08QICLse7HqfVb6PoE8eBw9zPHy30QgW2w7SwoceFMkvIrbfMiJvZcBzcaPVouVaE8ZXo5y3rfK_ODx1BcW2n3EZPjD18F7IHQWb_i5MWKse5_CmdjNCI3RN4ssQIw0Z4kIjYAnKkNM-pBImhPQeMqvnPMxqpPH4Yd_BFK8GUW_o9sSr6_RmgW34j_bKkXRbw5kA7vYgqYF4BVC3Zm_FwJ2PT72BGL6g3tiyih3-hVy97mJYeDtvT1JUV1")'}}></div>
                  <div className="p-6 flex flex-col gap-3 flex-1 relative bg-surface-dark">
                     <div className="flex items-center justify-between">
                        <span className="text-primary text-xs font-bold uppercase tracking-wider">Studi Kasus</span>
                        <span className="text-text-secondary text-xs">2 Minggu yang lalu</span>
                     </div>
                     <h3 className="text-white text-xl font-bold leading-snug group-hover:text-primary transition-colors">Partisipasi Masyarakat dalam Pemetaan Desa</h3>
                     <p className="text-gray-400 text-sm line-clamp-3 mb-2">Bagaimana Geo-EWS memberdayakan komunitas lokal untuk memvalidasi batas desa secara mandiri.</p>
                     <div className="mt-auto pt-4 border-t border-border-dark flex items-center justify-between">
                        <div className="flex items-center gap-2">
                           <div className="size-6 rounded-full bg-gray-500 bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDM6IWC0DHy9qwj3AcYhouAt8ApQm7VSfJSpJpZgjOqcXHvI_7AvZfk07yXl0GvmWrP_nSef5mWXmcnYn-IU1lODVJSHVEDKYGnAJkklJduxggMjFpam2yX-Hf4hyH3dTT-KRUDi9FfkWB0KQ0asVOYzw_bmOeaClEI4ZXuAmY52urQJDZvapWvW3txNWQdJ0xeKoYQ_6bhx0Aj22ZqMkhpjiKUr0RG3JzHIR-3mXlcQfQLjYfypOfufag-i1gDIBHRA8PVDNASSu7N")'}}></div>
                           <span className="text-white text-xs font-medium">Dedi Mulyadi</span>
                        </div>
                        <NavLink to="/blog/4" className="text-white text-sm font-bold hover:text-primary flex items-center gap-1 transition-colors">
                           Baca <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </NavLink>
                     </div>
                  </div>
               </article>
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-6">
               <nav className="flex items-center gap-2">
                  <button className="flex items-center justify-center size-10 rounded-lg border border-border-dark bg-surface-dark text-white hover:border-primary hover:text-primary disabled:opacity-50">
                     <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                  </button>
                  <button className="flex items-center justify-center size-10 rounded-lg bg-primary text-[#112215] font-bold">1</button>
                  <button className="flex items-center justify-center size-10 rounded-lg border border-border-dark bg-surface-dark text-white hover:border-primary hover:text-primary transition-colors">2</button>
                  <span className="text-text-secondary">...</span>
                  <button className="flex items-center justify-center size-10 rounded-lg border border-border-dark bg-surface-dark text-white hover:border-primary hover:text-primary transition-colors">
                     <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                  </button>
               </nav>
            </div>
         </div>

         {/* Right Sidebar */}
         <aside className="w-full lg:w-80 flex flex-col gap-8">
            {/* Search */}
            <div className="flex flex-col gap-2">
               <label className="text-white text-sm font-bold">Pencarian</label>
               <div className="flex w-full items-stretch rounded-lg h-12 bg-surface-dark border border-border-dark focus-within:border-primary transition-colors">
                  <div className="text-text-secondary flex items-center justify-center pl-4 pr-2">
                     <span className="material-symbols-outlined text-[20px]">search</span>
                  </div>
                  <input className="flex w-full min-w-0 flex-1 bg-transparent text-white placeholder:text-text-secondary/50 border-none focus:ring-0 text-sm px-2" placeholder="Cari artikel..." />
               </div>
            </div>

            {/* Newsletter */}
            <div className="rounded-xl bg-surface-dark border border-border-dark p-6 relative overflow-hidden">
               <div className="absolute -top-10 -right-10 size-32 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>
               <div className="flex items-center gap-2 mb-3 text-primary">
                  <span className="material-symbols-outlined">mail</span>
                  <h3 className="text-base font-bold text-white">Newsletter</h3>
               </div>
               <p className="text-gray-400 text-sm mb-4">Dapatkan ringkasan update sistem dan berita agraria setiap senin.</p>
               <form className="flex flex-col gap-3">
                  <input type="email" placeholder="Email Anda" className="w-full h-10 rounded-lg bg-[#112215] border border-border-dark text-white px-3 text-sm focus:border-primary focus:ring-0 placeholder:text-text-secondary/50" />
                  <button className="h-10 w-full rounded-lg bg-primary hover:bg-primary-hover text-[#112215] font-bold text-sm transition-colors">Berlangganan</button>
               </form>
            </div>
            
            {/* Popular This Week */}
            <div className="flex flex-col gap-4">
               <h3 className="text-white text-lg font-bold border-l-4 border-primary pl-3">Populer Minggu Ini</h3>
               <div className="flex flex-col gap-4">
                  <a href="#" className="flex gap-3 group">
                     <div className="size-20 shrink-0 rounded-lg bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD8opJUVd2YB9DcKaKE9Ye0ngkGvRcTqs10GCr34Ts2twsrwrsIYItj40C3_tV70CHzSKFspdVWPGnlRiS_RrotjxMXkLU-pfYpfiW1HObOdjSIItig8YuOGtHPom0DMxmk5NW0_KyB-hwyIrPWl1ToaI-ZAlhzxOXRL8qdQ_c3KYIN-5aQuEE13k85T3QN-ueVoM4YZ61Bf2qWrldNZlifmEj1DWMq3vPUspWYgj-4X4Foc3wBqFVmzCS3Tf-ZARw0veEvyyUrjvVp")'}}></div>
                     <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-primary font-bold uppercase">Studi Kasus</span>
                        <h4 className="text-white text-sm font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2">Analisis Dampak Lingkungan Proyek A</h4>
                     </div>
                  </a>
                  <a href="#" className="flex gap-3 group">
                     <div className="size-20 shrink-0 rounded-lg bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCTbEAU2yPsqGX-AQIj5zgY5npTREA8g-VdJnccnyQ2uD0b2Hmh3sAXhId3DJk04kD66VglrHjJJ8g_dIBmTt49Wcd1j-RrULhn5xabNCbaqiOi3XxkpMedEvpxpUg9KDCnwEBznvTLZAanroibAYJ1GM1QP7BY_A-PAUaoKnDNr46_tVFwbd6qrkkVO11V161HGUqWs5FM17JkDFbyXED9vkfEvXFEOP46nYQunbMFYFaG-Ox89fICj-MaJSogxo4FeFtbpWTFJ39j")'}}></div>
                     <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-primary font-bold uppercase">Update</span>
                        <h4 className="text-white text-sm font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2">Patch Keamanan v1.4.2 Dirilis</h4>
                     </div>
                  </a>
               </div>
            </div>
            
            {/* Archive */}
            <div className="flex flex-col gap-4 pt-4 border-t border-border-dark">
              <h3 className="text-white text-lg font-bold border-l-4 border-gray-600 pl-3">Arsip</h3>
              <ul className="flex flex-col gap-2">
                 {['Oktober 2023', 'September 2023', 'Agustus 2023'].map(date => (
                    <li key={date}>
                       <a href="#" className="flex justify-between items-center text-gray-400 hover:text-white text-sm group">
                          <span>{date}</span>
                          <span className="bg-surface-dark px-2 py-0.5 rounded text-xs text-text-secondary group-hover:bg-border-dark">12</span>
                       </a>
                    </li>
                 ))}
              </ul>
            </div>

         </aside>
      </main>
    </div>
  );
};

export default BlogList;