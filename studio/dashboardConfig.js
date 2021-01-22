export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
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
                  buildHookId: '600afdbd4153790b50e72595',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-k5gphhhq',
                  apiId: '977797a9-dc20-4e04-93f9-c0627fd84d4c'
                },
                {
                  buildHookId: '600afdbda2094109956e471d',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-79zuuxvy',
                  apiId: '9f32f633-1c70-4deb-8cf9-e9ac84169bdd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/agridigit/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-79zuuxvy.netlify.app', category: 'apps'}
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
