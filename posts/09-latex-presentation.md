---
title: "Creating Professional Presentations with LaTeX: A Guide for STEM Professionals"
date: "2024-06-23"
image: "/images/articles/latex-presentation/latex-presentation3.png"
description: "Learn how to create elegant and professional presentation slides using LaTeX."
artwork: "Patrick Prunty's LaTex Presentation Template"
---

During my undergraduate studies, I observed that many of my Mathematics and Computer Science professors utilized remarkably
similar presentation slides characterized by their simplicity, elegance, and clarity. This consistency piqued my
curiosity, leading me to investigate the underlying cause. It was not until my postgraduate studies that I discovered
the
common thread: a typesetting system called _LaTeX_.

<style>
  @media only screen and (max-width: 600px) {
    .pdf-embed {
      display: none;
    }
    .pdf-link {
      display: block;
    }
  }
  @media only screen and (min-width: 601px) {
    .pdf-embed {
      display: block;
    }
    .pdf-link {
      display: none;
    }
  }
</style>

<div class="pdf-embed">
  <embed src="/pdfs/presentation2.pdf" width="100%" height="600px" />
</div>

<div class="pdf-link">
  <a href="/pdfs/presentation2.pdf" target="_blank">View an example presentation PDF using LaTex.</a>
</div>

## What is LaTeX?

LaTeX, pronounced _"Lay-tech,"_ is a document preparation system widely used in academia, particularly in
fields where complex mathematical notation is common. It offers precise control over document formatting and layout,
making it ideal for creating professional-looking presentations, articles, and theses.

## Getting Started with LaTeX

For those interested in exploring LaTeX, [overleaf.com](https://www.overleaf.com/) provides a user-friendly online
integrated development environment (IDE) for editing LaTeX documents. While LaTeX is technically a markup language and
may present a learning curve for those unfamiliar with coding concepts, it is entirely possible to produce high-quality
documents without extensive programming knowledge.

<figure>
  <img src="https://patrickprunty.com/images/articles/latex-presentation/overleaf-editor.png" alt="Image description here">
  <figcaption>Overleaf LaTeX Editor.</figcaption>
</figure>

## Creating Presentation Slides with LaTeX

To facilitate the creation of presentation slides similar to those commonly used in academic settings, I have developed
a template available on [GitHub](https://github.com/pprunty/LaTeX-presentation-template). This template can serve as a
starting point for your own presentations.

### Recommended Project Structure

The recommended project structure is as follows:

```bash
project/
├── README.md
└── presentation
    ├── imgs
    │   ├── moon.jpeg
    │   └── organization_logo.png
    ├── main.tex
    ├── output-presentation-example.pdf
    └── slides
        ├── slide_1.tex
        ├── slide_2.tex
        ├── slide_3.tex
        ├── slide_4.tex
        └── slide_5.tex
```

By utilizing this LaTeX structure for your presentations, you can achieve a level of professionalism and consistency
often associated with academic lectures. LaTeX's ability to handle complex equations and maintain consistent formatting
across multiple slides makes it particularly valuable in scientific and mathematical fields. Moreover, this modular
approach allows for easy collaboration and quick updates to specific sections of your presentation without affecting the
overall structure.

To start working on your presentation:

1. Import this project structure into Overleaf or your preferred LaTeX editor.
2. Edit the main.tex file to set up your presentation's overall structure and theme.
3. Create or modify individual slide files in the slides/ directory.
4. Add any necessary images to the imgs/ directory, Add any necessary images to the imgs/ directory, including an `organization_logo.png` which will be displayed on the first slide.
5. Compile your project (in Overleaf, press the green "Recompile" button) to preview your presentation.

By utilizing LaTeX for your presentations, you can achieve a level of professionalism and consistency often associated
with academic lectures. The system's ability to handle complex equations and maintain consistent formatting across
multiple slides makes it particularly valuable in scientific and mathematical fields.

## Customizing Your Presentation

### Popular Themes

If you wish to use these presentation capabilities for your organization, LaTeX offers several themes for Beamer
presentations. While personal preferences may vary, three of the most widely used and versatile themes for professional
presentations are:

1. Madrid
2. Berlin
3. Copenhagen

These themes are popular due to their clean layouts and professional appearance. In the provided example, the Madrid
theme is being used. You can change the theme in the first few lines of the `main.tex` file by modifying
the `\usetheme{}`
command.

```typeset
\documentclass{beamer}
\usetheme{Berlin} %< Updated theme from Madrid to Berlin
% Madrid

\usepackage{float}
\usepackage{xcolor}
\usepackage{scrextend}
\usepackage[style=authoryear]{biblatex}
\usepackage{verbatim}
\usepackage{tikz}
```

You can preview these themes and find more information about Beamer presentation styles at
the [Overleaf Beamer Theme Gallery](https://www.overleaf.com/gallery/tagged/beamer).

### Customizing Colors

Companies often require the use of organization colors for presentations. If the default color scheme of these themes
doesn't match your organization's branding, you can customize the theme color. To do this, use the `\usecolortheme{}`
command in your `main.tex` file. For example, to change to a blue color theme, you could add `\usecolortheme{blue}`
after
the `\usetheme{}` line. For more fine-grained control, you can define custom colors using the `\definecolor` command and
then use these in various theme elements. For instance:

```typeset
\documentclass{beamer}
\usetheme{Berlin} %< Updated theme from Madrid to Berlin
% Madrid

\usepackage{float}
\usepackage{xcolor}
\usepackage{scrextend}
\usepackage[style=authoryear]{biblatex}
\usepackage{verbatim}
\usepackage{tikz}

\definecolor{myblue}{RGB}{0,114,178}
\setbeamercolor{structure}{fg=myblue}
```

This defines a custom blue color and sets it as the main structural color for the presentation. Remember to experiment
and test your changes to achieve the desired look that aligns with your organization's branding guidelines.

<figure>
  <img src="https://patrickprunty.com/images/articles/latex-presentation/latex-custom-blue.png" alt="Image description here">
  <figcaption>Example of Custom Blue matching Organizational Theme Color.</figcaption>
</figure>

By utilizing LaTeX for your presentations, you can achieve a level of professionalism and consistency often associated
with academic lectures. The system's ability to handle complex equations and maintain consistent formatting across
multiple slides makes it particularly valuable in scientific and mathematical fields.

If you have any questions or need further assistance, please feel free to contact me, or set up some time with me via
the [consultations tab on my website](https://calendly.com/jigsawpresents).