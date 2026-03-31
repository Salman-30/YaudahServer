// Data Aksara
const carakan = [
    {jawa: 'ꦲ', latin: 'Ha'}, {jawa: 'ꦯ', latin: 'Na'}, {jawa: 'ꦕ', latin: 'Ca'}, {jawa: 'ꦗ', latin: 'Ra'}, {jawa: 'ꦏ', latin: 'Ka'},
    {jawa: 'ꦢ', latin: 'Da'}, {jawa: 'ꦲ', latin: 'Ta'}, {jawa: 'ꦱ', latin: 'Sa'}, {jawa: 'ꦮ', latin: 'Wa'}, {jawa: 'ꦭ', latin: 'La'},
    {jawa: 'ꦥ', latin: 'Pa'}, {jawa: 'ꦝ', latin: 'Dha'}, {jawa: 'ꦗ', latin: 'Ja'}, {jawa: 'ꦪ', latin: 'Ya'}, {jawa: 'ꦜ', latin: 'Nya'},
    {jawa: 'ꦩ', latin: 'Ma'}, {jawa: 'ꦒ', latin: 'Ga'}, {jawa: 'ꦧ', latin: 'Ba'}, {jawa: 'ꦛ', latin: 'Tha'}, {jawa: 'ꦔ', latin: 'Nga'}
];

const sandhangan = [
    {jawa: 'ꦶ', latin: 'Wulu (i)'}, {jawa: 'ꦸ', latin: 'Suku (u)'},
    {jawa: 'ꦺ', latin: 'Taling (é)'}, {jawa: 'ꦺꦴ', latin: 'Taling Tarung (o)'},
    {jawa: 'ꦼ', latin: 'Pepet (e)'}
];

function render(data, elementId) {
    const container = document.getElementById(elementId);
    data.forEach(item => {
        container.innerHTML += `
                <div class="card">
                    <span class="aksara">${item.jawa}</span>
                    <span class="latin">${item.latin}</span>
                </div>
            `;
    });
}

render(carakan, 'container-carakan');
render(sandhangan, 'container-sandhangan');
