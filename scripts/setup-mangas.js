const fs = require('fs');
const path = require('path');

const sourceDir = '/Users/gabrielaragao/Downloads/zeit';
const targetDir = path.join(__dirname, '../public/mangas');

// Criar diretório de destino se não existir
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Mapeamento de nomes das pastas para IDs e títulos
const mangas = [
  { folder: 'Akari', id: 'akari', title: 'Akari' },
  { folder: 'Dami', id: 'dami', title: 'Dami' },
  { folder: 'Farid', id: 'farid', title: 'Farid' },
  { folder: 'Iara', id: 'iara', title: 'Iara' },
  { folder: 'Lara', id: 'lara', title: 'Lara' },
  { folder: 'Theo', id: 'theo', title: 'Theo' },
];

// Função para ordenar páginas numericamente
function sortPages(a, b) {
  // Extrair números dos nomes de arquivo (ex: P1P1 -> [1, 1], P2P3 -> [2, 3])
  const getNumbers = (str) => {
    const matches = str.match(/(\d+)P(\d+)/);
    if (matches) {
      return [parseInt(matches[1]), parseInt(matches[2])];
    }
    return [0, 0];
  };

  const [a1, a2] = getNumbers(a);
  const [b1, b2] = getNumbers(b);

  if (a1 !== b1) return a1 - b1;
  return a2 - b2;
}

// Função para organizar páginas em capítulos
function organizePages(files) {
  const pages = files.filter(f => f.match(/^P\d+P\d+\.png$/i));
  pages.sort(sortPages);

  // Agrupar por capítulo (primeiro número)
  const chapters = {};
  pages.forEach(page => {
    const match = page.match(/^P(\d+)P\d+\.png$/i);
    if (match) {
      const chapterNum = parseInt(match[1]);
      if (!chapters[chapterNum]) {
        chapters[chapterNum] = [];
      }
      chapters[chapterNum].push(page);
    }
  });

  // Converter para array ordenado
  return Object.keys(chapters)
    .sort((a, b) => parseInt(a) - parseInt(b))
    .map(chapterNum => ({
      chapterNum: parseInt(chapterNum),
      pages: chapters[chapterNum].sort(sortPages),
    }));
}

// Processar cada mangá
mangas.forEach(manga => {
  const sourcePath = path.join(sourceDir, manga.folder);
  const targetPath = path.join(targetDir, manga.id);

  if (!fs.existsSync(sourcePath)) {
    console.log(`Pasta não encontrada: ${sourcePath}`);
    return;
  }

  // Criar diretório de destino
  if (!fs.existsSync(targetPath)) {
    fs.mkdirSync(targetPath, { recursive: true });
  }

  // Listar arquivos
  const files = fs.readdirSync(sourcePath);

  // Encontrar capa
  const coverFile = files.find(f => 
    f.toLowerCase().includes('capa') || 
    f.toLowerCase().includes('mangá') ||
    f.toLowerCase().includes('manga')
  );

  // Copiar capa
  if (coverFile) {
    const coverSource = path.join(sourcePath, coverFile);
    const coverTarget = path.join(targetPath, 'capa.png');
    fs.copyFileSync(coverSource, coverTarget);
    console.log(`✓ Capa copiada: ${manga.title}`);
  } else {
    console.log(`⚠ Capa não encontrada para: ${manga.title}`);
  }

  // Organizar e copiar páginas
  const chapters = organizePages(files);
  
  chapters.forEach(({ chapterNum, pages }) => {
    const chapterDir = path.join(targetPath, `capitulo-${chapterNum}`);
    if (!fs.existsSync(chapterDir)) {
      fs.mkdirSync(chapterDir, { recursive: true });
    }

    pages.forEach((page, index) => {
      const pageSource = path.join(sourcePath, page);
      const pageTarget = path.join(chapterDir, `pagina-${index + 1}.png`);
      fs.copyFileSync(pageSource, pageTarget);
    });

    console.log(`  ✓ Capítulo ${chapterNum}: ${pages.length} páginas`);
  });

  console.log(`\n✓ ${manga.title} processado: ${chapters.length} capítulos\n`);
});

console.log('✅ Todas as histórias foram organizadas!');

