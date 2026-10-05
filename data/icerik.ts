export type Soru = { soru: string; cevap: string };
export type Bolum = { baslik: string; paragraflar: string[] };
export type Semt = { ad: string; aciklama: string; eslesme: string[] };
export type IlIcerik = { giris: string[]; semtler: Semt[]; rehberMetni?: string; sss: Soru[] };

export const site = {
  ad: "Sanal Ofis Rehberi",
  alanAdi: "sanalofisrehberi.com",
  url: "https://sanalofisrehberi.com",
  dil: "tr",
  ogLocale: "tr_TR",
  yayinTarihi: "2026-10-05",
  sonGuncelleme: "2026-10-05",
  sonGuncellemeMetin: "Ekim 2026",
  yil: 2026,
};

export const icerik = {
  anasayfa: {
    meta: {
      title: "Sanal Ofis Firmaları ve Fiyatları – İl İl Rehber",
      description:
        "Türkiye'de il il sanal ofis firmaları: adres, yayımlanmış fiyat, toplantı odası ve tebligat bildirimi bilgileri tek tabloda.",
    },
    h1: "İl il sanal ofis firmaları ve fiyatları",
    heroAciklama:
      "Firmaların kendi sitelerinde yayımladığı fiyat, adres ve hizmet bilgileri il il tek tabloda.",
    haritaBaslik: "Türkiye il haritası",
    haritaLinkEtiketi: (il: string, firmaSayisi: number) =>
      `${il}: ${firmaSayisi} sanal ofis firması`,
    haritaYakinda: "Yakında",
    haritaAktif: (firmaSayisi: number) => `${firmaSayisi} firma`,
    arama: {
      etiket: "İl ara",
      placeholder: "Örn. Ankara",
      sonucYok: "Bu adla eşleşen il bulunamadı.",
      yakinda: "Yakında",
      firmaSayisi: (firmaSayisi: number) => `${firmaSayisi} firma`,
    },
    illerBaslik: "İllere göre sanal ofis",
    ilFirmaSayisi: (firmaSayisi: number) => `${firmaSayisi} firma karşılaştırıldı`,
    fiyatYok: "Yayımlanmış aylık fiyat yok",
    ilKartLink: "Firmaları karşılaştır →",
    yakindaBaslik: "Yakında eklenecek iller",
    yakindaEtiket: "Yakında",
    sanalOfisNedirBaslik: "Sanal ofis nedir?",
    seoMetni: `## Türkiye'de Sanal Ofis Fiyatları Nasıl Karşılaştırılır?

Bu rehberde {ilSayisi} ilden {toplamFirma} sanal ofis sağlayıcısının fiyatını, adresini ve hizmet kapsamını tek tabloda topladık. Firmalar fiyatlarını farklı biçimlerde yayımlıyor: bazıları aylık, bazıları yıllık, bazıları günlük fiyat gösteriyor; bir kısmı ise fiyat yayımlamıyor ve teklif üzerinden çalışıyor. Bu yüzden il sayfalarında her firmanın fiyatını kendi yayımladığı biçimde ve kaynağıyla birlikte gösteriyoruz.

### Fiyatı karşılaştırırken nelere bakmalı?

- Fiyatın aylık mı yıllık mı olduğu ve KDV'nin dahil olup olmadığı
- Tebligatın aynı gün mü bildirildiği
- Toplantı odasının pakete dahil mi, ek ücretli mi olduğu
- Minimum sözleşme süresi ve erken fesih koşulları
- Adreste gün boyu resepsiyon bulunup bulunmadığı

### Hangi şehirde sanal ofis almalıyım?

Sanal ofis adresinin yaşadığınız şehirde olması gerekmez. Müşterileriniz ağırlıklı olarak hangi şehirdeyse ya da hangi şehrin adresi işiniz için daha güçlü bir izlenim bırakıyorsa orayı seçebilirsiniz. Ankara, kamu kurumlarıyla çalışan şirketler için; İstanbul, ticari ağırlık ve müşteri yoğunluğu için; İzmir ve Bursa ise bölgesel pazarda faaliyet gösteren şirketler için sık tercih ediliyor.

Seçim yapmadan önce ayrıntılı kontrol listesi için [sanal ofis seçim rehberimize](/sanal-ofis-secim-rehberi) göz atabilirsiniz.`,
    sanalOfisNedir: [
      "Sanal ofis, fiziksel bir çalışma alanı kiralamadan şirketiniz için yasal iş adresi edinmenizi sağlayan hizmettir. Bu adres vergi levhanızda, ticaret sicil kaydınızda ve faturalarınızda yer alır. Adınıza gelen posta, kargo ve tebligatlar adresteki resepsiyonda teslim alınır ve size bildirilir. Çoğu sağlayıcı, yüz yüze görüşmeler için saatlik toplantı odası da sunar.",
      "Fiyatlar şehre, binanın konumuna ve pakete dahil hizmetlere göre değişir. Bu rehberde her il için firmaların kendi sitelerinde yayımladığı fiyatları, adresleri ve hizmetleri tek tabloda topluyoruz.",
    ],
    nedirKartlari: [
      { baslik: "Yasal iş adresi", aciklama: "Vergi levhası, ticaret sicil ve faturalarda kullanılır." },
      { baslik: "Tebligat ve posta takibi", aciklama: "Gelen evrak resepsiyonda teslim alınır, size bildirilir." },
      { baslik: "Toplantı odası", aciklama: "Yüz yüze görüşmeler için saatlik oda kiralanabilir." },
    ],
    karsilastirmaKartlari: [
      { baslik: "Aylık mı, yıllık mı?", aciklama: "Fiyatın hangi süre için geçerli olduğunu kontrol edin." },
      { baslik: "KDV", aciklama: "KDV'nin fiyata dahil olup olmadığını kontrol edin." },
      { baslik: "Tebligat bildirimi", aciklama: "Gelen resmi evrakın aynı gün bildirilip bildirilmediğini sorun." },
      { baslik: "Toplantı odası", aciklama: "Odanın pakete dahil mi, ek ücretli mi olduğunu öğrenin." },
      { baslik: "Sözleşme süresi", aciklama: "Minimum süreyi ve erken fesih koşullarını yazılı isteyin." },
      { baslik: "Resepsiyon", aciklama: "Adreste gün boyu resepsiyon bulunup bulunmadığını kontrol edin." },
    ],
    sssBaslik: "Sıkça sorulan sorular",
    sss: [
      {
        soru: "Sanal ofis yasal mı?",
        cevap:
          "Evet. Şirket kuruluşunda ve vergi mükellefiyetinde aranan şey, tebligat alınabilen ve vergi dairesinin yoklama yapabildiği gerçek bir iş adresidir. Sanal ofis sözleşmesi bu adresi kullanma hakkınızı belgeler.",
      },
      {
        soru: "Sanal ofis ile hazır ofis arasındaki fark nedir?",
        cevap:
          "Sanal ofiste yalnızca adres ve adrese bağlı hizmetler (tebligat, posta, gerektiğinde toplantı odası) vardır, çalışma alanı yoktur. Hazır ofiste ise mobilyalı, kullanıma hazır bir oda kiralarsınız ve her gün orada çalışabilirsiniz.",
      },
      {
        soru: "Sanal ofis ücreti gider olarak yazılabilir mi?",
        cevap:
          "Evet. Sanal ofis bedeli faturalı bir hizmet bedelidir ve şirketin gideri olarak kaydedilir. Klasik kiralamadaki kira stopajı sanal ofiste söz konusu değildir.",
      },
      {
        soru: "Hangi faaliyetler sanal ofise uygun değildir?",
        cevap:
          "İmalat, depolama, perakende mağaza ve işyeri açma ruhsatı gerektiren fiziksel hizmetler sanal ofis adresiyle yürütülemez. Danışmanlık, yazılım, e-ticaret ve serbest meslek gibi faaliyetler için uygundur.",
      },
      {
        soru: "Sanal ofis sözleşmesi bitince ne yapmam gerekir?",
        cevap:
          "Sözleşme bittiğinde şirketinizin yeni adresini ticaret siciline tescil ettirmeniz ve vergi dairesine bildirmeniz gerekir. Bunu yapmazsanız tebligatlar kullanmadığınız adrese gitmeye devam eder.",
      },
      {
        soru: "Bu rehberdeki fiyatlar güncel mi?",
        cevap:
          "Fiyatlar, firmaların kendi web sitelerinde yayımladığı bilgilerden derlenir ve her kaydın yanında bilginin alındığı tarih belirtilir. Fiyatlar değişebileceği için teklif almadan önce firmanın sitesini kontrol etmenizi öneririz.",
      },
    ] satisfies Soru[],
  },

  ilSayfasi: {
    meta: {
      title: (il: string, yil: number) =>
        `${il} Sanal Ofis Firmaları ve Fiyatları (${yil})`,
      description: (il: string, firmaSayisi: number, tarih: string) =>
        `${il} sanal ofis firmaları: adres, aylık fiyat, toplantı odası ve tebligat bildirimi karşılaştırması. ${firmaSayisi} firma, ${tarih} bilgileri.`,
    },
    h1: (il: string) => `${il} sanal ofis firmaları ve fiyatları`,
    breadcrumbAnasayfa: "Ana sayfa",
    breadcrumbIl: (il: string) => `${il} Sanal Ofis`,
    breadcrumbEtiket: "Sayfa konumu",
    sonGuncelleme: (tarih: string) => `Son güncelleme: ${tarih}`,
    karsilastirildi: (firmaSayisi: number) => `${firmaSayisi} firma karşılaştırıldı`,
    nasilSiraladikLink: "Nasıl sıraladık?",
    hizliBakisBaslik: "Hızlı bakış",
    detaylar: "Detaylar ↓",
    siraRozeti: (sira: number) => `${sira}. sırada`,
    oneCikan: "Öne çıkan",
    tabloBaslik: "Karşılaştırma tablosu",
    tabloSutunlar: {
      firma: "Firma",
      fiyat: "Aylık fiyat",
      semt: "Semt",
      toplanti: "Toplantı odası",
      tebligat: "Tebligat",
      buton: "Web sitesi",
    },
    tabloButon: "Siteyi gör",
    tabloEksikNot: "— : Firma bu bilgiyi sitesinde yayımlamıyor.",
    tabloButonAria: (firma: string) => `Siteyi gör: ${firma} (yeni sekmede açılır)`,
    kart: {
      sira: (sira: string) => `#${sira}`,
      kaynakOnek: "Kaynak:",
      kaynakLink: "firmanın sitesi",
      kaynakTarih: (tarih: string) => `, ${tarih}`,
      oneCikanlar: "Öne çıkanlar",
      dikkat: "Dikkat edilmesi gerekenler",
      detaylar: {
        adres: "Adres",
        semt: "Semt",
        toplanti: "Toplantı odası",
        tebligat: "Tebligat bildirimi",
      },
      degerlendirme: "Değerlendirme",
      ziyaret: "Siteyi ziyaret et →",
      ziyaretAria: (firma: string) => `Siteyi ziyaret et: ${firma} (yeni sekmede açılır)`,
    },
    nasilSiraladikBaslik: "Nasıl sıraladık?",
    semtlerBaslik: (ilBulunmaHali: string) =>
      `${ilBulunmaHali} sanal ofis için öne çıkan semtler`,
    semtlerKisa: "Öne çıkan semtler",
    semtFirmaSayisi: (n: number) => `Bu rehberde ${n} firma`,
    sssBaslik: "Sıkça sorulan sorular",
    digerIllerBaslik: "Diğer iller",
    icindekiler: "Bu sayfada",
    sidebarNot:
      "Fiyatlar firmaların sitelerinden derlenmiştir. Güncel bilgi için firmayla iletişime geçin.",
    digerIllerBos:
      "Diğer iller için sayfalar hazırlanıyor. Bir ilde en az üç firmanın bilgisi derlendiğinde o ilin sayfası yayımlanır.",
    anasayfayaDon: "Tüm iller ve harita →",
    itemListAdi: (il: string) => `${il} sanal ofis firmaları`,
  },

  olcutler: [
    "Fiyatını sitesinde açıkça yayımlaması",
    "Adreste resepsiyon ve tebligat bildirimi bulunması",
    "Saatlik toplantı veya görüşme odası sunması",
    "Adresin iş merkezinde ve ulaşımı kolay bir konumda olması",
  ],
  olcutlerNot:
    "Bilgiler firmaların kendi web sitelerinden derlenmiştir ve değişebilir. Güncel fiyat ve koşullar için firmaların sitelerini kontrol ediniz.",

  iller: {
    ankara: {
      giris: [
        "Ankara'da sanal ofis sağlayıcılarının büyük kısmı Çankaya'da toplanıyor. Dumlupınar Bulvarı (Eskişehir Yolu) çevresindeki yeni iş merkezleri, Balgat, Kızılay ve Gaziosmanpaşa en çok tercih edilen bölgeler. Kamu kurumlarına, vergi dairelerine ve mali müşavirlere yakınlık, şirket adresinin Çankaya'da olmasını pratik hale getiriyor.",
        "Aşağıda Ankara'da sanal ofis hizmeti veren firmaları adres, yayımlanmış fiyat, toplantı odası ve tebligat bildirimi açısından karşılaştırdık. Bazı firmalar fiyatını aylık, bazıları yıllık ya da günlük olarak gösteriyor; bazıları ise fiyat yayımlamıyor ve teklif üzerinden çalışıyor.",
      ],
      semtler: [
        {
          ad: "Dumlupınar Bulvarı / Söğütözü",
          aciklama:
            "Yeni nesil iş merkezlerinin bulunduğu, M2 metro hattına ve Eskişehir Yolu'na yakın bölge. Kurumsal görünüm ve resepsiyonlu plaza adresi arayanlar için öne çıkıyor.",
          eslesme: ["Mahall", "Dumlupınar", "Söğütözü"],
        },
        {
          ad: "Balgat",
          aciklama:
            "Uygun fiyatlı sanal ofis seçeneklerinin yoğunlaştığı, Çankaya'nın batısındaki iş bölgesi. Yayımlanan en düşük fiyatların çoğu bu bölgedeki firmalara ait.",
          eslesme: ["Balgat"],
        },
        {
          ad: "Kızılay",
          aciklama:
            "Şehrin merkezi; toplu taşımayla her yerden kolay ulaşılıyor. Eski iş hanları ile yenilenmiş binalar bir arada.",
          eslesme: ["Kızılay"],
        },
        {
          ad: "Gaziosmanpaşa ve Emek",
          aciklama:
            "Daha sakin, plaza ve iş merkezlerinin bulunduğu yerleşik iş bölgeleri. Elçiliklere ve kurumsal ofislere yakın.",
          eslesme: ["Gaziosmanpaşa", "Emek"],
        },
      ],
      rehberMetni: `## Ankara Sanal Ofis Fiyatları 2026

Bu rehberde yer alan {firmaSayisi} firmanın {fiyatYayimlayanSayisi} tanesi fiyatını sitesinde yayımlıyor. Aylık fiyat yayımlayan firmalar arasında en düşük başlangıç fiyatı {enDusukFiyat}. Fiyatlar semte, binanın niteliğine ve pakete dahil hizmetlere göre değişiyor; aynı fiyat aralığındaki iki paket çok farklı hizmetler içerebiliyor.

Karşılaştırma yaparken sadece aylık bedele bakmak yanıltıcı olur. Bazı firmalar fiyatı yıllık peşin ödeme için gösteriyor, bazıları KDV'yi fiyata dahil etmiyor, bazıları da toplantı odası ve telefon karşılama gibi hizmetleri ayrıca ücretlendiriyor. [Teklif alırken](/sanal-ofis-secim-rehberi) fiyatın hangi süre için geçerli olduğunu, KDV'nin dahil olup olmadığını ve pakete neyin dahil olduğunu yazılı olarak isteyin.

### Fiyatı etkileyen başlıca kalemler

- Adresin bulunduğu semt ve bina: Dumlupınar Bulvarı ve Söğütözü'ndeki yeni iş merkezleri, Balgat ve Kızılay'daki seçeneklere göre genellikle daha yüksek fiyatlı.
- Resepsiyon ve tebligat: Adreste gün boyu resepsiyon bulunması ve tebligatların aynı gün bildirilmesi fiyata yansıyor.
- Toplantı odası: Bazı paketlerde aylık belirli saat dahil, bazılarında saatlik ücretle kiralanıyor.
- Sözleşme süresi: Yıllık sözleşmeler aylık ödemeye göre genellikle daha uygun.

## Ankara'da Sanal Ofis Nasıl Kiralanır?

Ankara'da sanal ofis kiralama süreci birkaç gün içinde tamamlanabiliyor. Önce faaliyet alanınızın sanal ofise uygun olup olmadığını sağlayıcıyla birlikte kontrol edersiniz; imalat, depolama ve ruhsat gerektiren fiziksel hizmetler bu modele uygun değil. Ardından kimlik, ikametgâh ve şirket bilgilerinizle sözleşme imzalanır ve sözleşme muhasebecinize iletilir.

Yeni şirket kuruyorsanız sözleşme kuruluş evraklarında, mevcut şirketinizi taşıyorsanız adres değişikliği başvurusunda kullanılır. İşe başlama bildiriminin ardından vergi dairesi adreste yoklama yapar ve vergi levhanız sanal ofis adresiyle düzenlenir.

### Vergi dairesi ve yoklama

Adresin bağlı olduğu vergi dairesi semte göre değişir. Çankaya'daki farklı iş bölgeleri farklı vergi dairelerine bağlı olabilir; sözleşmeden önce adresin hangi vergi dairesine bağlı olduğunu sağlayıcıya sorun. Yoklama sırasında yoklama memuru adresteki sözleşmeyi ve yönlendirmeyi kontrol eder; şirket yetkilisine telefonla ulaşılabilmesi önemlidir.

## Ankara'da Sanal Ofis Adresi Hangi Semtte Olmalı?

Semt seçimi, adresi neden kullandığınıza bağlı. Adres yalnızca vergi levhası ve ticaret sicil için gerekiyorsa, Balgat ve Kızılay'daki daha uygun fiyatlı seçenekler yeterli olabilir. Müşterilerinizle yüz yüze görüşecek, kartvizit ve tekliflerde kurumsal bir adres kullanacaksanız Dumlupınar Bulvarı ve Söğütözü'ndeki resepsiyonlu iş merkezleri daha iyi bir ilk izlenim bırakır.

Ulaşım da önemli bir ölçüt. Toplantılarınıza şehir dışından gelen misafirleriniz varsa metroya ve ana arterlere yakın bir adres, görüşmeleri planlamayı kolaylaştırır. Kamu kurumlarıyla düzenli yazışan şirketler için ise Çankaya'daki adresler pratik bir seçim.

## Ankara Sanal Ofis ile Şirket Kuruluşu

Şahıs şirketi, limited şirket ve anonim şirket kuruluşunda Ankara'daki bir sanal ofis adresi yasal iş adresi olarak gösterilebilir. Şehir dışında yaşıyor olmanız engel değil; sözleşme ve belgeler çoğunlukla uzaktan tamamlanıyor, şirketiniz Ankara'da kayıtlı görünürken siz işinizi başka bir şehirden yürütmeye devam edebiliyorsunuz.

Sözleşme sona erdiğinde şirket adresinizi değiştirmeniz gerektiğini unutmayın. Adres değişikliği ticaret siciline tescil ettirilip vergi dairesine bildirilmezse, tebligatlar kullanmadığınız adrese gitmeye devam eder.`,
      sss: [
        {
          soru: "Ankara'da sanal ofis fiyatları ne kadar?",
          cevap:
            "Bu rehberdeki {firmaSayisi} firmanın {fiyatYayimlayanSayisi} tanesi fiyatını yayımlıyor; aylık fiyat yayımlayanlar arasında en düşük başlangıç fiyatı {enDusukFiyat}. Fiyat, semte ve pakete dahil hizmetlere göre değişiyor.",
        },
        {
          soru: "Ankara'da sanal ofis için hangi semt daha uygun?",
          cevap:
            "Adres yalnızca vergi levhası ve ticaret sicil için gerekiyorsa Balgat ve Kızılay'daki uygun fiyatlı seçenekler yeterli olabilir. Müşteri görüşmesi yapacak ve kurumsal bir adres isteyecekseniz Dumlupınar Bulvarı ve Söğütözü'ndeki resepsiyonlu iş merkezleri öne çıkıyor.",
        },
        {
          soru: "Çankaya'daki sanal ofis adresi hangi vergi dairesine bağlı olur?",
          cevap:
            "Çankaya'daki farklı iş bölgeleri farklı vergi dairelerine bağlı olabilir. Sözleşmeden önce adresin bağlı olduğu vergi dairesini sağlayıcıdan yazılı olarak öğrenin.",
        },
        {
          soru: "Ankara dışında yaşıyorum; Ankara'da sanal ofisle şirket kurabilir miyim?",
          cevap:
            "Evet. Sözleşme ve belgeler çoğunlukla uzaktan tamamlanıyor. Şirketiniz Ankara'da kayıtlı görünürken siz işinizi başka bir şehirden yürütebilirsiniz; yoklama sırasında size telefonla ulaşılabilmesi yeterli olabilir.",
        },
        {
          soru: "Ankara'daki sanal ofis paketlerinde toplantı odası dahil mi?",
          cevap:
            "Firmaya göre değişiyor. Bazı firmalar pakete aylık belirli bir saat toplantı odası dahil ediyor, bazıları odayı saatlik ücretle kiralıyor, bazıları ise bu konuda bilgi yayımlamıyor. Karşılaştırma tablosundaki \"Toplantı odası\" sütununa bakabilirsiniz.",
        },
        {
          soru: "Ankara'da sanal ofis kiralamak ne kadar sürer?",
          cevap:
            "Belgeler hazırsa sözleşme genellikle aynı gün imzalanır ve adres kullanılmaya başlanır. Vergi levhası, işe başlama bildiriminin ve vergi dairesi yoklamasının ardından düzenlenir.",
        },
      ],
    },
    istanbul: {
      giris: [
        "İstanbul'da sanal ofis seçenekleri iki yakaya yayılıyor. Avrupa Yakası'nda Şişli, Levent ve Maslak'taki plazalar ile tarihi yarımada; Anadolu Yakası'nda Ataşehir, Kadıköy ve Kozyatağı öne çıkıyor. Fiyatlar, yalnızca yasal adres içeren düşük paketlerden plaza adresli üst paketlere kadar geniş bir aralıkta.",
        "Aşağıda İstanbul'da sanal ofis hizmeti veren firmaları yayımlanmış fiyat, adres ve hizmet kapsamı açısından karşılaştırdık. Bazı firmalar fiyatı aylık, bazıları yıllık gösteriyor; sözleşme süresine ve KDV durumuna dikkat edin.",
      ],
      semtler: [
        {
          ad: "Şişli ve Levent",
          aciklama: "Avrupa Yakası'nın iş merkezi; plaza adresi arayanlar için.",
          eslesme: ["Şişli", "Levent"],
        },
        {
          ad: "Kadıköy ve Ataşehir",
          aciklama: "Anadolu Yakası'nın ofis bölgesi; finans merkezi çevresinde iş merkezleri yoğun.",
          eslesme: ["Kadıköy", "Ataşehir"],
        },
        {
          ad: "Fatih",
          aciklama: "Tarihi yarımada; daha uygun fiyatlı, butik seçenekler.",
          eslesme: ["Fatih"],
        },
      ],
      rehberMetni: `## İstanbul Sanal Ofis Fiyatları 2026

Bu rehberdeki {firmaSayisi} İstanbul firmasının {fiyatYayimlayanSayisi} tanesi fiyatını sitesinde yayımlıyor. Aylık fiyat yayımlayanlar arasında en düşük başlangıç fiyatı {enDusukFiyat}. İstanbul'da fiyat aralığı diğer şehirlere göre çok daha geniş: yalnızca yasal adres içeren giriş paketleri ile plaza adresi, sekreterya ve toplantı odası içeren üst paketler arasında birkaç kat fark olabiliyor.

Düşük giriş fiyatlarına dikkat edin. Bazı paketler kampanyalı fiyatla ya da yıllık peşin ödeme şartıyla gösteriliyor; bazılarında KDV fiyata dahil değil. Teklif alırken fiyatın hangi süre için geçerli olduğunu, KDV'nin dahil olup olmadığını ve tebligat bildiriminin pakete dahil olup olmadığını yazılı olarak isteyin.

### Avrupa Yakası mı, Anadolu Yakası mı?

Adresi yalnızca resmi kayıtlar için kullanacaksanız hangi yakada olduğu çoğu zaman fark etmez. Müşterilerinizle yüz yüze görüşecekseniz, müşterilerinizin ağırlıklı olarak hangi yakada olduğuna göre karar verin. İstanbul'da yakalar arası ulaşım süresi, toplantı planlamasını doğrudan etkiler.

## İstanbul'da Sanal Ofis Adresi Nasıl Seçilir?

Şişli, Levent ve Maslak'taki plazalar Avrupa Yakası'nın kurumsal iş merkezleri; kartvizit ve tekliflerde güçlü bir ilk izlenim bırakır. Anadolu Yakası'nda Ataşehir ve Kozyatağı çevresindeki iş merkezleri aynı ihtiyaca cevap verir. Tarihi yarımada ve Kadıköy'deki butik seçenekler ise daha uygun fiyatlı alternatifler sunar.

Adres seçerken binada gün boyu [resepsiyon](/sanal-ofis-secim-rehberi) bulunup bulunmadığını mutlaka sorun. İstanbul'da tebligat ve kargo yoğunluğu yüksek; gelen evrakın aynı gün mü, haftalık mı bildirildiği, özellikle süreli resmi yazılarda önem taşır.

## İstanbul'da Sanal Ofisle Şirket Kuruluşu

İstanbul'da sanal ofis adresiyle şahıs şirketi, limited şirket ya da anonim şirket kurulabilir. Sözleşme kuruluş evraklarında adres belgesi olarak sunulur; işe başlama bildiriminin ardından vergi dairesi adreste yoklama yapar ve vergi levhanız bu adresle düzenlenir.

Adresin bağlı olduğu vergi dairesi ilçeye ve mahalleye göre değişir. Muhasebecinizin sık çalıştığı vergi dairesiyle aynı yerde olmak işlemleri kolaylaştırabilir; bu yüzden sözleşmeden önce adresin hangi vergi dairesine bağlı olduğunu öğrenin.`,
      sss: [
        {
          soru: "İstanbul'da en uygun sanal ofis fiyatı ne kadar?",
          cevap:
            "Bu rehberde aylık fiyat yayımlayan İstanbul firmaları arasında en düşük başlangıç fiyatı {enDusukFiyat}. En düşük fiyatlar genellikle yalnızca yasal adres içeren giriş paketlerine ait; sekreterya ve toplantı odası ekledikçe fiyat yükseliyor.",
        },
        {
          soru: "İstanbul'da sanal ofis için Avrupa Yakası mı, Anadolu Yakası mı daha mantıklı?",
          cevap:
            "Adres yalnızca resmi kayıtlar içinse fark etmez. Yüz yüze görüşmeler yapacaksanız, müşterilerinizin ağırlıklı olarak bulunduğu yakayı seçmek toplantıları kolaylaştırır.",
        },
        {
          soru: "Plaza adresi ile iş hanı adresi arasında fark var mı?",
          cevap:
            "Resmi açıdan fark yok; ikisi de yasal iş adresi olarak kullanılabilir. Fark, adresin müşterilerde bıraktığı izlenimde ve binadaki hizmetlerde (resepsiyon, toplantı odası) ortaya çıkar.",
        },
        {
          soru: "İstanbul'daki düşük fiyatlı sanal ofis paketlerinde neler eksik olabilir?",
          cevap:
            "Giriş paketlerinde çoğunlukla yalnızca yasal adres ve posta takibi bulunur. Sekreterya, telefon karşılama ve toplantı odası genellikle üst paketlere ya da ek ücrete bağlıdır.",
        },
        {
          soru: "İstanbul'da sanal ofis sözleşmesi kaç ay olmak zorunda?",
          cevap:
            "Firmaya göre değişiyor. Bazı firmalar taahhütsüz aylık ödeme sunarken, bazıları fiyatı yalnızca 12 aylık sözleşme için geçerli kabul ediyor.",
        },
        {
          soru: "İstanbul'daki sanal ofis adresime gelen tebligatlar nasıl bildiriliyor?",
          cevap:
            "Çoğu firma gelen evrakı e-posta, telefon ya da mesajla bildiriyor; bildirimin aynı gün mü yoksa toplu olarak mı yapıldığı firmadan firmaya değişiyor. Süreli resmi yazılar için aynı gün bildirim yapan bir sağlayıcı tercih edin.",
        },
      ],
    },
    izmir: {
      giris: [
        "İzmir'de sanal ofis sağlayıcılarının büyük kısmı Bayraklı'daki yeni iş kulelerinde, özellikle Folkart Towers'ta toplanıyor. Alsancak ve Konak ise şehir merkezine yakınlık arayanlar için alternatif. Aynı binada farklı firmaların çok farklı fiyatlarla hizmet verdiğini görmek mümkün; fark çoğunlukla pakete dahil hizmetlerden kaynaklanıyor.",
        "Aşağıda İzmir'de sanal ofis hizmeti veren firmaları adres, yayımlanmış fiyat ve hizmet kapsamı açısından karşılaştırdık. Bağlı vergi dairesini ve minimum sözleşme süresini sözleşmeden önce mutlaka sorun.",
      ],
      semtler: [
        {
          ad: "Bayraklı",
          aciklama: "İzmir'in yeni iş merkezi; Folkart Towers başta olmak üzere iş kulelerinin bulunduğu bölge.",
          eslesme: ["Bayraklı"],
        },
        {
          ad: "Alsancak ve Konak",
          aciklama: "Şehir merkezi, ulaşımı kolay, köklü iş hanları.",
          eslesme: ["Alsancak", "Konak"],
        },
      ],
      rehberMetni: `## İzmir Sanal Ofis Fiyatları 2026

Bu rehberdeki {firmaSayisi} İzmir firmasının {fiyatYayimlayanSayisi} tanesi fiyatını sitesinde yayımlıyor. Aylık fiyat yayımlayanlar arasında en düşük başlangıç fiyatı {enDusukFiyat}. İzmir'deki fiyat aralığı oldukça geniş; yalnızca iş adresi içeren paketler ile tüm hizmetlerin dahil olduğu üst paketler arasında büyük fark var.

### Aynı binada neden farklı fiyatlar var?

İzmir'deki sanal ofis sağlayıcılarının önemli bir kısmı Bayraklı'daki aynı iş kulelerinde hizmet veriyor. Aynı binadaki iki firma arasındaki fiyat farkı çoğunlukla pakete dahil hizmetlerden kaynaklanıyor: telefon karşılama, toplantı odası saati, ortak alan kullanımı ve minimum sözleşme süresi. Fiyatları karşılaştırmadan önce [paketlerin içeriğini](/sanal-ofis-secim-rehberi) yan yana koyun.

## İzmir'de Sanal Ofis Adresi Nasıl Seçilir?

Bayraklı, İzmir'in yeni iş merkezi; iş kulelerinde bir adres kurumsal görünüm arayan şirketler için güçlü bir seçenek. Alsancak ve Konak ise şehir merkezine yakınlık ve kolay ulaşım isteyenlere uygun. Adresi yalnızca resmi kayıtlar için kullanacaksanız semt farkı fiyatı belirleyen tek unsur olur.

Adresin bağlı olduğu vergi dairesini de sorun. Bayraklı'daki bazı iş kulelerindeki adreslerin hangi vergi dairesine bağlı olduğunu sağlayıcılar sitelerinde belirtiyor; muhasebeciniz için bu bilgi işlemleri planlamayı kolaylaştırır.

## İzmir'de Sanal Ofisle Şirket Kuruluşu

İzmir'de sanal ofis adresiyle şahıs şirketi, limited şirket ya da anonim şirket kurulabilir. Sözleşme kuruluş evraklarında adres belgesi olarak sunulur; işe başlama bildiriminin ardından vergi dairesi yoklama yapar ve vergi levhanız bu adresle düzenlenir.

Üst segment paketlerde minimum sözleşme süresi bir yıl olabiliyor. Şirketinizin ilk yılında adres değiştirme ihtimaliniz varsa, sözleşme süresini ve erken fesih koşullarını baştan netleştirin.`,
      sss: [
        {
          soru: "İzmir'de sanal ofis fiyatları ne kadar?",
          cevap:
            "Bu rehberde aylık fiyat yayımlayan İzmir firmaları arasında en düşük başlangıç fiyatı {enDusukFiyat}. Fiyat, binaya ve pakete dahil hizmetlere göre değişiyor; üst paketler giriş paketlerinin birkaç katı olabiliyor.",
        },
        {
          soru: "Bayraklı'da sanal ofis adresi almak avantajlı mı?",
          cevap:
            "Bayraklı'daki iş kuleleri İzmir'in yeni iş merkezi olduğu için kurumsal bir ilk izlenim bırakır. Adres yalnızca resmi kayıtlar içinse Alsancak ve Konak'taki seçenekler de aynı işi görür.",
        },
        {
          soru: "İzmir'de aynı binada farklı firmaların fiyatları neden farklı?",
          cevap:
            "Fark genellikle pakete dahil hizmetlerden kaynaklanıyor: telefon karşılama, toplantı odası saati, ortak alan kullanımı ve sözleşme süresi. Fiyatı değil, paket içeriğini karşılaştırın.",
        },
        {
          soru: "İzmir'deki sanal ofis adresi hangi vergi dairesine bağlı olur?",
          cevap:
            "Adresin bulunduğu ilçeye ve mahalleye göre değişir. Bazı sağlayıcılar bağlı oldukları vergi dairesini sitelerinde belirtiyor; belirtilmemişse sözleşmeden önce sorun.",
        },
        {
          soru: "İzmir'de sanal ofis için minimum sözleşme süresi var mı?",
          cevap:
            "Bazı firmalarda var. Özellikle üst segment paketlerde minimum bir yıllık sözleşme şartı görülebiliyor; aylık ödeme seçeneği olup olmadığını teklif aşamasında sorun.",
        },
        {
          soru: "İzmir'deki sanal ofis paketlerinde toplantı odası kullanılabiliyor mu?",
          cevap:
            "Çoğu sağlayıcı toplantı odası sunuyor, ama koşullar farklı: bazılarında yalnızca üst pakete dahil, bazılarında ek ücretle kiralanıyor. Karşılaştırma tablosundaki \"Toplantı odası\" sütununa bakabilirsiniz.",
        },
      ],
    },
    bursa: {
      giris: [
        "Bursa'da sanal ofis seçenekleri Nilüfer ve Osmangazi'de yoğunlaşıyor. Nilüfer'deki plaza ve iş merkezleri kurumsal adres arayanlar için, Osmangazi'deki sanayi caddesi çevresi ise üretim bölgelerine yakınlık isteyen firmalar için tercih ediliyor.",
        "Aşağıda Bursa'da sanal ofis hizmeti veren firmaları adres, yayımlanmış fiyat ve hizmet kapsamı açısından karşılaştırdık. Fiyat yayımlamayan firmalardan teklif alırken pakete nelerin dahil olduğunu yazılı olarak isteyin.",
      ],
      semtler: [
        {
          ad: "Nilüfer",
          aciklama: "Bursa'nın yeni iş ve yaşam merkezi; plaza ve iş merkezleri yoğun.",
          eslesme: ["Nilüfer"],
        },
        {
          ad: "Osmangazi",
          aciklama: "Şehrin tarihi merkezi ve ana sanayi caddesi çevresi.",
          eslesme: ["Osmangazi"],
        },
      ],
      rehberMetni: `## Bursa Sanal Ofis Fiyatları 2026

Bu rehberdeki {firmaSayisi} Bursa firmasının {fiyatYayimlayanSayisi} tanesi fiyatını sitesinde yayımlıyor. Aylık fiyat yayımlayanlar arasında en düşük başlangıç fiyatı {enDusukFiyat}. Bursa'da firmaların bir kısmı fiyat yayımlamıyor ve teklif üzerinden çalışıyor; bu firmalardan [teklif alırken](/sanal-ofis-secim-rehberi) pakete nelerin dahil olduğunu yazılı olarak isteyin.

Fiyat karşılaştırırken sözleşme süresine de bakın. Bazı firmalar en düşük fiyatı yalnızca bir yıllık sözleşme için geçerli kabul ediyor; aylık ödemede fiyat yükselebiliyor.

## Bursa'da Sanal Ofis Adresi Nasıl Seçilir?

Bursa'da sanal ofis seçenekleri iki bölgede yoğunlaşıyor. Nilüfer, şehrin yeni iş ve yaşam merkezi; plaza ve iş merkezlerindeki adresler kurumsal bir görünüm sağlar. Osmangazi'deki sanayi caddesi çevresi ise sanayi bölgelerine yakınlık isteyen ve tedarikçileriyle sık görüşen şirketler için pratik.

Toplantı odası ihtiyacınız varsa adresin ulaşımını da düşünün. Müşterilerinizin ya da tedarikçilerinizin çoğu sanayi bölgelerindeyse, onlara yakın bir adres toplantıları kolaylaştırır.

### Üretim yapan firmalar sanal ofis kullanabilir mi?

Bursa bir sanayi kenti ve bu soru sık soruluyor. Üretim, depolama ve atölye faaliyetleri fiziksel bir işyeri gerektirdiği için bu faaliyetler sanal ofis adresinde yürütülemez. Üretimi başka bir adreste yapan bir şirketin merkez adresi için sanal ofis kullanıp kullanamayacağı ise faaliyet yapısına bağlı; üretim yerinin ayrıca işyeri olarak bildirilmesi gerekir. Bu durumda mali müşavirinizle birlikte değerlendirme yapın.

## Bursa'da Sanal Ofisle Şirket Kuruluşu

Bursa'da sanal ofis adresiyle şahıs şirketi, limited şirket ya da anonim şirket kurulabilir. Sözleşme kuruluş evraklarında adres belgesi olarak sunulur; işe başlama bildiriminin ardından vergi dairesi yoklama yapar ve vergi levhanız bu adresle düzenlenir. Danışmanlık, e-ticaret, yazılım ve dış ticaret gibi faaliyetler için sanal ofis uygun bir başlangıç modelidir.`,
      sss: [
        {
          soru: "Bursa'da sanal ofis fiyatları ne kadar?",
          cevap:
            "Bu rehberde aylık fiyat yayımlayan Bursa firmaları arasında en düşük başlangıç fiyatı {enDusukFiyat}. Firmaların bir kısmı fiyat yayımlamıyor; bu firmalardan teklif almanız gerekiyor.",
        },
        {
          soru: "Bursa'da sanal ofis için Nilüfer mi, Osmangazi mi?",
          cevap:
            "Kurumsal bir plaza adresi istiyorsanız Nilüfer, sanayi bölgelerine ve tedarikçilere yakınlık önemliyse Osmangazi öne çıkıyor. Adres yalnızca resmi kayıtlar içinse fiyat ve hizmet kapsamına göre seçebilirsiniz.",
        },
        {
          soru: "Üretim yapan bir firma Bursa'da sanal ofis kullanabilir mi?",
          cevap:
            "Üretim, depolama ve atölye faaliyetleri sanal ofis adresinde yürütülemez. Üretimi başka bir adreste yapan şirketlerin merkez adresi için sanal ofis kullanımı faaliyet yapısına bağlıdır; mali müşavirinizle değerlendirin.",
        },
        {
          soru: "Bursa'daki sanal ofis paketlerinde sekreterya hizmeti var mı?",
          cevap:
            "Bazı firmalarda var. Sabit telefon numarası ve çağrı karşılama sunan firmalar olduğu gibi, yalnızca yasal adres ve kargo karşılama sunan firmalar da bulunuyor.",
        },
        {
          soru: "Fiyat yayımlamayan Bursa firmalarından teklif alırken neye dikkat etmeliyim?",
          cevap:
            "Fiyatın hangi süre için geçerli olduğunu, KDV'nin dahil olup olmadığını, tebligat bildiriminin nasıl yapıldığını ve toplantı odasının ücretli olup olmadığını yazılı olarak isteyin.",
        },
        {
          soru: "Bursa'da sanal ofisle dış ticaret şirketi kurulabilir mi?",
          cevap:
            "Evet. İthalat ve ihracat yapan şirketler, malları başka bir depoda tutuyorsa merkez adres olarak sanal ofis kullanabilir. Depo ve stok alanının ayrıca bildirilmesi gerekip gerekmediğini mali müşavirinizle kontrol edin.",
        },
      ],
    },
  } as Record<string, IlIcerik>,

  rehber: {
    meta: {
      title: "Sanal Ofis Seçim Rehberi: Nelere Dikkat Edilmeli?",
      description:
        "Sanal ofis seçerken adres, tebligat bildirimi, pakete dahil hizmetler, sözleşme maddeleri ve faaliyet uygunluğu için kontrol listesi.",
    },
    h1: "Sanal ofis seçim rehberi",
    breadcrumb: "Seçim rehberi",
    guncellemeTarihi: "Ekim 2026",
    guncellemeISO: "2026-10-05",
    bolumler: [
      {
        baslik: "Sanal ofis seçmeden önce ihtiyacınızı netleştirin",
        paragraflar: [
          "Sanal ofisle ilgili kararların çoğu, aslında neye ihtiyacınız olduğuna bağlı. Yalnızca vergi levhası ve ticaret sicil için bir adres mi arıyorsunuz, yoksa düzenli olarak müşteri görüşmesi yapacak mısınız? İlk durumda adres ve tebligat takibi yeterli; ikincisinde toplantı odasının koşulları belirleyici olur.",
        ],
      },
      {
        baslik: "Adres gerçekten çalışan bir ofis mi?",
        paragraflar: [
          "Sanal ofis adresi kâğıt üzerinde bir adres değil, vergi dairesinin yoklama yapacağı ve tebligatların teslim edileceği bir yerdir. Sözleşmeden önce adreste bir resepsiyon olup olmadığını, mesai saatlerini ve binanın girişini kontrol edin. Mümkünse adresi bir kez yerinde görün.",
        ],
      },
      {
        baslik: "Tebligat nasıl ve ne kadar sürede bildiriliyor?",
        paragraflar: [
          "Resmi tebligatlarda süreler çoğu zaman teslim tarihinden itibaren işlemeye başlar. Gelen evrakın aynı gün mü, haftalık mı bildirildiğini; bildirimin e-posta, WhatsApp ya da telefonla mı yapıldığını sorun. Geç bildirilen tek bir tebligat, süre kaçırmanıza yol açabilir.",
        ],
      },
      {
        baslik: "Fiyata neler dahil?",
        paragraflar: [
          "Aynı görünen iki paket çok farklı hizmetler içerebilir. Telefon karşılama, kargo yönlendirme, toplantı odası saati ve sekreterlik gibi kalemlerin pakete dahil mi yoksa ek ücretli mi olduğunu yazılı olarak öğrenin. [Aylık ve yıllık fiyatları karşılaştırırken](/) KDV'nin dahil olup olmadığına dikkat edin.",
        ],
      },
      {
        baslik: "Sözleşmede bulunması gerekenler",
        paragraflar: [
          "Sözleşmede adresin vergi levhası ve ticaret sicil kaydında kullanılabileceği, hangi hizmetlerin dahil olduğu, tebligat bildirim yöntemi, toplantı odası koşulları ve fesih şartları açıkça yazmalı. Sözleşme bittiğinde şirket adresinizi değiştirmeniz gerektiğini unutmayın; aksi halde tebligatlar kullanmadığınız adrese gitmeye devam eder.",
        ],
      },
      {
        baslik: "Faaliyetiniz sanal ofise uygun mu?",
        paragraflar: [
          "İmalat, depolama, perakende satış ve işyeri açma ruhsatı gerektiren hizmetler fiziksel bir işyeri ister. Danışmanlık, yazılım, e-ticaret, serbest meslek ve uzaktan çalışan ekipler için sanal ofis çoğu zaman yeterlidir. Emin değilseniz NACE kodunuzu sağlayıcıyla birlikte kontrol edin.",
        ],
      },
    ] satisfies Bolum[],
  },

  hakkinda: {
    meta: {
      title: "Hakkımızda – Sanal Ofis Rehberi",
      description:
        "Sanal Ofis Rehberi'nin firma bilgilerini nasıl derlediği, firmaları hangi ölçütlere göre sıraladığı ve bilgilerin nasıl güncellendiği.",
    },
    h1: "Hakkımızda",
    guncellemeTarihi: "Ekim 2026",
    guncellemeISO: "2026-10-05",
    paragraflar: [
      "Sanal Ofis Rehberi, Türkiye'de sanal ofis hizmeti veren firmaların adres, fiyat ve hizmet bilgilerini il il tek yerde toplamak için hazırlandı.",
      "Bilgiler, firmaların kendi web sitelerinde yayımladığı bilgilerden derlenir; her kaydın yanında bilginin alındığı tarih belirtilir. Firmalar; fiyatını açıkça yayımlama, resepsiyon ve tebligat bildirimi, saatlik toplantı odası ve adresin konumu ölçütlerine göre sıralanır.",
      "Fiyat ve koşullar zamanla değişebilir. Güncel bilgi için firmaların kendi sitelerini kontrol ediniz. Hatalı ya da eksik bir bilgi fark ederseniz rehber güncellenirken dikkate alınır.",
    ],
    bolumler: [
      {
        baslik: "Bilgiler nasıl güncelleniyor?",
        paragraflar: [
          "Her firma kaydı, firmanın kendi web sitesinde yayımlanan bilgilere dayanır ve kaydın yanında bilginin alındığı tarih yer alır. Kayıtlar düzenli aralıklarla yeniden kontrol edilir; fiyatı değişen ya da hizmet vermeyi bırakan firmalar güncellenir veya listeden çıkarılır.",
        ],
      },
      {
        baslik: "Bilgi düzeltme ve firma ekleme",
        paragraflar: [
          "Listede yer alan bir firmaya ait bilgi hatalıysa ya da listede bulunmayan bir sanal ofis sağlayıcısının eklenmesini istiyorsanız iletisim@sanalofisrehberi.com adresine yazabilirsiniz. Gönderilen bilgiler, firmanın kendi web sitesiyle karşılaştırılarak değerlendirilir.",
        ],
      },
    ],
  },

  iletisim: {
    meta: {
      title: "İletişim – Sanal Ofis Rehberi",
      description:
        "Sanal Ofis Rehberi'nde hatalı bir firma bilgisi varsa ya da listede olmayan bir sağlayıcının eklenmesini istiyorsanız bize yazın.",
    },
    h1: "İletişim",
    guncellemeTarihi: "Ekim 2026",
    guncellemeISO: "2026-10-05",
    aciklama:
      "Listede yer alan bir firma bilgisi hatalıysa ya da listede olmayan bir sanal ofis sağlayıcısının eklenmesini istiyorsanız bize yazın. Gönderdiğiniz bilgi, firmanın kendi web sitesiyle karşılaştırılarak değerlendirilir.",
    eposta: "iletisim@sanalofisrehberi.com",
  },

  arayuz: {
    anaMenu: "Ana menü",
    altMenu: "Alt menü",
    menuAc: "Menü",
    menu: [
      { href: "/#iller", etiket: "İller" },
      { href: "/sanal-ofis-secim-rehberi", etiket: "Seçim Rehberi" },
      { href: "/hakkinda", etiket: "Hakkımızda" },
    ],
    altBilgi: {
      rehberBaslik: "Rehber",
      rehberLinkleri: [
        { href: "/sanal-ofis-secim-rehberi", etiket: "Sanal ofis seçim rehberi" },
        { href: "/#sanal-ofis-nedir", etiket: "Sanal ofis nedir?" },
        { href: "/#sss", etiket: "Sıkça sorulan sorular" },
      ],
      illerBaslik: "İller",
      hakkindaBaslik: "Hakkımızda",
      hakkindaLinkleri: [
        { href: "/hakkinda", etiket: "Hakkımızda" },
        { href: "/iletisim", etiket: "İletişim" },
      ],
      not: "Bilgiler firmaların kendi web sitelerinden derlenir ve değişebilir.",
    },
    haritaLisans: "Harita: SVG Türkiye Haritası (MIT Lisansı)",
    haritaLisansUrl: "/licenses/svg-turkiye-haritasi-LICENSE.txt",
    telif: (yil: number, tarih: string) => `© ${yil} Sanal Ofis Rehberi · Son güncelleme ${tarih}`,
    bulunamadiEtiket: "404",
    bulunamadiBaslik: "Sayfa bulunamadı",
    bulunamadiMetin: "Aradığınız sayfa yayında değil.",
    bulunamadiLink: "Ana sayfaya dön →",
  },
};
