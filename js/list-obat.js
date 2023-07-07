const obat = [
  { id: 1, nama: `kalpanax`, type: `salep`, harga: 7500, image: "https://images.tokopedia.net/img/cache/900/hDjmkQ/2023/5/30/816b8352-449a-488e-b787-c0a1fa09b97f.jpg", stok: 5 },
  { id: 2, nama: `paratusin`, type: `tablet`, harga: 1700, image: "https://images.tokopedia.net/img/cache/900/product-1/2021/7/23/11540886/11540886_6e2b2e63-52dc-4124-81bf-c649c45f05fc.png", stok: 10 },
  { id: 3, nama: `Alpara`, type: `tablet`, harga: 9000, image: "https://images.tokopedia.net/img/cache/900/hDjmkQ/2022/10/13/c293c378-c05f-4e7d-a067-7485c3d3d264.jpg", stok: 8 },
  { id: 4, nama: `demacolin`, type: `tablet`, harga: 7000, image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2021/9/4/f6870caa-1df3-448c-a4c9-664c0a3fc1d7.jpg", stok: 9 },
  { id: 5, nama: `konidin`, type: `tablet`, harga: 3000, image: "https://images.tokopedia.net/img/cache/900/hDjmkQ/2023/4/14/808d861c-785b-4b27-b062-fa49f2d1c7cf.jpg", stok: 5 },
  { id: 6, nama: `Polysilane`, type: `tablet`, harga: 10300, image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/8/6/9b6b1484-00ba-4ad1-87cf-a5d838494f37.jpg", stok: 4 },
  { id: 7, nama: `promag`, type: `tablet`, harga: 8700, image: "https://images.tokopedia.net/img/cache/900/hDjmkQ/2022/2/8/c5fae93e-ffc5-420e-9770-2cf71dbead7f.jpg", stok: 7 },
  { id: 8, nama: `herocyn`, type: `powder`, harga: 16000, image: "https://images.tokopedia.net/img/cache/900/hDjmkQ/2023/4/28/61432d86-d4dd-47ce-a200-5406dbd2a7df.png", stok: 15 },
  { id: 9, nama: `salep 88`, type: `salep`, harga: 13000, image: "https://images.tokopedia.net/img/cache/900/hDjmkQ/2023/6/9/a387f3be-6beb-4bd0-8676-491511c45720.jpg", stok: 8 },
  { id: 10, nama: `bedak salicyl`, type: `powder`, harga: 8700, image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/5/13/d209b7d1-e747-4e71-86e2-720b96602e90.png", stok: 5 },
  { id: 11, nama: `sanmol`, type: `tablet`, harga: 2200, image: "https://images.tokopedia.net/img/cache/900/hDjmkQ/2023/6/8/99dd7b20-8591-428b-8593-72c9f7d56288.png", stok: 9 },
  { id: 12, nama: `decolgen`, type: `tablet`, harga: 2500, image: "https://images.tokopedia.net/img/cache/900/hDjmkQ/2023/5/4/61ade807-70a4-4e6e-af64-c29a87a5242d.jpg", stok: 2 },
  { id: 13, nama: `panadol biru`, type: `tablet`, harga: 12500, image: "https://images.tokopedia.net/img/cache/900/hDjmkQ/2023/1/16/2abc55b4-f67e-46c0-a41f-7c3d341bed65.png", stok: 7 },
];

let pageShop = document.getElementById("pageshop");
let keranjangObat = [];
for (let perObat of obat) {
  //   console.log(perArtikel);
  let cardObat = document.createElement("div");
  cardObat.innerHTML += `
    <div class="card card-compact bg-white shadow-2xl mb-5 border-2 border-slate-100 font-semibold">
         <figure class="px-7 pt-7">
              <img src=${perObat.image} class="w-44 h-44" />
            </figure>
            <hr/>
            <div class="card-body items-center text-center">
              <h1 class="font-bold text-xl">${perObat.nama}</h1>
              <p class="font-bold">Rp ${perObat.harga}
              <div class="card-actions justify-start">
              <div class="badge badge-outline">${perObat.type}</div>           
            </div>
              <div class="card-actions mt-5">
                <button onclick="checkoutObat(${perObat.id})" id=${perObat.id} class="bg-[#3491b2] px-3 py-2 rounded-lg text-white hover:bg-white hover:text-[#3491b2] flex">
                <span class="material-symbols-outlined">shopping_cart </span>Checkout</button>
              </div>
            </div>
    </div>
    `;
  pageShop.appendChild(cardObat);
}
const checkoutObat = (id) => {
  for (let i in obat) {
    if (id === obat[i].id) {
      if (keranjangObat.length === 0) {
        keranjangObat.push(obat[i]);
        Swal.fire({
          title: "Sweet!",
          text: "Obat sudah masuk Keranjang ",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        let obatExistsInCart = false;
        for (let j in keranjangObat) {
          if (id === keranjangObat[j].id) {
            obatExistsInCart = true;
            break;
          }
        }
        if (obatExistsInCart) {
          Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Obat sudah ada di Keranjang",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          keranjangObat.push(obat[i]);
          Swal.fire({
            title: "Sweet!",
            text: "Obat sudah masuk Keranjang ",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
      // Save keranjangObat in local storage
      localStorage.setItem("checkout", JSON.stringify(keranjangObat));
    }
  }
};
