import '../src/assets/ux4g/css/ux4g-min.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    docs: {
      source: {
        transform: (code, storyContext) => {
          // Get the component name, default to empty string if not found
          const compName = storyContext.component?.displayName || storyContext.component?.name || storyContext.title.split('/').pop() || 'Component';
          
          // If the code already has an import (like the ones we manually added), don't transform it
          if (code.includes('import {')) return code;

          // Format the original code with indentation
          const indentedCode = code.split('\n').map(line => '    ' + line).join('\n');
          
          return `import { ${compName} } from 'react-ux4g';\n\nexport default function App() {\n  return (\n${indentedCode}\n  );\n}`;
        }
      }
    }
  },
};

export default preview;