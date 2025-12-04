const fs = require('fs');
const path = require('path');

const mangasDir = path.join(__dirname, '../public/mangas');
const outputFile = path.join(__dirname, '../app/data/mangas.ts');

const mangasConfig = [
  { id: 'akari', title: 'Akari', description: 'A história de Akari, uma jornada única e emocionante.' },
  { id: 'dami', title: 'Dami', description: 'As aventuras de Dami em um mundo cheio de desafios.' },
  { id: 'farid', title: 'Farid', description: 'A saga épica de Farid e suas descobertas.' },
  { id: 'iara', title: 'Iara', description: 'A jornada mística de Iara através de terras encantadas.' },
  { id: 'lara', title: 'Lara', description: 'As aventuras de Lara em busca de respostas.' },
  { id: 'theo', title: 'Theo', description: 'A história de Theo e sua busca pela verdade.' },
];

function getChapters(mangaId) {
  const mangaDir = path.join(mangasDir, mangaId);
  if (!fs.existsSync(mangaDir)) return [];

  const chapters = [];
  const items = fs.readdirSync(mangaDir, { withFileTypes: true });

  items.forEach(item => {
    if (item.isDirectory() && item.name.startsWith('capitulo-')) {
      const chapterNum = parseInt(item.name.replace('capitulo-', ''));
      const chapterDir = path.join(mangaDir, item.name);
      const pages = fs.readdirSync(chapterDir)
        .filter(f => f.endsWith('.png'))
        .sort((a, b) => {
          const numA = parseInt(a.replace('pagina-', '').replace('.png', ''));
          const numB = parseInt(b.replace('pagina-', '').replace('.png', ''));
          return numA - numB;
        })
        .map(page => `/mangas/${mangaId}/${item.name}/${page}`);

      if (pages.length > 0) {
        chapters.push({
          chapterNum,
          pages,
        });
      }
    }
  });

  return chapters.sort((a, b) => a.chapterNum - b.chapterNum);
}

let output = `export interface Manga {
  id: string;
  title: string;
  coverImage: string;
  description: string;
  author: string;
  chapters: Chapter[];
}

export interface Chapter {
  id: string;
  title: string;
  pages: string[];
}

export const mangas: Manga[] = [
`;

mangasConfig.forEach((config, index) => {
  const chapters = getChapters(config.id);
  const hasCover = fs.existsSync(path.join(mangasDir, config.id, 'capa.png'));

  output += `  {\n`;
  output += `    id: '${config.id}',\n`;
  output += `    title: '${config.title}',\n`;
  output += `    coverImage: '${hasCover ? `/mangas/${config.id}/capa.png` : ''}',\n`;
  output += `    description: '${config.description}',\n`;
  output += `    author: 'Zeit Design',\n`;
  output += `    chapters: [\n`;

  chapters.forEach(({ chapterNum, pages }) => {
    output += `      {\n`;
    output += `        id: '${config.id}-${chapterNum}',\n`;
    output += `        title: 'Capítulo ${chapterNum}',\n`;
    output += `        pages: [\n`;
    pages.forEach(page => {
      output += `          '${page}',\n`;
    });
    output += `        ],\n`;
    output += `      },\n`;
  });

  output += `    ],\n`;
  output += `  }${index < mangasConfig.length - 1 ? ',' : ''}\n`;
});

output += `];

export function getMangaById(id: string): Manga | undefined {
  return mangas.find(manga => manga.id === id);
}
`;

fs.writeFileSync(outputFile, output, 'utf8');
console.log('✅ Arquivo mangas.ts gerado com sucesso!');

