# Publicar este projeto na Netlify

Este projeto usa TanStack Start. A configuração foi preparada para o adaptador oficial da Netlify, incluindo renderização do servidor e rotas.

## Opção recomendada: conectar pelo GitHub

1. Extraia este ZIP no seu computador.
2. Crie um repositório no GitHub e envie todos os arquivos desta pasta para ele.
3. Na Netlify, escolha **Add new project → Import an existing project** e conecte o repositório.
4. Use estas configurações (também estão no `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist/client`
5. Clique em **Deploy**. A Netlify instalará as dependências e fará o build.

## Observações

- Não publique apenas a pasta `src`: a Netlify precisa do projeto completo para compilar.
- Para este projeto, prefira a implantação por Git ou Netlify CLI; não use o método de arrastar e soltar arquivos-fonte no painel.
- O build não foi executado neste ambiente porque a instalação das dependências não terminou. A Netlify fará a instalação no primeiro deploy.
