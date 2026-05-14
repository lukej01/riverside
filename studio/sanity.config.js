import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'riverside-pizza',
  title: 'Riverside Pizza — Menu Editor',

  // ⚠️  Replace with your actual project ID after running: npm create sanity@latest
  projectId: 'REPLACE_WITH_YOUR_PROJECT_ID',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Menu')
          .items([
            S.listItem()
              .title('Specialty Pizzas')
              .child(S.documentList().title('Specialty Pizzas').filter('_type == "menuItem" && category == "Specialty Pizzas"')),
            S.listItem()
              .title('Build Your Own')
              .child(S.documentList().title('Build Your Own').filter('_type == "menuItem" && category == "Build Your Own"')),
            S.listItem()
              .title('Subs & Sandwiches')
              .child(S.documentList().title('Subs & Sandwiches').filter('_type == "menuItem" && category == "Subs & Sandwiches"')),
            S.listItem()
              .title('Wings & Sides')
              .child(S.documentList().title('Wings & Sides').filter('_type == "menuItem" && category == "Wings & Sides"')),
            S.listItem()
              .title('Salads')
              .child(S.documentList().title('Salads').filter('_type == "menuItem" && category == "Salads"')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
