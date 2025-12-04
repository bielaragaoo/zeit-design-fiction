export interface Manga {
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
  {
    id: 'akari',
    title: 'Akari',
    coverImage: '/mangas/akari/capa.png',
    description: 'A história de Akari, uma jornada única e emocionante.',
    author: 'Zeit Design',
    chapters: [
      {
        id: 'akari-1',
        title: 'Capítulo 1',
        pages: [
          '/mangas/akari/capitulo-1/pagina-1.png',
        ],
      },
      {
        id: 'akari-2',
        title: 'Capítulo 2',
        pages: [
          '/mangas/akari/capitulo-2/pagina-1.png',
        ],
      },
      {
        id: 'akari-3',
        title: 'Capítulo 3',
        pages: [
          '/mangas/akari/capitulo-3/pagina-1.png',
        ],
      },
      {
        id: 'akari-4',
        title: 'Capítulo 4',
        pages: [
          '/mangas/akari/capitulo-4/pagina-1.png',
        ],
      },
      {
        id: 'akari-5',
        title: 'Capítulo 5',
        pages: [
          '/mangas/akari/capitulo-5/pagina-1.png',
        ],
      },
      {
        id: 'akari-6',
        title: 'Capítulo 6',
        pages: [
          '/mangas/akari/capitulo-6/pagina-1.png',
        ],
      },
      {
        id: 'akari-7',
        title: 'Capítulo 7',
        pages: [
          '/mangas/akari/capitulo-7/pagina-1.png',
        ],
      },
      {
        id: 'akari-8',
        title: 'Capítulo 8',
        pages: [
          '/mangas/akari/capitulo-8/pagina-1.png',
        ],
      },
    ],
  },
  {
    id: 'dami',
    title: 'Dami',
    coverImage: '/mangas/dami/capa.png',
    description: 'As aventuras de Dami em um mundo cheio de desafios.',
    author: 'Zeit Design',
    chapters: [
      {
        id: 'dami-1',
        title: 'Capítulo 1',
        pages: [
          '/mangas/dami/capitulo-1/pagina-1.png',
          '/mangas/dami/capitulo-1/pagina-2.png',
          '/mangas/dami/capitulo-1/pagina-3.png',
        ],
      },
      {
        id: 'dami-2',
        title: 'Capítulo 2',
        pages: [
          '/mangas/dami/capitulo-2/pagina-1.png',
          '/mangas/dami/capitulo-2/pagina-2.png',
          '/mangas/dami/capitulo-2/pagina-3.png',
          '/mangas/dami/capitulo-2/pagina-4.png',
        ],
      },
      {
        id: 'dami-3',
        title: 'Capítulo 3',
        pages: [
          '/mangas/dami/capitulo-3/pagina-1.png',
        ],
      },
      {
        id: 'dami-4',
        title: 'Capítulo 4',
        pages: [
          '/mangas/dami/capitulo-4/pagina-1.png',
          '/mangas/dami/capitulo-4/pagina-2.png',
        ],
      },
      {
        id: 'dami-6',
        title: 'Capítulo 6',
        pages: [
          '/mangas/dami/capitulo-6/pagina-1.png',
        ],
      },
      {
        id: 'dami-7',
        title: 'Capítulo 7',
        pages: [
          '/mangas/dami/capitulo-7/pagina-1.png',
        ],
      },
      {
        id: 'dami-8',
        title: 'Capítulo 8',
        pages: [
          '/mangas/dami/capitulo-8/pagina-1.png',
        ],
      },
    ],
  },
  {
    id: 'farid',
    title: 'Farid',
    coverImage: '/mangas/farid/capa.png',
    description: 'A saga épica de Farid e suas descobertas.',
    author: 'Zeit Design',
    chapters: [
      {
        id: 'farid-1',
        title: 'Capítulo 1',
        pages: [
          '/mangas/farid/capitulo-1/pagina-1.png',
        ],
      },
      {
        id: 'farid-2',
        title: 'Capítulo 2',
        pages: [
          '/mangas/farid/capitulo-2/pagina-1.png',
        ],
      },
      {
        id: 'farid-3',
        title: 'Capítulo 3',
        pages: [
          '/mangas/farid/capitulo-3/pagina-1.png',
        ],
      },
      {
        id: 'farid-4',
        title: 'Capítulo 4',
        pages: [
          '/mangas/farid/capitulo-4/pagina-1.png',
        ],
      },
      {
        id: 'farid-5',
        title: 'Capítulo 5',
        pages: [
          '/mangas/farid/capitulo-5/pagina-1.png',
        ],
      },
      {
        id: 'farid-6',
        title: 'Capítulo 6',
        pages: [
          '/mangas/farid/capitulo-6/pagina-1.png',
        ],
      },
      {
        id: 'farid-7',
        title: 'Capítulo 7',
        pages: [
          '/mangas/farid/capitulo-7/pagina-1.png',
        ],
      },
      {
        id: 'farid-8',
        title: 'Capítulo 8',
        pages: [
          '/mangas/farid/capitulo-8/pagina-1.png',
        ],
      },
    ],
  },
  {
    id: 'iara',
    title: 'Iara',
    coverImage: '/mangas/iara/capa.png',
    description: 'A jornada mística de Iara através de terras encantadas.',
    author: 'Zeit Design',
    chapters: [
    ],
  },
  {
    id: 'lara',
    title: 'Lara',
    coverImage: '/mangas/lara/capa.png',
    description: 'As aventuras de Lara em busca de respostas.',
    author: 'Zeit Design',
    chapters: [
      {
        id: 'lara-1',
        title: 'Capítulo 1',
        pages: [
          '/mangas/lara/capitulo-1/pagina-1.png',
          '/mangas/lara/capitulo-1/pagina-2.png',
          '/mangas/lara/capitulo-1/pagina-3.png',
        ],
      },
      {
        id: 'lara-2',
        title: 'Capítulo 2',
        pages: [
          '/mangas/lara/capitulo-2/pagina-1.png',
          '/mangas/lara/capitulo-2/pagina-2.png',
          '/mangas/lara/capitulo-2/pagina-3.png',
          '/mangas/lara/capitulo-2/pagina-4.png',
        ],
      },
      {
        id: 'lara-3',
        title: 'Capítulo 3',
        pages: [
          '/mangas/lara/capitulo-3/pagina-1.png',
          '/mangas/lara/capitulo-3/pagina-2.png',
          '/mangas/lara/capitulo-3/pagina-3.png',
          '/mangas/lara/capitulo-3/pagina-4.png',
        ],
      },
      {
        id: 'lara-4',
        title: 'Capítulo 4',
        pages: [
          '/mangas/lara/capitulo-4/pagina-1.png',
          '/mangas/lara/capitulo-4/pagina-2.png',
          '/mangas/lara/capitulo-4/pagina-3.png',
        ],
      },
      {
        id: 'lara-5',
        title: 'Capítulo 5',
        pages: [
          '/mangas/lara/capitulo-5/pagina-1.png',
          '/mangas/lara/capitulo-5/pagina-2.png',
          '/mangas/lara/capitulo-5/pagina-3.png',
          '/mangas/lara/capitulo-5/pagina-4.png',
        ],
      },
      {
        id: 'lara-6',
        title: 'Capítulo 6',
        pages: [
          '/mangas/lara/capitulo-6/pagina-1.png',
          '/mangas/lara/capitulo-6/pagina-2.png',
          '/mangas/lara/capitulo-6/pagina-3.png',
          '/mangas/lara/capitulo-6/pagina-4.png',
        ],
      },
      {
        id: 'lara-7',
        title: 'Capítulo 7',
        pages: [
          '/mangas/lara/capitulo-7/pagina-1.png',
          '/mangas/lara/capitulo-7/pagina-2.png',
          '/mangas/lara/capitulo-7/pagina-3.png',
          '/mangas/lara/capitulo-7/pagina-4.png',
        ],
      },
      {
        id: 'lara-8',
        title: 'Capítulo 8',
        pages: [
          '/mangas/lara/capitulo-8/pagina-1.png',
          '/mangas/lara/capitulo-8/pagina-2.png',
          '/mangas/lara/capitulo-8/pagina-3.png',
          '/mangas/lara/capitulo-8/pagina-4.png',
        ],
      },
    ],
  },
  {
    id: 'theo',
    title: 'Theo',
    coverImage: '/mangas/theo/capa.png',
    description: 'A história de Theo e sua busca pela verdade.',
    author: 'Zeit Design',
    chapters: [
      {
        id: 'theo-1',
        title: 'Capítulo 1',
        pages: [
          '/mangas/theo/capitulo-1/pagina-1.png',
        ],
      },
      {
        id: 'theo-2',
        title: 'Capítulo 2',
        pages: [
          '/mangas/theo/capitulo-2/pagina-1.png',
        ],
      },
      {
        id: 'theo-3',
        title: 'Capítulo 3',
        pages: [
          '/mangas/theo/capitulo-3/pagina-1.png',
        ],
      },
      {
        id: 'theo-4',
        title: 'Capítulo 4',
        pages: [
          '/mangas/theo/capitulo-4/pagina-1.png',
        ],
      },
      {
        id: 'theo-5',
        title: 'Capítulo 5',
        pages: [
          '/mangas/theo/capitulo-5/pagina-1.png',
        ],
      },
      {
        id: 'theo-6',
        title: 'Capítulo 6',
        pages: [
          '/mangas/theo/capitulo-6/pagina-1.png',
        ],
      },
      {
        id: 'theo-7',
        title: 'Capítulo 7',
        pages: [
          '/mangas/theo/capitulo-7/pagina-1.png',
        ],
      },
      {
        id: 'theo-8',
        title: 'Capítulo 8',
        pages: [
          '/mangas/theo/capitulo-8/pagina-1.png',
        ],
      },
    ],
  }
];

export function getMangaById(id: string): Manga | undefined {
  return mangas.find(manga => manga.id === id);
}
