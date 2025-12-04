#!/usr/bin/env python3
import os
import shutil
import re
from pathlib import Path

source_dir = Path("/Users/gabrielaragao/Downloads/zeit")
target_dir = Path("/Users/gabrielaragao/Downloads/Zeit/zeit-design-fiction/public/mangas")

mangas = [
    {"folder": "Akari", "id": "akari"},
    {"folder": "Dami", "id": "dami"},
    {"folder": "Farid", "id": "farid"},
    {"folder": "Iara", "id": "iara"},
    {"folder": "Lara", "id": "lara"},
    {"folder": "Theo", "id": "theo"},
]

def sort_key(filename):
    """Extrai números do nome do arquivo para ordenação (ex: P1P1 -> (1, 1))"""
    match = re.search(r'P(\d+)P(\d+)', filename)
    if match:
        return (int(match.group(1)), int(match.group(2)))
    return (0, 0)

for manga in mangas:
    source_path = source_dir / manga["folder"]
    target_path = target_dir / manga["id"]
    
    if not source_path.exists():
        print(f"Pasta não encontrada: {source_path}")
        continue
    
    # Listar arquivos de páginas
    pages = [f for f in source_path.iterdir() if f.is_file() and re.match(r'^P\d+P\d+', f.name)]
    pages.sort(key=lambda x: sort_key(x.name))
    
    # Organizar por capítulo
    chapters = {}
    for page in pages:
        match = re.search(r'^P(\d+)P', page.name)
        if match:
            chapter_num = int(match.group(1))
            if chapter_num not in chapters:
                chapters[chapter_num] = []
            chapters[chapter_num].append(page)
    
    # Copiar páginas organizadas
    for chapter_num in sorted(chapters.keys()):
        chapter_dir = target_path / f"capitulo-{chapter_num}"
        chapter_dir.mkdir(parents=True, exist_ok=True)
        
        chapter_pages = sorted(chapters[chapter_num], key=lambda x: sort_key(x.name))
        for idx, page in enumerate(chapter_pages, 1):
            target_file = chapter_dir / f"pagina-{idx}.png"
            shutil.copy2(page, target_file)
        
        print(f"✓ {manga['id']} - Capítulo {chapter_num}: {len(chapter_pages)} páginas")

print("\n✅ Todas as páginas foram organizadas!")

