# Zeit Design Fiction - Site de Mangás

Um site moderno e responsivo para exibir histórias de mangá criadas.

## 🚀 Características

- Design moderno e escuro
- Cards clicáveis para cada mangá
- Visualização de capítulos com páginas
- Navegação intuitiva entre capítulos
- Totalmente responsivo
- Otimizado para performance

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

```bash
npm run dev
```

O site estará disponível em `http://localhost:3000`

## 🏗️ Build para Produção

```bash
npm run build
npm start
```

## 📝 Adicionando Seus Mangás

### Método Automático (Recomendado)

1. Coloque suas histórias na pasta `/Users/gabrielaragao/Downloads/zeit/` (ou ajuste o caminho no script)
2. Cada história deve estar em uma pasta com o nome do personagem
3. Coloque a capa na pasta (arquivo com "capa" ou "mangá" no nome)
4. Organize as páginas com o padrão: `P1P1.png`, `P1P2.png` (primeiro número = capítulo, segundo = página)
5. Execute o script para organizar:

```bash
python3 scripts/organize_pages.py
python3 scripts/generate-mangas-data.py
```

### Método Manual

Edite o arquivo `app/data/mangas.ts` diretamente:

```typescript
{
  id: 'seu-id',
  title: 'Título do Mangá',
  coverImage: '/mangas/seu-id/capa.png',
  description: 'Descrição da história',
  author: 'Zeit Design',
  chapters: [
    {
      id: 'seu-id-1',
      title: 'Capítulo 1',
      pages: [
        '/mangas/seu-id/capitulo-1/pagina-1.png',
        '/mangas/seu-id/capitulo-1/pagina-2.png',
      ],
    },
  ],
}
```

## 🌐 Deploy no EasyPanel (Hostinger)

1. Faça o build do projeto:
   ```bash
   npm run build
   ```

2. No EasyPanel, crie um novo projeto Next.js
3. Configure o build command: `npm run build`
4. Configure o start command: `npm start`
5. Configure a porta: `3000`
6. Faça o deploy!

## 📁 Estrutura do Projeto

```
app/
  ├── components/       # Componentes reutilizáveis
  ├── data/           # Dados dos mangás
  ├── manga/          # Páginas de mangá e capítulos
  ├── globals.css     # Estilos globais
  ├── layout.tsx      # Layout principal
  └── page.tsx        # Página inicial
```

## 🎨 Personalização

Os estilos podem ser personalizados editando as variáveis CSS em `app/globals.css`:

- `--bg-primary`: Cor de fundo principal
- `--bg-secondary`: Cor de fundo secundária
- `--accent`: Cor de destaque
- `--text-primary`: Cor do texto principal

## 📄 Licença

Todos os direitos reservados - Zeit Design Fiction
