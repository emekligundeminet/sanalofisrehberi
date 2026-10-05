export type Firma = {
  ilSlug: string;
  sira: number;
  slug: string;
  ad: string;
  semt: string;
  adres: string;
  aylikFiyat: string;
  aylikMin: number | null;
  fiyatGosterim: string;
  fiyatDogrulandi: boolean;
  fiyatNotu?: string;
  toplantiOdasi: string;
  tebligatBildirimi: string;
  hizmetler: string[];
  degerlendirme: string;
  webSitesi: string;
  dofollow: boolean;
  kaynakUrl: string;
  guncellemeTarihi: string;
  guncellemeISO: string;
  rozet: string;
  artilar: string[];
  dikkat: string[];
  oneCikan?: boolean;
  toplantiOdasiKisa: string;
  tebligatKisa: string;
};

export const firmalar: Firma[] = [
{
 ilSlug:"ankara", sira:1, slug:"konsept-ofis", ad:"Konsept Ofis", semt:"Çankaya (Mahall Ankara)", oneCikan:true,
 adres:"Mahall Ankara, Mustafa Kemal, Dumlupınar Blv. No:274/2 C2 Blok No:47, 06570 Çankaya/Ankara",
 aylikFiyat:"800 TL + KDV", aylikMin:800, fiyatGosterim:"800 TL + KDV", fiyatDogrulandi:true, toplantiOdasi:"Var, yıllık abonelere saatlik 500 TL + KDV", tebligatBildirimi:"Aynı gün, anlık bilgilendirme",
 toplantiOdasiKisa:"Saatlik (yıllık abone)", tebligatKisa:"Aynı gün",
 hizmetler:["Vergi levhası ve ticaret sicil adresi","Posta ve kargo teslim alma","Tebligat takibi ve anlık bilgilendirme","Makam odası ve toplantı odası"],
 degerlendirme:"Dumlupınar Bulvarı üzerindeki Mahall Ankara iş merkezinde, resepsiyonlu bir adres sunuyor. Aylık fiyatını sitesinde açıkça yayımlıyor; stopaj ve aidat alınmadığını belirtiyor. Yüz yüze görüşmeler için makam odası ve toplantı odası saatlik kiralanabiliyor.",
 webSitesi:"https://konseptofis.com", dofollow:true, kaynakUrl:"https://konseptofis.com", guncellemeTarihi:"Ekim 2026", guncellemeISO:"2026-10-05",
 rozet:"Fiyatı şeffaf",
 artilar:["Aylık fiyat sitede açıkça yayımlanıyor","Stopaj ve aidat alınmadığı belirtiliyor","Resepsiyonlu iş merkezi, aynı gün tebligat bildirimi","Saatlik makam odası ve toplantı odası"],
 dikkat:["Toplantı ve makam odası yalnızca yıllık abonelere açık","Tek lokasyon (Mahall Ankara)"]
},
{
 ilSlug:"ankara", sira:2, slug:"amfora-ofis", ad:"Amfora Ofis", semt:"Balgat / Kızılay",
 adres:"Yapım İş Merkezi No:35/7, Balgat-Çankaya, 06520 Ankara",
 aylikFiyat:"700 TL", aylikMin:700, fiyatGosterim:"700 TL", fiyatDogrulandi:false, toplantiOdasi:"Ayda 4 saat oda veya toplantı salonu kullanımı pakete dahil", tebligatBildirimi:"Posta ve kargolar karşılanıp haber veriliyor",
 toplantiOdasiKisa:"Ayda 4 saat dahil", tebligatKisa:"Bildirim var",
 hizmetler:["Yasal adres","Posta ve kargo karşılama","Sekreterlik ve IP telefon","Birden fazla lokasyon"],
 degerlendirme:"Balgat ve Kızılay'da birden fazla lokasyonda hizmet veriyor. Sanal ofis paketine ayda 4 saatlik oda veya toplantı salonu kullanımını dahil ettiğini belirtiyor; e-ticaret danışmanlığı da sunuyor.",
 webSitesi:"https://www.ankarasanalofisim.com/", dofollow:false, kaynakUrl:"https://www.ankarasanalofisim.com/", guncellemeTarihi:"Ekim 2026", guncellemeISO:"2026-10-05",
 rozet:"Toplantı saati dahil",
 artilar:["Ayda 4 saat oda veya toplantı salonu pakete dahil","Balgat ve Kızılay'da birden fazla lokasyon","Fiyat sitede yayımlanıyor"],
 dikkat:["Fiyatın KDV dahil olup olmadığı belirtilmemiş","Tebligat bildirim süresi belirtilmemiş"]
},
{
 ilSlug:"ankara", sira:3, slug:"startup-ofis", ad:"StartUp Ofis", semt:"Balgat",
 adres:"No:11 Balgat, Çankaya/Ankara",
 aylikFiyat:"450 TL", aylikMin:450, fiyatGosterim:"450 TL", fiyatDogrulandi:false, toplantiOdasi:"Ayda 1 gün toplantı salonu kullanımı", tebligatBildirimi:"Çağrı, posta ve kargolar karşılanıp bildiriliyor",
 toplantiOdasiKisa:"Ayda 1 gün dahil", tebligatKisa:"Bildirim var",
 hizmetler:["Yasal adres","Posta ve kargo karşılama","Çağrı karşılama","Toplantı salonu"],
 degerlendirme:"Balgat'ta tamamı kendisine ait bir binada hizmet verdiğini belirtiyor. Sanal ofis paketinde ayda bir gün toplantı salonu kullanımı ve çağrı karşılama yer alıyor.",
 webSitesi:"https://startupofis.com/", dofollow:false, kaynakUrl:"https://startupofis.com/hizmetlerimiz/ankara-sanal-ofis/", guncellemeTarihi:"Ekim 2026", guncellemeISO:"2026-10-05",
 rozet:"Düşük başlangıç fiyatı",
 artilar:["Yayımlanan aylık fiyat listedeki en düşük fiyat","Ayda 1 gün toplantı salonu kullanımı","Çağrı karşılama hizmeti"],
 dikkat:["Fiyat bilgisi güncelliğini sitede kontrol edin","Tek lokasyon (Balgat)"]
},
{
 ilSlug:"ankara", sira:4, slug:"open-ofis", ad:"Open Ofis", semt:"Ankara",
 adres:"Yayımlanmamış",
 aylikFiyat:"Yıllık 7.000 TL + KDV", aylikMin:null, fiyatGosterim:"Yıllık 7.000 TL + KDV", fiyatDogrulandi:false, toplantiOdasi:"Belirtilmemiş", tebligatBildirimi:"Belirtilmemiş",
 toplantiOdasiKisa:"Belirtilmemiş", tebligatKisa:"Belirtilmemiş",
 hizmetler:["Yasal adres","Sektöre özel sanal ofis paketleri","Hazır ofis"],
 degerlendirme:"Fiyatını yıllık olarak yayımlıyor. Danışmanlık, mimarlık, yatırım danışmanlığı ve eğitim gibi sektörlere yönelik ayrı sanal ofis anlatımları bulunuyor.",
 webSitesi:"https://www.openofis.tr/", dofollow:false, kaynakUrl:"https://www.openofis.tr/", guncellemeTarihi:"Ekim 2026", guncellemeISO:"2026-10-05",
 rozet:"Yıllık paket",
 artilar:["Yıllık fiyat sitede yayımlanıyor","Sektöre özel paket anlatımları"],
 dikkat:["Adres sitede açıkça belirtilmemiş","Toplantı odası ve tebligat koşulları belirtilmemiş"]
},
{
 ilSlug:"ankara", sira:5, slug:"logos-ofis", ad:"Logos Ofis", semt:"Emek",
 adres:"Emek Mah., Bişkek Cad., MTC Plaza No:125-127 D:16, 06510 Çankaya/Ankara",
 aylikFiyat:"Yayımlanmamış", aylikMin:null, fiyatGosterim:"—", fiyatDogrulandi:false, toplantiOdasi:"Var", tebligatBildirimi:"Belirtilmemiş",
 toplantiOdasiKisa:"Var", tebligatKisa:"Belirtilmemiş",
 hizmetler:["Sanal ofis","Ortak çalışma alanı","Hazır ofis","Toplantı odası"],
 degerlendirme:"Emek'teki MTC Plaza'da sanal ofisin yanında ortak çalışma alanı ve hazır ofis hizmeti de veriyor. Sitesinde sanal ofis fiyatı yayımlanmıyor.",
 webSitesi:"https://logosofis.net/", dofollow:false, kaynakUrl:"https://logosofis.net/", guncellemeTarihi:"Ekim 2026", guncellemeISO:"2026-10-05",
 rozet:"Ortak çalışma alanı",
 artilar:["Sanal ofisin yanında ortak çalışma alanı ve hazır ofis","Emek'te plaza içinde konum"],
 dikkat:["Sanal ofis fiyatı sitede yayımlanmıyor"]
},
{
 ilSlug:"ankara", sira:6, slug:"prestij-ofis", ad:"Prestij Ofis", semt:"Gaziosmanpaşa",
 adres:"No:153/8 Gaziosmanpaşa, Çankaya/Ankara",
 aylikFiyat:"Yayımlanmamış", aylikMin:null, fiyatGosterim:"—", fiyatDogrulandi:false, toplantiOdasi:"Var", tebligatBildirimi:"Belirtilmemiş",
 toplantiOdasiKisa:"Var", tebligatKisa:"Belirtilmemiş",
 hizmetler:["Yasal adres","Çağrı hizmeti","Kargo teslim alma","Hazır ofis ve toplantı alanı"],
 degerlendirme:"Gaziosmanpaşa'da yasal adres, çağrı karşılama ve kargo teslim alma hizmetleri sunuyor. Sitesinde sanal ofis fiyatı yayımlanmıyor.",
 webSitesi:"https://www.prestijofis.com.tr/", dofollow:false, kaynakUrl:"https://www.prestijofis.com.tr/", guncellemeTarihi:"Ekim 2026", guncellemeISO:"2026-10-05",
 rozet:"Çağrı karşılama",
 artilar:["Çağrı karşılama ve kargo teslim alma","Gaziosmanpaşa'da konum"],
 dikkat:["Sanal ofis fiyatı sitede yayımlanmıyor"]
},
{
 ilSlug:"ankara", sira:7, slug:"ankara-sanal-ofis", ad:"Ankara Sanal Ofis", semt:"Çankaya",
 adres:"No:36/6 Çankaya/Ankara",
 aylikFiyat:"Yayımlanmamış", aylikMin:null, fiyatGosterim:"—", fiyatDogrulandi:false, toplantiOdasi:"Belirtilmemiş", tebligatBildirimi:"Belirtilmemiş",
 toplantiOdasiKisa:"Belirtilmemiş", tebligatKisa:"Belirtilmemiş",
 hizmetler:["Yasal adres","Sekreterlik","Paylaşımlı ve hazır ofis"],
 degerlendirme:"Çankaya'da yasal adres ve sekreterlik hizmeti sunuyor; paylaşımlı ve hazır ofis seçenekleri de bulunuyor. Sitesinde sanal ofis fiyatı yayımlanmıyor.",
 webSitesi:"https://www.ankarasanalofis.tr/", dofollow:false, kaynakUrl:"https://www.ankarasanalofis.tr/", guncellemeTarihi:"Ekim 2026", guncellemeISO:"2026-10-05",
 rozet:"Sekreterlik",
 artilar:["Sekreterlik hizmeti","Paylaşımlı ve hazır ofis seçenekleri"],
 dikkat:["Sanal ofis fiyatı sitede yayımlanmıyor","Toplantı odası koşulları belirtilmemiş"]
},
{
 ilSlug:"ankara", sira:8, slug:"regus-ankara", ad:"Regus", semt:"Çeşitli lokasyonlar",
 adres:"Ankara'da birden fazla iş merkezi",
 aylikFiyat:"Günlük fiyatlandırma (sitesinde günlük 64 TL'den başladığı belirtiliyor)", aylikMin:null, fiyatGosterim:"Günlük fiyat", fiyatDogrulandi:false, toplantiOdasi:"Var, ayrı ücretli", tebligatBildirimi:"Posta yönlendirme",
 toplantiOdasiKisa:"Ayrı ücretli", tebligatKisa:"Posta yönlendirme",
 hizmetler:["Sanal ofis adresi","Posta yönlendirme","Sanal posta kutusu","Toplantı odası ve ortak alan erişimi (paket bazlı)"],
 degerlendirme:"Uluslararası bir ağ; Ankara'da birden fazla iş merkezinde sanal ofis sunuyor. Paketler farklı seviyelerde ve fiyatlar günlük bazda gösteriliyor.",
 webSitesi:"https://www.regus.com/tr/tr/ankara/virtual-offices", dofollow:false, kaynakUrl:"https://www.regus.com/tr/tr/ankara/virtual-offices", guncellemeTarihi:"Ekim 2026", guncellemeISO:"2026-10-05",
 rozet:"Çok lokasyonlu",
 artilar:["Ankara'da birden fazla iş merkezi","Uluslararası ağ, farklı paket seviyeleri"],
 dikkat:["Fiyatlar günlük bazda gösteriliyor, aylık toplamı hesaplamak gerekiyor","Toplantı odası ayrı ücretli"]
},
{
 ilSlug:"istanbul", sira:1, slug:"workon-istanbul", ad:"Workon", semt:"İstanbul",
 adres:"Belirtilmemiş",
 aylikFiyat:"590 TL + KDV (yıllık sözleşme)", aylikMin:590, fiyatGosterim:"590 TL + KDV", fiyatDogrulandi:true, toplantiOdasi:"Belirtilmemiş", tebligatBildirimi:"Resmî evrak bildirimi sözleşme kapsamında",
 toplantiOdasiKisa:"Belirtilmemiş", tebligatKisa:"Resmî evrak bildirimi",
 hizmetler:["Yasal iş adresi","Posta ve resmî evrak bildirimi","12 aylık sözleşme"],
 degerlendirme:"Aylık fiyatını ve 12 aylık sözleşme koşulunu sitesinde açıkça yayımlıyor. Fiyatın Eylül 2026'dan itibaren geçerli olduğunu belirtiyor.",
 webSitesi:"https://workon.com.tr", dofollow:false, kaynakUrl:"https://workon.com.tr/blog/sanal-ofis-ucretleri/", guncellemeTarihi:"Ekim 2026", guncellemeISO:"2026-10-05",
 rozet:"Güncel fiyat",
 artilar:["Fiyat ve sözleşme süresi açık","Fiyat güncelleme tarihi belirtilmiş"],
 dikkat:["Yıllık sözleşme zorunlu","Adres sitede belirtilmemiş"]
},
{
 ilSlug:"istanbul", sira:2, slug:"olmadik-ofis-istanbul", ad:"Olmadık Ofis", semt:"Fatih (Balat) / Kadıköy (Caddebostan)",
 adres:"Balat, Hızır Çavuş Mescidi Sk. No:40/A, 34087 Fatih/İstanbul",
 aylikFiyat:"1.000 TL + KDV", aylikMin:1000, fiyatGosterim:"1.000 TL + KDV", fiyatDogrulandi:false, toplantiOdasi:"Toplantı odası erişimi var", tebligatBildirimi:"Posta yönetimi",
 toplantiOdasiKisa:"Toplantı odası var", tebligatKisa:"Posta yönetimi",
 hizmetler:["Yasal iş adresi","Posta ve çağrı yönetimi","Toplantı odası erişimi","Taahhütsüz, aylık kredi kartı ödemesi"],
 degerlendirme:"Avrupa Yakası'nda Balat'ta, Anadolu Yakası'nda Caddebostan'da lokasyonu var. Taahhütsüz aylık ödeme seçeneği sunuyor; yıllık peşin ödemede indirim uyguluyor.",
 webSitesi:"https://olmadikofis.com", dofollow:false, kaynakUrl:"https://olmadikofis.com/istanbul-avrupa-yakasi-balat-sanal-ofis", guncellemeTarihi:"Ekim 2026", guncellemeISO:"2026-10-05",
 rozet:"Taahhütsüz",
 artilar:["İki yakada lokasyon","Aylık ödeme, taahhüt yok","Yıllık peşinde indirim"],
 dikkat:["Balat konumu klasik iş merkezi değil"]
},
{
 ilSlug:"istanbul", sira:3, slug:"login-office-istanbul", ad:"Login Office", semt:"Anadolu Yakası",
 adres:"Belirtilmemiş",
 aylikFiyat:"475 – 5.575 TL / ay (pakete göre)", aylikMin:475, fiyatGosterim:"475 TL'den", fiyatDogrulandi:false, fiyatNotu:"Pakete göre 5.575 TL'ye kadar", toplantiOdasi:"Üst paketlerde aylık 4 saat", tebligatBildirimi:"Kargo desteği",
 toplantiOdasiKisa:"Üst pakette 4 saat", tebligatKisa:"Kargo desteği",
 hizmetler:["Yasal adres","Sekreterya ve çağrı yönlendirme","Üst paketlerde ofis günü ve toplantı odası saati"],
 degerlendirme:"Anadolu Yakası'nda hizmet veriyor. Paket aralığı geniş; üst paketlerde aylık ofis kullanım günü ve toplantı odası saati dahil.",
 webSitesi:"https://www.loginoffice.com.tr", dofollow:false, kaynakUrl:"https://www.loginoffice.com.tr/sanal-ofis-fiyatlari/", guncellemeTarihi:"Ekim 2026", guncellemeISO:"2026-10-05",
 rozet:"Anadolu Yakası",
 artilar:["Fiyat aralığı yayımlanmış","Toplantı odası saati dahil paketler"],
 dikkat:["Adres sitede net değil","KDV durumu belirtilmemiş"]
},
{
 ilSlug:"istanbul", sira:4, slug:"mukellef-istanbul", ad:"Mükellef", semt:"Ritim İstanbul",
 adres:"Ritim İstanbul iş merkezi",
 aylikFiyat:"Yıllık 9.999 TL + KDV", aylikMin:null, fiyatGosterim:"Yıllık 9.999 TL + KDV", fiyatDogrulandi:false, toplantiOdasi:"Belirtilmemiş", tebligatBildirimi:"Posta karşılama",
 toplantiOdasiKisa:"Belirtilmemiş", tebligatKisa:"Posta karşılama",
 hizmetler:["Yasal iş adresi","Posta karşılama","Stopajsız fatura"],
 degerlendirme:"Ritim İstanbul'da yasal adres sunuyor; fiyatı yıllık olarak yayımlıyor.",
 webSitesi:"https://mukellef.co/tr/sanal-ofis/", dofollow:false, kaynakUrl:"https://mukellef.co/tr/sanal-ofis/", guncellemeTarihi:"Ekim 2026", guncellemeISO:"2026-10-05",
 rozet:"Yıllık paket",
 artilar:["Yıllık fiyat yayımlanmış"],
 dikkat:["Sitede birden fazla fiyat gösterimi var; teklifte netleştirin"]
},
{
 ilSlug:"istanbul", sira:5, slug:"workoffice-istanbul", ad:"WorkOffice", semt:"İstanbul",
 adres:"Belirtilmemiş",
 aylikFiyat:"95 TL + KDV'den (Avantage); 1.600 – 8.500 TL + KDV üst paketler", aylikMin:95, fiyatGosterim:"95 TL + KDV'den", fiyatDogrulandi:false, fiyatNotu:"Üst paketler 1.600 – 8.500 TL + KDV", toplantiOdasi:"Üst paketlerde", tebligatBildirimi:"Adli ve idari tebligatlar dahil tüm posta teslim alınıyor",
 toplantiOdasiKisa:"Üst paketlerde", tebligatKisa:"Tüm posta teslim",
 hizmetler:["Yasal adres","Posta, kargo, kurye takibi ve bildirimi","Sekreterya (üst paketler)"],
 degerlendirme:"Dört kademeli paket yapısı var. Adli ve idari tebligatların teslim alındığını açıkça belirtiyor.",
 webSitesi:"https://www.workoffice.com.tr/sanal-ofis", dofollow:false, kaynakUrl:"https://www.workoffice.com.tr/sanal-ofis", guncellemeTarihi:"Ekim 2026", guncellemeISO:"2026-10-05",
 rozet:"Kademeli paket",
 artilar:["Tebligat kapsamı açık","Düşük giriş fiyatı"],
 dikkat:["Giriş fiyatı kampanyalı olabilir, güncelliğini kontrol edin"]
},
{
 ilSlug:"istanbul", sira:6, slug:"is-ofis-istanbul", ad:"iş Ofis", semt:"İstanbul",
 adres:"Belirtilmemiş",
 aylikFiyat:"125 TL + KDV (1 yıllık sözleşme)", aylikMin:125, fiyatGosterim:"125 TL + KDV", fiyatDogrulandi:false, toplantiOdasi:"Belirtilmemiş", tebligatBildirimi:"Belirtilmemiş",
 toplantiOdasiKisa:"Belirtilmemiş", tebligatKisa:"Belirtilmemiş",
 hizmetler:["Yasal adres","Sekreterya"],
 degerlendirme:"Yasal adres ve sekreterya hizmeti veriyor; fiyatın 1 yıllık sözleşme için geçerli olduğunu belirtiyor.",
 webSitesi:"https://www.isofis.com/", dofollow:false, kaynakUrl:"https://www.isofis.com/", guncellemeTarihi:"Ekim 2026", guncellemeISO:"2026-10-05",
 rozet:"Düşük giriş fiyatı",
 artilar:["Fiyat yayımlanmış"],
 dikkat:["Fiyat bilgisi eski olabilir","Adres sitede belirtilmemiş"]
},
{
 ilSlug:"izmir", sira:1, slug:"regus-izmir", ad:"Regus", semt:"Bayraklı (Folkart Towers)",
 adres:"Folkart Towers, Adalet Mah. Kat:31, 35530 Bayraklı/İzmir",
 aylikFiyat:"220 TL'den (İş adresi) · 520 TL'den (Sanal Ofis) · 1.050 TL'den (Plus)", aylikMin:220, fiyatGosterim:"220 TL'den", fiyatDogrulandi:false, fiyatNotu:"Sanal Ofis 520 TL, Plus 1.050 TL'den", toplantiOdasi:"Plus pakette günlük toplantı odası", tebligatBildirimi:"Posta yönetimi",
 toplantiOdasiKisa:"Plus'ta günlük oda", tebligatKisa:"Posta yönetimi",
 hizmetler:["Resmî belgelerde kullanılabilir iş adresi","Posta yönetimi","Telefon cevaplama (Sanal Ofis paketi)","Plus'ta ayda 5 gün masa kullanımı"],
 degerlendirme:"Folkart Towers'ta üç kademeli sanal ofis paketi sunuyor. Uluslararası ağın business lounge'larına erişim üst paketlere dahil.",
 webSitesi:"https://www.regus.com/tr-tr/turkey/izmir/virtual-offices", dofollow:false, kaynakUrl:"https://www.regus.com/tr-tr/turkey/izmir/virtual-offices", guncellemeTarihi:"Ekim 2026", guncellemeISO:"2026-10-05",
 rozet:"Kademeli paket",
 artilar:["Üç paket seviyesi","Uluslararası ağ"],
 dikkat:["Toplantı odası yalnızca Plus pakette dahil"]
},
{
 ilSlug:"izmir", sira:2, slug:"ofis-arti-izmir", ad:"Ofis Artı (WorkPoint)", semt:"Bayraklı (Folkart Towers)",
 adres:"Folkart Towers, Bayraklı/İzmir",
 aylikFiyat:"480 TL'den", aylikMin:480, fiyatGosterim:"480 TL'den", fiyatDogrulandi:false, toplantiOdasi:"Ek ücretle", tebligatBildirimi:"Posta takibi",
 toplantiOdasiKisa:"Ek ücretle", tebligatKisa:"Posta takibi",
 hizmetler:["Yasal adres","Posta takibi","Sekreterlik ve çağrı yönetimi","Paylaşımlı ofis"],
 degerlendirme:"13 ilde lokasyonu olan bir ağın İzmir'deki tek adresi Folkart Towers. Toplantı odaları ek ücretle kullanılıyor.",
 webSitesi:"https://ofisarti.com.tr/izmir-sanal-ofis", dofollow:false, kaynakUrl:"https://ofisarti.com.tr/izmir-sanal-ofis", guncellemeTarihi:"Ekim 2026", guncellemeISO:"2026-10-05",
 rozet:"Çok şehirli ağ",
 artilar:["Fiyat yayımlanmış","Paylaşımlı ofis seçeneği"],
 dikkat:["Toplantı odası ek ücretli"]
},
{
 ilSlug:"izmir", sira:3, slug:"endless-office-izmir", ad:"Endless Office", semt:"Bayraklı (Folkart Towers)",
 adres:"Folkart Towers, Bayraklı/İzmir",
 aylikFiyat:"12.000 TL + KDV'den (min. 1 yıl)", aylikMin:12000, fiyatGosterim:"12.000 TL + KDV", fiyatDogrulandi:false, fiyatNotu:"Min. 1 yıl", toplantiOdasi:"Belirtilmemiş", tebligatBildirimi:"Posta takibi",
 toplantiOdasiKisa:"Belirtilmemiş", tebligatKisa:"Posta takibi",
 hizmetler:["Yasal adres (Karşıyaka Vergi Dairesi)","Posta takibi","Farklı paket seçenekleri"],
 degerlendirme:"Folkart Towers'ta üst segment bir paket sunuyor. Bağlı vergi dairesini (Karşıyaka) ve minimum sözleşme süresini açıkça belirtiyor.",
 webSitesi:"https://endlessoffice.com/izmir-sanal-ofis", dofollow:false, kaynakUrl:"https://endlessoffice.com/izmir-sanal-ofis", guncellemeTarihi:"Ekim 2026", guncellemeISO:"2026-10-05",
 rozet:"Vergi dairesi belirtilmiş",
 artilar:["Bağlı vergi dairesi açık","Sözleşme koşulu açık"],
 dikkat:["Listedeki en yüksek fiyat","Minimum 1 yıl sözleşme"]
},
{
 ilSlug:"izmir", sira:4, slug:"center-office-izmir", ad:"Center Office", semt:"Bayraklı",
 adres:"Bayraklı/İzmir",
 aylikFiyat:"Aylık 300 TL (eski kayıt, güncelliğini doğrulayın)", aylikMin:null, fiyatGosterim:"—", fiyatDogrulandi:false, toplantiOdasi:"Belirtilmemiş", tebligatBildirimi:"Belirtilmemiş",
 toplantiOdasiKisa:"Belirtilmemiş", tebligatKisa:"Belirtilmemiş",
 hizmetler:["Yasal adres"],
 degerlendirme:"Bayraklı'da sanal ofis adresi sunuyor. Sitedeki fiyat bilgisi eski tarihli olabilir.",
 webSitesi:"https://www.centeroffice.com.tr/sanal-ofis-fiyatlari/", dofollow:false, kaynakUrl:"https://www.centeroffice.com.tr/sanal-ofis-fiyatlari/", guncellemeTarihi:"Ekim 2026", guncellemeISO:"2026-10-05",
 rozet:"Bayraklı",
 artilar:["Bayraklı iş merkezinde adres"],
 dikkat:["Fiyat bilgisi güncel olmayabilir"]
},
{
 ilSlug:"bursa", sira:1, slug:"regus-bursa", ad:"Regus", semt:"Osmangazi",
 adres:"Fethiye Sanayi Cad. No:263 Kat:3, 16140 Bursa",
 aylikFiyat:"190 TL'den (İş adresi) · 420 TL'den (Sanal Ofis) · 780 TL'den (Plus)", aylikMin:190, fiyatGosterim:"190 TL'den", fiyatDogrulandi:false, fiyatNotu:"Sanal Ofis 420 TL, Plus 780 TL'den", toplantiOdasi:"Plus pakette günlük toplantı odası", tebligatBildirimi:"Posta yönetimi",
 toplantiOdasiKisa:"Plus'ta günlük oda", tebligatKisa:"Posta yönetimi",
 hizmetler:["Resmî belgelerde kullanılabilir iş adresi","Posta yönetimi","Telefon cevaplama (Sanal Ofis paketi)","Plus'ta ayda 5 gün masa kullanımı"],
 degerlendirme:"Fatih Sultan Mehmet Bulvarı lokasyonunda üç kademeli paket sunuyor.",
 webSitesi:"https://www.regus.com/tr-tr/turkey/bursa/virtual-offices", dofollow:false, kaynakUrl:"https://www.regus.com/tr-tr/turkey/bursa/virtual-offices", guncellemeTarihi:"Ekim 2026", guncellemeISO:"2026-10-05",
 rozet:"Kademeli paket",
 artilar:["Üç paket seviyesi","Uluslararası ağ"],
 dikkat:["Toplantı odası yalnızca Plus pakette dahil"]
},
{
 ilSlug:"bursa", sira:2, slug:"ofis-arti-bursa", ad:"Ofis Artı (WorkPoint)", semt:"Bursa",
 adres:"Belirtilmemiş",
 aylikFiyat:"480 TL'den", aylikMin:480, fiyatGosterim:"480 TL'den", fiyatDogrulandi:false, toplantiOdasi:"Ek ücretle", tebligatBildirimi:"Posta takibi",
 toplantiOdasiKisa:"Ek ücretle", tebligatKisa:"Posta takibi",
 hizmetler:["Yasal adres","Posta takibi","Sekreterlik"],
 degerlendirme:"Çok şehirli bir ağın Bursa'daki lokasyonu; fiyatını yayımlıyor.",
 webSitesi:"https://ofisarti.com.tr/bursa-sanal-ofis", dofollow:false, kaynakUrl:"https://ofisarti.com.tr/bursa-sanal-ofis", guncellemeTarihi:"Ekim 2026", guncellemeISO:"2026-10-05",
 rozet:"Çok şehirli ağ",
 artilar:["Fiyat yayımlanmış"],
 dikkat:["Adres sitede net değil","Toplantı odası ek ücretli"]
},
{
 ilSlug:"bursa", sira:3, slug:"bursa-office", ad:"Bursa Office", semt:"Osmangazi",
 adres:"Yeni Karaman Mah. Sanayi Cad. No:150/A Osmangazi/Bursa",
 aylikFiyat:"Yayımlanmamış", aylikMin:null, fiyatGosterim:"—", fiyatDogrulandi:false, toplantiOdasi:"Var", tebligatBildirimi:"Belirtilmemiş",
 toplantiOdasiKisa:"Var", tebligatKisa:"Belirtilmemiş",
 hizmetler:["Yasal adres","Toplantı odası","Aynı gün kullanım"],
 degerlendirme:"Osmangazi'de sanal ofis ve toplantı odası hizmeti veriyor; sözleşme günü adresin kullanılabildiğini belirtiyor.",
 webSitesi:"https://bursaoffice.com/", dofollow:false, kaynakUrl:"https://bursaoffice.com/", guncellemeTarihi:"Ekim 2026", guncellemeISO:"2026-10-05",
 rozet:"Aynı gün adres",
 artilar:["Toplantı odası var","Adres açık"],
 dikkat:["Fiyat yayımlanmıyor"]
},
{
 ilSlug:"bursa", sira:4, slug:"office-16-bursa", ad:"Office 16", semt:"Nilüfer",
 adres:"Konak Mah. Badem (120) Sk. Yılmar Plaza No:2 Kat:4 D:4 Nilüfer/Bursa",
 aylikFiyat:"Yayımlanmamış", aylikMin:null, fiyatGosterim:"—", fiyatDogrulandi:false, toplantiOdasi:"Var", tebligatBildirimi:"Posta yönetimi",
 toplantiOdasiKisa:"Var", tebligatKisa:"Posta yönetimi",
 hizmetler:["Yasal adres","Posta yönetimi","Telefon hizmeti","Hazır ofis"],
 degerlendirme:"Nilüfer'de Yılmar Plaza'da sanal ofis ve hazır ofis hizmeti veriyor.",
 webSitesi:"https://office16.tr/", dofollow:false, kaynakUrl:"https://office16.tr/", guncellemeTarihi:"Ekim 2026", guncellemeISO:"2026-10-05",
 rozet:"Nilüfer",
 artilar:["Adres açık","Hazır ofis seçeneği"],
 dikkat:["Fiyat yayımlanmıyor"]
},
{
 ilSlug:"bursa", sira:5, slug:"campus-plus-bursa", ad:"Campus+", semt:"Nilüfer",
 adres:"Üçevler Mah. Ersan Sk. No:8/A Nilüfer/Bursa",
 aylikFiyat:"Yayımlanmamış", aylikMin:null, fiyatGosterim:"—", fiyatDogrulandi:false, toplantiOdasi:"Belirtilmemiş", tebligatBildirimi:"Kargo karşılama",
 toplantiOdasiKisa:"Belirtilmemiş", tebligatKisa:"Kargo karşılama",
 hizmetler:["Yasal adres","Kargo karşılama","Sekreterya ve sabit telefon"],
 degerlendirme:"Nilüfer'de sabit adres, kargo karşılama ve sekreterya hizmeti sunuyor.",
 webSitesi:"https://www.campusplus.com.tr/sanal-ofis/", dofollow:false, kaynakUrl:"https://www.campusplus.com.tr/sanal-ofis/", guncellemeTarihi:"Ekim 2026", guncellemeISO:"2026-10-05",
 rozet:"Sekreterya",
 artilar:["Sabit telefon ve sekreterya","Adres açık"],
 dikkat:["Fiyat yayımlanmıyor"]
},
{
 ilSlug:"bursa", sira:6, slug:"is-ofis-bursa", ad:"iş Ofis", semt:"Bursa",
 adres:"Belirtilmemiş",
 aylikFiyat:"125 TL + KDV (1 yıllık sözleşme)", aylikMin:125, fiyatGosterim:"125 TL + KDV", fiyatDogrulandi:false, toplantiOdasi:"Belirtilmemiş", tebligatBildirimi:"Belirtilmemiş",
 toplantiOdasiKisa:"Belirtilmemiş", tebligatKisa:"Belirtilmemiş",
 hizmetler:["Yasal adres","Sekreterya"],
 degerlendirme:"İstanbul ve Bursa'da şubesi var; fiyatın 1 yıllık sözleşme için geçerli olduğunu belirtiyor.",
 webSitesi:"https://www.isofis.com/", dofollow:false, kaynakUrl:"https://www.isofis.com/", guncellemeTarihi:"Ekim 2026", guncellemeISO:"2026-10-05",
 rozet:"Düşük giriş fiyatı",
 artilar:["Fiyat yayımlanmış"],
 dikkat:["Fiyat bilgisi eski olabilir","Adres sitede belirtilmemiş"]
}
];
