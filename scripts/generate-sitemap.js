const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function generateSitemap() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory).filter(filename => /^\d/.test(filename));

  let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Highest priority for root URL and blog URL
  const importantPages = [
    { url: '', priority: 1.0 },
    { url: 'blog/page/1', priority: 1.0 },
  ];

  importantPages.forEach((page) => {
    sitemapContent += `
  <url>
    <loc>https://patrickprunty.com/${page.url}</loc>
    <changefreq>daily</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  // Adding dynamic blog content with higher priority for latest posts
  filenames.forEach((filename) => {
    try {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      const postDate = new Date(data.date);
      const url = `https://patrickprunty.com/blog/${filename.replace(/\.md$/, '')}`;
      const formattedDate = postDate.toISOString();

      // Assign higher priority for posts within the last 30 days
      const daysSincePost = (Date.now() - postDate) / (1000 * 60 * 60 * 24);
      const priority = daysSincePost <= 30 ? 0.9 : 0.8;

      sitemapContent += `
  <url>
    <loc>${url}</loc>
    <lastmod>${formattedDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
    } catch (error) {
      console.error(`Error processing file ${filename}:`, error);
    }
  });

  // Adding static pages with lower priority
  const staticPages = [
    'newsletter',
    'photography',
    'blog/page/2',
    'blog/page/3',
    'project/jigsaw-academy',
    'project/jigsaw-presents',
  ];

  staticPages.forEach((page) => {
    sitemapContent += `
  <url>
    <loc>https://patrickprunty.com/${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>`;
  });

  sitemapContent += '\n</urlset>';

  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemapContent);
  console.log('Sitemap generated successfully.');
}

generateSitemap();
