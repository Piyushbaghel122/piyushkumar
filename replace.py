import sys
with open('src/components/frontend/dashbaord.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

new_content = content.replace(
    '<a href="#" className="text-xs font-medium text-blue-400 hover:text-blue-300">View All Projects →</a>',
    '<a href="#" className="text-xs font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1">View All Projects <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a>'
)

with open('src/components/frontend/dashbaord.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)
print('Done!')
