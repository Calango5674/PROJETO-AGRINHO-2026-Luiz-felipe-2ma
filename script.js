/* ==========================================================================
   PROJETO AGRINHO 2026 - MATÉRIA: PENSAMENTO COMPUTACIONAL
   Script para interatividade e lógica de automação simulada
   ========================================================================== */

// Aguarda o carregamento completo do DOM (documento HTML)
document.addEventListener("DOMContentLoaded", () => {
    console.log("Script do Agrinho 2026 carregado com sucesso! 🌱");
    
    // Executa as funções principais
    inicializarCardsInterativos();
    criarSimuladorAgricola();
});

/* ==========================================================================
   FASE 1: INTERATIVIDADE DOS CARDS (Estímulo Visual)
   ========================================================================== */
function inicializarCardsInterativos() {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        // Altera o estilo ao passar o rato (além do CSS) para demonstrar eventos
        card.addEventListener("click", () => {
            const pilar = card.querySelector("h3").innerText;
            
            // Exemplo de Algoritmo: Condicional para mensagens personalizadas
            let mensagem = "";
            switch (pilar) {
                case "Decomposição":
                    mensagem = "🔍 Decompor no Agrinho significa olhar para a fazenda e separar o solo, a semente e o clima para estudar um por um.";
                    break;
                case "Reconhecimento de Padrões":
                    mensagem = "📈 Padrões nos ajudam a prever quando vai chover ou quando as pragas costumam aparecer com base em anos anteriores.";
                    break;
                case "Abstração":
                    mensagem = "💡 Abstrair é focar no que importa! Se precisamos regar a planta, focamos na humidade do solo e esquecemos a cor do trator.";
                    break;
                case "Algoritmos":
                    mensagem = "🤖 Criar um algoritmo é programar o passo a passo: 'SE o solo estiver seco, ENTÃO ligue o sistema de irrigação'.";
                    break;
                default:
                    mensagem = "Você clicou em um pilar do Pensamento Computacional!";
            }
            
            alert(mensagem);
        });
    });
}

/* ==========================================================================
   FASE 2: SIMULADOR DE PENSAMENTO COMPUTACIONAL (Lógica Aplicada)
   Inserção dinâmica de uma ferramenta de simulação de irrigação no HTML
   ========================================================================== */
function criarSimuladorAgricola() {
    const solucaoSection = document.getElementById("solucao");
    
    if (!solucaoSection) return;

    // Criando a estrutura do simulador via JavaScript (Manipulação de DOM)
    const containerSimulador = document.createElement("div");
    containerSimulador.style.marginTop = "25px";
    containerSimulador.style.padding = "20px";
    containerSimulador.style.border = "2px dashed #2e7d32";
    containerSimulador.style.borderRadius = "8px";
    containerSimulador.style.backgroundColor = "#fafafa";

    containerSimulador.innerHTML = `
        <h3 style="color: #2e7d32; margin-bottom: 10px;">🤖 Simulador de Algoritmo Agrícola</h3>
        <p style="font-size: 0.95rem;">Simule o funcionamento de um sensor de humidade do solo automatizado:</p>
        
        <label for="humidade" style="font-weight: bold;">Nível de Humidade do Solo: <span id="valorHumidade">50</span>%</label>
        <input type="range" id="humidade" min="0" max="100" value="50" style="width: 100%; margin: 10px 0; accent-color: #2e7d32;">
        
        <div id="statusPainel" style="padding: 10px; border-radius: 4px; text-align: center; font-weight: bold; background-color: #ffe082; color: #b78103;">
            ⚠️ Status: Sistema em Análise
        </div>
    `;

    // Adiciona o simulador dentro da secção "Nossa Solução"
    solucaoSection.appendChild(containerSimulador);

    // Lógica do Simulador (Algoritmo "Se... Então...")
    const inputHumidade = document.getElementById("humidade");
    const valorHumidade = document.getElementById("valorHumidade");
    const statusPainel = document.getElementById("statusPainel");

    inputHumidade.addEventListener("input", (evento) => {
        const humidadeAtual = evento.target.value;
        valorHumidade.innerText = humidadeAtual;

        // Aplicação pura de Pensamento Computacional (Algoritmos / Tomada de Decisão)
        if (humidadeAtual < 30) {
            statusPainel.innerText = "🚨 ALERTA: Solo Seco! Irrigação LIGADA automaticamente.";
            statusPainel.style.backgroundColor = "#ffcdd2";
            statusPainel.style.color = "#b71c1c";
        } else if (humidadeAtual >= 30 && humidadeAtual <= 70) {
            statusPainel.innerText = "👍 IDEAL: Humidade estável. Sistema em modo de espera.";
            statusPainel.style.backgroundColor = "#c8e6c9";
            statusPainel.style.color = "#1b5e20";
        } else {
            statusPainel.innerText = "🌊 ATENÇÃO: Solo muito húmido! Risco de encharcar as raízes.";
            statusPainel.style.backgroundColor = "#bbdefb";
            statusPainel.style.color = "#0d47a1";
        }
    });
}