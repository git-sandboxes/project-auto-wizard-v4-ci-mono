require('fs').mkdirSync('dist', { recursive: true });
require('fs').writeFileSync('dist/index.html', '<h1>ok</h1>');
throw new Error("qa build fail");
