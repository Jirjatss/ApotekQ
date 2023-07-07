let dataChart = JSON.parse(localStorage.getItem("checkout"));

let checkoutpage = document.getElementById("checkoutpage");
let kosong = document.getElementById("keranjang");

if (dataChart === null || dataChart.length === 0) {
  let el = document.createElement("h1");
  el.innerHTML = `<h1 class="mx-10 mb-4 font-bold leading-none tracking-tight text-gray-900 md:text-2xl dark:text-black p-20 text-center" id="keranjang-kosong">Keranjang Kosong</h1>`;
  kosong.appendChild(el);
} else {
  let table = document.getElementById("tablecheckout");
  let totalHarga = 0;

  for (let [index, item] of dataChart.entries()) {
    let card = document.createElement("div");
    let jumlah = 1;
    card.innerHTML = `
        <div id=${item.id} class="card card-compact bg-white shadow-2xl mb-5 border-2 border-slate-100 font-semibold relative">
          <figure class="px-7 pt-7">
            <img src=${item.image} class="w-44 h-44" />
          </figure>
          <hr/>
          <div class="card-body items-center text-center">
            <h1 class="font-bold text-xl">${item.nama}</h1>
            <p class="font-bold" id="total-${item.id}">Rp ${item.harga}</p>
            <div class="card-actions justify-center">
              <button onclick="minus(${item.id}, '${item.nama}', ${item.harga}, ${item.stok})"><span style="color:red" class="material-symbols-outlined">
                do_not_disturb_on
              </span></button> 
              <div class="text-red-500" id="jumlah-${item.id}">${jumlah}</div> 
              <button onclick="tambah(${item.id}, '${item.nama}', ${item.harga}, ${item.stok})"><span style="color:green" class="material-symbols-outlined">
                add_circle
              </span></button> 
            </div>
            <div>
              <p id="maxstok-${item.id}"></p>
              <button onclick="del(${item.id})" class="mt-3 rounded-full bg-red-500 px-1 py-1 absolute top-0 left-3">
                <span style="color:white; width:30px; height30px;margin-top:2px" class="material-symbols-outlined">
                  delete
                </span>
              </button>
            </div>
          </div>
        </div>
      `;
    checkoutpage.appendChild(card);

    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${item.nama}</td>
        <td id="jumlah-table-${item.id}">${jumlah}</td>
        <td id="harga-table-${item.id}">Rp ${item.harga}</td>
      `;
    table.appendChild(row);

    totalHarga += item.harga;
  }

  let totalEl = document.getElementById("totalHarga");
  totalEl.innerText = `Total Harga: Rp ${totalHarga}`;
}

function tambah(id, name, harga, stok) {
  let jumlahElement = document.getElementById(`jumlah-${id}`);
  let totalElement = document.getElementById(`total-${id}`);
  let num = parseInt(jumlahElement.innerText);
  let maxstok = document.getElementById(`maxstok-${id}`);
  if (num < stok) {
    num++;
    jumlahElement.innerText = num;
    let total = num * harga;
    totalElement.innerText = `Rp ${total}`;
    maxstok.innerText = "";
    updateTotalHarga();
    updateTableRow(id, num, total);
  } else {
    maxstok.innerText = "Jumlah melebihi stok";
  }
}

function minus(id, name, harga, stok) {
  let jumlahElement = document.getElementById(`jumlah-${id}`);
  let totalElement = document.getElementById(`total-${id}`);
  let num = parseInt(jumlahElement.innerText);
  let maxstok = document.getElementById(`maxstok-${id}`);
  if (num > 1) {
    num--;
    jumlahElement.innerText = num;
    let total = num * harga;
    totalElement.innerText = `Rp ${total}`;
    maxstok.innerText = "";
    updateTotalHarga();
    updateTableRow(id, num, total);
  }
}

function updateTableRow(id, jumlah, harga) {
  let jumlahTableElement = document.getElementById(`jumlah-table-${id}`);
  let hargaTableElement = document.getElementById(`harga-table-${id}`);
  jumlahTableElement.innerText = jumlah;
  hargaTableElement.innerText = `Rp ${harga}`;
}

function updateTotalHarga() {
  let totalHarga = 0;
  let totalElements = document.querySelectorAll('[id^="total-"]');
  let totalEl = document.getElementById("totalHarga");
  for (let element of totalElements) {
    let harga = parseInt(element.innerText.replace("Rp ", ""));
    totalHarga += harga;
  }
  totalEl.innerText = `Total Harga: Rp ${totalHarga}`;
}

function del(id) {
  setTimeout(function (id) {
    location.reload();
  }, 1500);
  let check = JSON.parse(localStorage.getItem("checkout"));
  for (let i = 0; i < check.length; i++) {
    if (id === check[i].id) {
      check.splice(i, 1);
      localStorage.setItem("checkout", JSON.stringify(check));
      Swal.fire({
        title: "Sweet!",
        text: "Berhasil menghapus obat ",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      removeTableRow(id);
      break;
    }
  }
}

function removeTableRow(id) {
  let tableRowElement = document.getElementById(`row-${id}`);
  tableRowElement.remove();
}

let bayarObat = document.getElementById("bayarobat");

function bayar() {}

bayarObat.addEventListener("click", (e) => {
  e.preventDefault();

  let namaInput = document.getElementById("nama-checkout");
  let alamatInput = document.getElementById("alamat-checkout");
  let telpInput = document.getElementById("telp-checkout");

  let nama = namaInput.value;
  let alamat = alamatInput.value;
  let telp = telpInput.value;

  if (!nama || !alamat || !telp) {
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: "Data tidak boleh kosong atau data yang anda masukkan salah",
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  }

  let tableRows = document.querySelectorAll("#tablecheckout tr");
  let existingData = JSON.parse(localStorage.getItem("dataPembeli")) || [];
  if (!Array.isArray(existingData)) {
    existingData = []; // Mengubah existingData menjadi array jika bukan array
  }
  let pembeli = {
    dataPembelian: [],
    nama: nama,
    alamat: alamat,
    telp: telp,
  };

  tableRows.forEach((row) => {
    let cells = row.querySelectorAll("td");
    let obj = [cells[1].innerText, cells[2].innerText, cells[3].innerText.replace("Rp ", "")];
    pembeli.dataPembelian.push(obj);
  });

  existingData.push(pembeli);

  localStorage.setItem("dataPembeli", JSON.stringify(existingData));

  Swal.fire({
    title: "Sweet!",
    text: "Selamat anda berhasil melakukan pembayaran",
    icon: "success",
    confirmButtonColor: "#3491b2",
    confirmButtonText: '<a href="pemesanan.html">Great! </a>',
  });

  localStorage.removeItem("checkout");
});
