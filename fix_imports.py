import os
import re

root_dir = 'c:/Users/ADMIN/Desktop/Code/WEB/Oluwatosin_Success_Academy_FE/src/pages'
paths = []

for root, dirs, files in os.walk(root_dir):
    for f in files:
        if f.endswith('.tsx') or f.endswith('.ts'):
            paths.append(os.path.join(root, f))

for p in paths:
    with open(p, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Replace relative components imports with absolute alias imports
    new_content = re.sub(r'from [\'\"](\.\./)+components/', 'from "@/components/', content)
    
    if new_content != content:
        with open(p, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f'Fixed imports in {p}')
