let dataPemesanan = JSON.parse(localStorage.getItem("dataPembeli"));
console.log(dataPemesanan);

let pemesanan = document.getElementById("pemesanan");
let pagepemesanan = document.getElementById("pemesananpage");

if (dataPemesanan === null) {
  let el = document.createElement("h1");
  el.innerHTML = `<h1 class="mx-10 mb-4 font-bold leading-none tracking-tight text-gray-900 md:text-2xl dark:text-black p-20 text-center" id="keranjang-kosong">Pemesanan Kosong</h1>`;
  pemesanan.appendChild(el);
} else {
  for ([index, item] of dataPemesanan.entries()) {
    pagepemesanan.innerHTML += `
          <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center mb-5">
                  <div class="z-10 flex items-center justify-center w-6 h-6 bg-black rounded-full ring-0 ring-white  sm:ring-8 dark:ring-gray-900 shrink-0">
                      <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                      </svg>
                  </div>
                  <div class="hidden sm:flex w-full bg-white h-0.5 dark:bg-gray-700"></div>
              </div>
          <div class="card w-96 bg-neutral text-neutral-content bg-white shadow-2xl font-[montserrat] text-black font-bold">
        <div class="card-body items-center text-center">
          <h2 class="card-title">${item.nama}</h2>
          <p>Alamat : ${item.alamat}</p>
          <ol id="obat${index + 1}"><span class="font-bold">Obat</span> : </ol>
          <p id="harga${index + 1}">Total Harga : </p>
        </div>
      </div>
          </li>
          `;
    let total = 0;
    for (let [nama, jumlah, harga] of item.dataPembelian) {
      console.log(harga);
      let obat = document.getElementById(`obat${index + 1}`);
      let hargaTotal = document.getElementById(`harga${index + 1}`);
      let li = document.createElement("li");
      li.innerHTML += `<li>◼️ ${nama} x ${jumlah} </li>`;

      total += Number(harga);
      hargaTotal.innerText = `Total Harga : ${total}`;
      obat.appendChild(li);
    }
  }
}
