import fs from 'fs';

fs.mkdirSync('docs/assets', { recursive: true });
fs.mkdirSync('product-demo', { recursive: true });

const feature = JSON.parse(fs.readFileSync('feature.json', 'utf8'));

const itemsHtml = feature.events
  .map(item => `<li>${item}</li>`)
  .join('\n');

const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>${feature.name} Demo</title>

<style>
body {
  font-family: Arial, sans-serif;
  background: #f6f7f9;
  margin: 0;
  padding: 40px;
}

.card {
  max-width: 760px;
  margin: auto;
  background: white;
  border: 1px solid #ddd;
  border-radius: 14px;
  padding: 28px;
}

h1 {
  margin-top: 0;
}

.badge {
  display: inline-block;
  padding: 6px 10px;
  background: #eee;
  border-radius: 999px;
  font-size: 13px;
}

li {
  margin: 10px 0;
}

.note {
  margin-top: 22px;
  padding: 14px;
  background: #f2f4f7;
  border-radius: 8px;
}
</style>
</head>

<body>

<section class="card" id="proctoring-card">

<span class="badge">Assessment Settings</span>

<h1>${feature.name}</h1>

<p>${feature.intro}</p>

<h3>Events monitored</h3>

<ul>
${itemsHtml}
</ul>

<div class="note">
${feature.value}
</div>

</section>

</body>
</html>`;

fs.writeFileSync('product-demo/index.html', html);

const bullets = feature.events
  .map(item => `- ${item}`)
  .join('\n');

const markdown = `# ${feature.name}

${feature.intro}

## What it monitors

${bullets}

${feature.value}

## Example

![${feature.name} settings](./assets/webcam-proctoring.png)

> This screenshot is generated automatically from the demo product page.
`;

fs.writeFileSync(
  'docs/webcam-proctoring.md',
  markdown
);

console.log('Generated product demo and Markdown documentation.');
