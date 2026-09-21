// Inicialização do Mapa com foco em Mirandiba - PE
document.addEventListener('DOMContentLoaded', function() {
    // Coordenadas aproximadas do centro de Mirandiba - PE
    const latMirandiba = -8.1283;
    const lngMirandiba = -38.7303;

    // Criar o mapa usando Leaflet com mapas do OpenStreetMap
    const map = L.map('mapa').setView([latMirandiba, lngMirandiba], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Pontos de Apoio / Locais
    const locais = [
        {
            nome: "CRAS - Centro de Referência da Assistência Social",
            descricao: "Atendimento social e suporte a famílias vulneráveis.",
            lat: -8.1275,
            lng: -38.7310
        },
        {
            nome: "Conselho Tutelar de Mirandiba",
            descricao: "Proteção dos direitos da criança e do adolescente.",
            lat: -8.1290,
            lng: -38.7295
        },
        {
            nome: "Unidade Básica de Saúde (Posto de Saúde)",
            descricao: "Atendimento médico básico e vacinação.",
            lat: -8.1265,
            lng: -38.7320
        },
        {
            nome: "Igreja Matriz (Ponto de Entrega)",
            descricao: "Distribuição de marmitas e arrecadação de doações.",
            lat: -8.1285,
            lng: -38.7300
        },
        {
            nome: "Ponto Fixo no Comércio (Mercadinho Central)",
            descricao: "Caixa de doação de roupas e kits de higiene.",
            lat: -8.1280,
            lng: -38.7308
        },
        {
            nome: "Ponto do Banho Solidário",
            descricao: "Instalações para higiene pessoal e banho de pessoas em situação de rua.",
            lat: -8.1300,
            lng: -38.7290
        }
    ];

    // Adicionar marcadores no mapa
    locais.forEach(local => {
        L.marker([local.lat, local.lng])
            .addTo(map)
            .bindPopup(`<b>${local.nome}</b><br>${local.descricao}`);
    });
});
