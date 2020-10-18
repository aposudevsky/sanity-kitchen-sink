export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8c5949da748844288163bf',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-f5nhptbm',
                  apiId: '894ffdec-c1b4-4ab5-836b-3a6b88f8b29e'
                },
                {
                  buildHookId: '5f8c594910b6b205240a5089',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-9hvrbkwu',
                  apiId: 'c76fb6ed-d9eb-4bdd-8209-a9632e8f8c8e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aposudevsky/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-9hvrbkwu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
