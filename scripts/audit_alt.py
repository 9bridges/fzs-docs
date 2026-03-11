import os, re

for root, dirs, files in os.walk('docs'):
    for f in sorted(files):
        if not (f.endswith('.md') or f.endswith('.mdx')):
            continue
        path = os.path.join(root, f)
        text = open(path).read()
        imgs = re.findall(r'!\[([^\]]*)\]\([^)]+\)', text)
        for alt in imgs:
            status = 'EMPTY' if not alt.strip() else 'ok   '
            print(f'{status} | {path} | [{alt}]')
