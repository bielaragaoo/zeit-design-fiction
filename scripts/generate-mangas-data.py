#!/usr/bin/env python3
import os
import json
from pathlib import Path

mangas_dir = Path(__file__).parent.parent / "public" / "mangas"
output_file = Path(__file__).parent.parent / "app" / "data" / "mangas.ts"

mangas_config = [
    {"id": "akari", "title": "Akari", "description": "A história de Akari, uma jornada única e emocionante."},
    {"id": "dami", "title": "Dami", "description": "As aventuras de Dami em um mundo cheio de desafios."},
    {"id": "farid", "title": "Farid", "description": "A saga épica de Farid e suas descobertas."},
    {"id": "iara", "title": "Iara", "description": "A jornada mística de Iara através de terras encantadas."},
    {"id": "lara", "title": "Lara", "description": "As aventuras de Lara em busca de respostas."},
    {"id": "theo", "title": "Theo", "description": "A história de Theo e sua busca pela verdade."},
]

def get_chapters(manga_id):
    manga_path = mangas_dir / manga_id
    if not manga_path.exists():
        return []
    
    chapters = []
    for item in manga_path.iterdir():
        if item.is_dir() and item.name.startswith("capitulo-"):
            chapter_num = int(item.name.replace("capitulo-", ""))
            pages = sorted(
                [f for f in item.iterdir() if f.suffix == ".png"],
                key=lambda x: int(x.stem.replace("pagina-", ""))
            )
            
            if pages:
                chapters.append({
                    "chapterNum": chapter_num,
                    "pages": [f"/mangas/{manga_id}/{item.name}/{p.name}" for p in pages]
                })
    
    return sorted(chapters, key=lambda x: x["chapterNum"])

output = """export interface Manga {
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
"""

for idx, config in enumerate(mangas_config):
    chapters = get_chapters(config["id"])
    has_cover = (mangas_dir / config["id"] / "capa.png").exists()
    
    output += "  {\n"
    output += f"    id: '{config['id']}',\n"
    output += f"    title: '{config['title']}',\n"
    output += f"    coverImage: '{'/mangas/' + config['id'] + '/capa.png' if has_cover else ''}',\n"
    output += f"    description: '{config['description']}',\n"
    output += "    author: 'Zeit Design',\n"
    output += "    chapters: [\n"
    
    for chapter in chapters:
        output += "      {\n"
        output += f"        id: '{config['id']}-{chapter['chapterNum']}',\n"
        output += f"        title: 'Capítulo {chapter['chapterNum']}',\n"
        output += "        pages: [\n"
        for page in chapter["pages"]:
            output += f"          '{page}',\n"
        output += "        ],\n"
        output += "      },\n"
    
    output += "    ],\n"
    output += "  }" + ("," if idx < len(mangas_config) - 1 else "") + "\n"

output += """];

export function getMangaById(id: string): Manga | undefined {
  return mangas.find(manga => manga.id === id);
}
"""

output_file.write_text(output, encoding="utf-8")
print("✅ Arquivo mangas.ts gerado com sucesso!")

