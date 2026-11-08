# Manu Veterinária — A Missão dos Bichinhos

Primeira fase local em Phaser 3.90, TypeScript e Vite. Arte vetorial original, sem emojis como personagens. Três pacientes, nove etapas de cuidado, movimentação com balanço, celebração, trilha original sintetizada com Web Audio e efeitos.

## Jogar e desenvolver

Use Node 20.19+ e execute `npm ci`, depois `npm run dev -- --port 5173`. Abra http://127.0.0.1:5173.

- Enter inicia o jogo. Setas ou WASD movem Manu; espaço atende o animal mais próximo.
- Toque/clique no chão para andar ou no animal para atender.
- Nas missões, toque nos três círculos ou pressione 1, 2, 3. Enter volta após o atendimento; Esc fecha o atendimento.
- O botão superior liga/desliga todo o áudio. A música começa após interação.
- O progresso é mantido durante a partida, sem gravação permanente. Recarregar reinicia.

## Verificar e preparar publicação

`npm test` verifica a progressão das nove etapas e o limite de três por animal. `npm run build` verifica TypeScript e gera `dist`. `npm run preview -- --port 4173` serve a versão de produção com o service worker. A PWA tem manifesto, ícones 192/512 e cache offline após carregar o jogo online. A instalação/offline precisa de conferência em dispositivo real.

O fluxo `.github/workflows/pages.yml` testa e compila pushes e pull requests para `main`. Pushes para `main` publicam automaticamente no GitHub Pages; a execução manual também está disponível. Ao levar esta pasta para a raiz de um repositório, configure GitHub Pages para GitHub Actions e execute o fluxo. O base relativo permite hospedagem em subpastas. Nenhuma publicação foi feita.

## Referências privadas e continuidade

Não foi localizado projeto Manu nas buscas em Codex, Desktop, Downloads e nomes de pastas de Documents/projects. A leitura da conversa recuperou apenas as últimas cinco interações, sem anexos ou código. Nenhum trabalho anterior foi alterado.

A aparência da Manu é uma ilustração provisória: jaleco branco e estetoscópio rosa. **Faltam as fotos privadas e a abertura aprovada** para ajustar rosto, cabelo e fidelidade visual. Guarde eventuais fotos somente em `private-references/` (ignorada pelo Git), nunca em `public`, `src` ou `dist`. A pasta ignorada não impede envio manual: revise antes de publicar.

Os cuidados desta fase são minijogos simples de três toques, com rótulos distintos; futuras etapas podem receber ferramentas arrastáveis e animações específicas. Falta validar em celular físico, testar instalação/offline e ajustar a arte às referências. A trilha é uma composição procedural original incluída em `src/audio.ts`.

## Quatro aventuras

1. **Um dia na clínica:** nove cuidados com Ragnar, Mérida e Cronos, com pernas animadas e saudação ao tocar na Manu.
2. **Piquenique dos bichinhos:** escolha entre três tigelas para cada amigo. Respostas erradas permitem nova tentativa.
3. **Jardim musical:** três sequências de duas, três e quatro notas. As flores piscam para permitir jogar com áudio desligado. É possível ouvir novamente.
4. **A bolsa de resgate:** caminhe pelo jardim, recolha cinco materiais e desvie de duas poças. Sem cronômetro ou perda de vidas.

Use **Escolher aventura** na abertura ou **Mapa** durante o jogo. No mapa, as teclas 1–4 escolhem a fase; nos desafios, 1–3 escolhem opções. Esc retorna ao mapa nas fases novas. As medalhas ficam salvas somente no navegador deste dispositivo; não são uma conta online. Todas as fases estão disponíveis, para brincar em qualquer ordem.
