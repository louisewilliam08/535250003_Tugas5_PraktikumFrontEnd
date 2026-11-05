export const menuCategories = ["Semua", "Sushi & Sashimi", "Panggang", "Spesial", "Minuman"];

export interface MenuItem {
  name: string;
  jp: string;
  category: string;
  description: string;
  price: string;
  image: string;
}

export const menuItems: MenuItem[] = [
  { name: "Nigiri Sushi Set", jp: "握り", category: "Sushi & Sashimi", description: "Delapan nigiri pilihan chef, dengan sup miso.", price: "Rp 165.000", image: "/images/sushi-set.jpg" },
  { name: "Sashimi Moriawase", jp: "刺身盛り合わせ", category: "Sushi & Sashimi", description: "Tuna, salmon, hotate, dan uni, dengan wasabi asli.", price: "Rp 235.000", image: "/images/sashimi.jpg" },
  { name: "Wagyu Yakiniku", jp: "和牛焼肉", category: "Panggang", description: "Wagyu iris tipis, dipanggang sebentar. Cukup dengan garam laut.", price: "Rp 325.000", image: "/images/wagyu.jpg" },
  { name: "Binchotan Grill", jp: "炭火焼", category: "Panggang", description: "Daging dan seafood dipanggang di atas arang binchotan, di depan Anda.", price: "Rp 195.000", image: "/images/chef-grill.jpg" },
  { name: "Chef's Omakase", jp: "おまかせ", category: "Spesial", description: "Tujuh hidangan berurutan, sesuai bahan yang sedang bagus hari itu.", price: "Rp 650.000", image: "/images/omakase.jpg" },
  { name: "Sake Tasting Set", jp: "日本酒", category: "Minuman", description: "Tiga sake pilihan, ditemani tsukemono.", price: "Rp 145.000", image: "/images/sake-set.jpg" },
];

export const galleryItems = [
  { src: "/images/interior-lamp.jpg", alt: "Dinding bermotif asanoha dengan lampu gantung kuning", caption: "Ruang utama", className: "g-wide" },
  { src: "/images/sushi-set.jpg", alt: "Set nigiri sushi di atas slate hitam", caption: "Nigiri sushi", className: "" },
  { src: "/images/wagyu.jpg", alt: "Wagyu iris di atas piring keramik emas", caption: "Wagyu", className: "" },
  { src: "/images/dining-room.jpg", alt: "Meja makan kayu dengan sumpit dan vas bunga", caption: "Meja makan", className: "g-tall" },
  { src: "/images/chef-grill.jpg", alt: "Chef memanggang daging di atas arang", caption: "Panggangan arang", className: "g-wide" },
  { src: "/images/sashimi.jpg", alt: "Sashimi segar di atas slate", caption: "Sashimi", className: "" },
  { src: "/images/sake-set.jpg", alt: "Botol dan cawan sake hitam keemasan", caption: "Sake", className: "" },
  { src: "/images/chef-plating.jpg", alt: "Chef menata sashimi di counter", caption: "Chef's counter", className: "" },
  { src: "/images/omakase.jpg", alt: "Counter persiapan omakase", caption: "Omakase", className: "" },
];

export const newsItems = [
  { date: "28 Oktober 2026", tag: "Menu baru", title: "Omakase tujuh hidangan kini tersedia setiap malam", excerpt: "Reservasi minimal sehari sebelumnya. Isi menunya berubah mengikuti bahan terbaik hari itu.", image: "/images/omakase.jpg" },
  { date: "15 Oktober 2026", tag: "Menu baru", title: "Sake tasting set, tiga pilihan untuk dicoba", excerpt: "Cocok ditemani sushi atau sashimi. Tanyakan ke chef untuk pasangan terbaiknya.", image: "/images/sake-set.jpg" },
  { date: "2 Oktober 2026", tag: "Member", title: "Program member Homowa Anga segera dibuka", excerpt: "Kumpulkan poin dari setiap kunjungan dan tukarkan dengan hidangan favorit Anda.", image: "/images/sushi-set.jpg" },
];
