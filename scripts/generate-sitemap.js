const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function generateSitemap() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory).filter(filename => /^\d/.test(filename));
  console.log(filenames);

  let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Adding dynamic blog content
  filenames.forEach((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    const postDate = new Date(data.date);
    const currentDateMinus2Days = new Date(Date.now() - 300 * 24 * 60 * 60 * 1000);

    console.log(`Checking file: ${filename}`);
    console.log(`Post date: ${postDate}`);
    console.log(`Current date minus 2 days: ${currentDateMinus2Days}`);

    if (postDate > currentDateMinus2Days) {
      console.log('in if statement');
      sitemapContent += `
  <url>
    <loc>https://patrickprunty.com/blog/${filename.replace(/\.md$/, '')}</loc>
    <news:news xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
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

  // Adding static pages
  const staticPages = [
    '',
    'newsletter',
    'photography',
    'blog/page/1',
    'project/jigsaw-academy',
    'project/jigsaw-presents',
    'videos'
  ];

  staticPages.forEach((page) => {
    sitemapContent += `
  <url>
    <loc>https://patrickprunty.com/${page}</loc>
  </url>`;
  });

  sitemapContent += '\n</urlset>';
  console.log(sitemapContent);

  fs.writeFileSync(path.join(process.cwd(), 'public', 'news-sitemap.xml'), sitemapContent);
  console.log('Sitemap generated successfully.');
}

generateSitemap();
