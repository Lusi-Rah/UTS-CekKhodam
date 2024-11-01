
function playScaryMusic() {
    let audio = document.getElementById('scaryMusic');
    audio.play();

    audio.play().catch(function (error) {
        console.log("Autoplay dibatasi oleh browser. Pengguna harus memulai musik secara manual.");

        document.body.addEventListener('click', function () {
            audio.play();
        });
    });
}

window.onload = function () {
    playScaryMusic();
    let introOverlay = document.getElementById('introOverlay');
    setTimeout(() => {
        introOverlay.style.opacity = '0';
        setTimeout(() => {
            introOverlay.style.display = 'none';
        }, 2000);
    }, 3000);
};


function cekKhodam() {
    let nama = document.getElementById('nama').value.trim();

    if (nama === "") {
        alert("Masukkan nama Anda terlebih dahulu.");
        return;
    }

    let khodams = [
        { name: "Khodam Roger Sumatera", image: "rogersumatera.jpg" },
        { name: "Khodam Squidward Oplas", image: "squidwardoplas.jpEg" },
        { name: "Khodam Bang Sally", image: "bangsaleh.jpeg" },
        { name: "Khodam Kucing Molek", image: "kucingmolek.jpg" },
        { name: "Khodam Indosiars Vampire", image: "indosiarsvampire.jpg" }
    ];

    let randomIndex = Math.floor(Math.random() * khodams.length);
    let selectedKhodam = khodams[randomIndex];

    let modal = document.getElementById('khodamModal');
    let modalImage = document.getElementById('modalImage');
    let modalText = document.getElementById('modalText');

    modalImage.src = selectedKhodam.image;
    modalImage.alt = selectedKhodam.name;
    modalText.innerHTML = `<strong>${selectedKhodam.name}</strong>`;

    modal.style.display = "flex";
}

function closeModal() {
    let modal = document.getElementById('khodamModal');
    modal.style.display = "none";
}

window.onclick = function (event) {
    let modal = document.getElementById('khodamModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
