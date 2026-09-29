import sys
with open('src/components/frontend/projectsData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

new_content = content.replace(
'''  },{
    id: 9, 
    
  }
];''',
'''  },
  {
    id: 9,
    title: "E-Commerce Backend",
    description: "REST API with authentication, product management and database integration.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&q=80",
    tags: ["FastAPI", "PostgreSQL", "JWT"],
    githubUrl: "https://github.com/Piyushbaghel122",
    demoUrl: ""
  }
];'''
)

with open('src/components/frontend/projectsData.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)
print('Done!')
