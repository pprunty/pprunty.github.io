const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function generateSitemap() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory).filter(filename => /^\d/.test(filename));
  console.log(filenames)

  let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">`;

  filenames.forEach((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    const postDate = new Date(data.date);
    const currentDateMinus2Days = new Date(Date.now() - 40 * 24 * 60 * 60 * 1000);

    console.log(`Checking file: ${filename}`);
    console.log(`Post date: ${postDate}`);
    console.log(`Current date minus 2 days: ${currentDateMinus2Days}`);

    if (postDate > currentDateMinus2Days) {
      console.log('in if statement')
      sitemapContent += `
  <url>
    <loc>https://patrickprunty.com/blog/page/1/${filename.replace(/\.md$/, '')}</loc>
    <news:news>
      <news:publication>
        <news:name>Patrick Prunty Blog</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${postDate.toISOString()}</news:publication_date>
      <news:title>${data.title}</news:title>
    </news:news>
  </url>`;
    }
  });

  sitemapContent += '\n</urlset>';
  console.log(sitemapContent)

  fs.writeFileSync(path.join(process.cwd(), 'public', 'news-sitemap.xml'), sitemapContent);
  console.log('News sitemap generated successfully.');
}

generateSitemap();
