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
    description: 'Rio de Janeiro, 2050. Akari Mizuta, especialista em Circularidade e Identidades Digitais, combate o greenwashing criando sistemas de rastreabilidade que honram o trabalho invisibilizado nas favelas do Rio. Com implantes retinais e baixa visão desde nascença, elu vê através das mentiras corporativas para construir justiça material verdadeira.',
    author: '',
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
    description: 'Vitória, 2050. Damião "Dami" Luembe, especialista em Sistemas Sociais e Governança, luta pela acessibilidade comunicacional em serviços públicos. Surdo desde nascença, LIBRAS é sua primeira língua. No tribunal e além, elu trabalha para garantir que pessoas surdas sejam verdadeiramente ouvidas e compreendidas.',
    author: '',
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
    description: 'Damasco, 2044. Farid Al-Khatib, um jovem refugiado sírio, perde a mão direita em uma explosão. Com uma prótese mioelétrica integrada aos nervos, elu transforma sua experiência de trauma em missão: usar tecnologia para verificação cívica e justiça descentralizada, protegendo outros refugiados através de sistemas transparentes.',
    author: '',
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
    description: 'Manaus, Amazônia. Iara, uma mulher indígena Tukano, une sabedoria ancestral com ciência de biomateriais para criar soluções regenerativas. Desde criança, quando uma doutora itinerante plantou a semente do cuidado em sua mão queimada, Iara desenvolve materiais vivos que cicatrizam, adaptam-se e regeneram, honrando tanto a floresta quanto a tecnologia.',
    author: '',
    chapters: [
    ],
  },
  {
    id: 'lara',
    title: 'Lara',
    coverImage: '/mangas/lara/capa.png',
    description: 'São Paulo, 2050. Lara Valença, arquiteta em cadeira de rodas, revoluciona o biodesign radical. Com óculos de realidade aumentada que mapeiam acessibilidade em 360 graus, ela revela um problema silencioso: espaços "acessíveis" que mataram a natureza. Lara cria cidades biofílicas onde acessibilidade e vida se encontram, transformando concreto em ecossistemas vivos.',
    author: '',
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
    description: 'Recife, 2035. Teodora, uma menina parda de primeira geração na escola, descobre que não aprende com palavras — aprende com ritmo, toque e vibração. A matemática não é abstrata para ela: é corporal, é música, é dança. Theo transforma sua forma única de aprender em sistemas de computação espacial e educação imersiva que ressoam com o corpo inteiro.',
    author: '',
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
