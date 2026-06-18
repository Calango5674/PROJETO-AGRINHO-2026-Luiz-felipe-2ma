// ==========================================================================
// CONFIGURAÇÕES DE ACESSIBILIDADE: TAMANHO DA FONTE E ALTO CONTRASTE
// ==========================================================================

// Variáveis para controle do tamanho da fonte
let tamanhoFonteAtual = 16; 
const TAMANHO_MINIMO = 12;
const TAMANHO_MAXIMO = 26;

// Executa assim que a página carrega para recuperar as preferências salvas
window.addEventListener('DOMContentLoaded', () => {
    verificarPreferenciaContraste();
    verificarPreferenciaFonte();
});

/**
 * Altera o tamanho da fonte de todo o corpo do site (body)
 * @param {number} direcao - Use 1 para aumentar e -1 para diminuir
 */
function alterarFonte(direcao) {
    // Altera o tamanho de 2 em 2 pixels
    tamanhoFonteAtual += direcao * 2;

    // Garante que a fonte não fique nem muito pequena nem excessivamente grande
    if (tamanhoFonteAtual < TAMANHO_MINIMO) {
        tamanhoFonteAtual = TAMANHO_MINIMO;
    }
    if (tamanhoFonteAtual > TAMANHO_MAXIMO) {
        tamanhoFonteAtual = TAMANHO_MAXIMO;
    }

    // Aplica o novo tamanho no CSS do body
    document.body.style.fontSize = tamanhoFonteAtual + 'px';

    // Salva a preferência do usuário no navegador
    localStorage.setItem('preferenciaFonte', tamanhoFonteAtual);
}

/**
 * Alterna a classe de alto contraste no body e salva a escolha do usuário
 */
function alternarContraste() {
    const corpoPagina = document.body;
    
    // Adiciona ou remove a classe 'high-contrast' definida no style.css
    corpoPagina.classList.toggle('high-contrast');

    // Verifica se a classe está ativa para salvar o estado correto
    if (corpoPagina.classList.contains('high-contrast')) {
        localStorage.setItem('altoContraste', 'ativo');
    } else {
        localStorage.setItem('altoContraste', 'inativo');
    }
}

/**
 * Verifica se o usuário já havia ativado o alto contraste na última visita
 */
function verificarPreferenciaContraste() {
    const contrasteSalvo = localStorage.getItem('altoContraste');
    
    if (contrasteSalvo === 'ativo') {
        document.body.classList.add('high-contrast');
    }
}

/**
 * Verifica se o usuário já havia alterado o tamanho da fonte na última visita
 */
function verificarPreferenciaFonte() {
    const fonteSalva = localStorage.getItem('preferenciaFonte');
    
    if (fonteSalva) {
        tamanhoFonteAtual = parseInt(fonteSalva, 10);
        document.body.style.fontSize = tamanhoFonteAtual + 'px';
    }
}