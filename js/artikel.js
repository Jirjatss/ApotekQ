let artikelList = [
  {
    judul: "Waspada! Begini Ciri-ciri Obat Tradisional Ilegal, Picu Ginjal dan Hati Rusak",
    link: "https://health.detik.com/berita-detikhealth/d-6806731/waspada-begini-ciri-ciri-obat-tradisional-ilegal-picu-ginjal-dan-hati-rusak",
    gambar: "https://akcdn.detik.net.id/community/media/visual/2018/02/05/c99e37f0-7041-422b-a2a1-ddf504b02aec_169.jpeg?w=700&q=90",
  },
  {
    judul: "Ini 6 Efek Berbahaya Ganja pada Kesehatan Tubuh",
    link: "https://www.halodoc.com/artikel/ini-6-efek-berbahaya-ganja-pada-kesehatan-tubuh",
    gambar: "https://d1bpj0tv6vfxyp.cloudfront.net/articles/9e178628-c66b-476f-b939-c03da6e3f20c_article_image_url.webp",
  },
  {
    judul: "Ilmuwan Teliti Pemicu Gagalnya Cangkok Jantung Babi ke Manusia, Ini Hasilnya",
    link: "https://health.detik.com/berita-detikhealth/d-6806546/ilmuwan-teliti-pemicu-gagalnya-cangkok-jantung-babi-ke-manusia-ini-hasilnya",
    gambar: "https://akcdn.detik.net.id/community/media/visual/2022/01/11/transplantasi-jantung-babi-ke-manusia-2_169.jpeg?w=700&q=90",
  },
  {
    judul: "Ingin Suntik Vitamin C? Ketahui Manfaat dan Bahayanya",
    link: "https://www.halodoc.com/artikel/ingin-suntik-vitamin-c-ketahui-manfaat-dan-bahayanya",
    gambar: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/06/05131836/Ingin-Suntik-Vitamin-C_-Kenali-Dulu-Manfaat-dan-Bahayanya.jpg.webp",
  },
  {
    judul: "Apa yang Harus Dilakukan saat Anak Terlambat Imunisasi?",
    link: "https://www.siloamhospitals.com/informasi-siloam/artikel/anak-terlambat-imunisasi",
    gambar: "https://mysiloam-api.siloamhospitals.com/public-asset/website-cms/website-cms-16885436366407797.webp",
  },
  {
    judul: "Cytomegalovirus - Penyebab, Gejala, dan Pengobatannya",
    link: "https://www.siloamhospitals.com/informasi-siloam/artikel/apa-itu-cytomegalovirus",
    gambar: "https://mysiloam-api.siloamhospitals.com/public-asset/website-cms/website-cms-16885438423971654.webp",
  },
  {
    judul: "Waspadai Hipertensi, KENDALIKAN TEKANAN DARAH",
    link: "https://dinkes.okukab.go.id/waspadai-hipertensi-kendalikan-tekanan-darah.html",
    gambar: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/11/01003623/2.-Hipertensi-Dapat-Menjadi-Penyebab-Terjadinya-Stroke_Halodoc.jpg.webp",
  },
  {
    judul: "Ketahui Efek obat Amitriptyline untuk Mengatasi Depresi",
    link: "https://www.halodoc.com/artikel/ketahui-efek-obat-amitriptyline-untuk-mengatasi-depresi",
    gambar: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/06040913/Ketahui-Efek-obat-amitriptyline-untuk-Mengatasi-Depresi.jpg.webp",
  },
  {
    judul: "Kenali Kadar Gula Darah Normal Berdasarkan Usia",
    link: "https://www.siloamhospitals.com/informasi-siloam/artikel/kenali-kadar-gula-darah-normal-berdasarkan-usia",
    gambar: "https://mysiloam-api.siloamhospitals.com/public-asset/website-cms/website-cms-16740149741832111.webp",
  },
  {
    judul: "Ini Pertolongan Pertama Patah Tulang yang Perlu Dipahami",
    link: "https://www.siloamhospitals.com/informasi-siloam/artikel/pertolongan-pertama-patah-tulang",
    gambar: "https://mysiloam-api.siloamhospitals.com/public-asset/website-cms/website-cms-16885232037227492.webp",
  },
];

let divArtikel = document.getElementById("artikelpage");

for (let perArtikel of artikelList) {
  //   console.log(perArtikel);
  let cardArtikel = document.createElement("div");
  cardArtikel.innerHTML += `
  <div class="card w-64 h-96 bg-white shadow-xl mb-5">
          <figure class="px-7 pt-7">
            <img src=${perArtikel.gambar} class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <p>${perArtikel.judul}</p>
            <div class="card-actions">
              <a href=${perArtikel.link} target="blank" class="bg-[#3491b2] px-3 py-2 rounded-lg text-white hover:bg-white hover:text-[#3491b2]">Read Me</a>
            </div>
          </div>
  </div>
  `;

  divArtikel.appendChild(cardArtikel);
}
