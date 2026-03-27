# CLAUDE.md — Poor Plebs Website

## Project Overview

Company website for **Poor-Plebs e.U.** hosted at [poor-plebs.com](https://poor-plebs.com).
Built with Jekyll using the [Chirpy theme](https://github.com/cotes2020/jekyll-theme-chirpy) (v7.5), deployed via GitHub Pages.

## Build & Run

```bash
# Install dependencies
bundle install

# Local dev server with live reload
bash tools/run.sh
# or: bundle exec jekyll s -l

# Production build + test
bash tools/test.sh
# or: JEKYLL_ENV=production bundle exec jekyll b && htmlproofer _site
```

## Project Structure

- `_posts/` — Blog posts (format: `YYYY-MM-DD-title.md`)
- `_tabs/` — Navigation pages (about, archives, categories, tags)
- `_data/` — Data files (contact.yml, share.yml)
- `_plugins/` — Ruby plugins (posts-lastmod-hook.rb)
- `_config.yml` — Site configuration
- `tools/` — Dev/test shell scripts
- `assets/lib` — Git submodule for Chirpy static assets (optional self-hosting)

## Post Conventions

Posts go in `_posts/` with filename `YYYY-MM-DD-title.md`. Front matter:

```yaml
---
title: "Post Title"
date: YYYY-MM-DD HH:MM:SS +0000
categories: [Category, Subcategory]
tags: [tag1, tag2]
---
```

## Key Configuration

- **Domain**: poor-plebs.com (CNAME file)
- **Comments**: Giscus (GitHub Discussions on poor-plebs/poor-plebs.github.io)
- **PWA**: Enabled
- **CI/CD**: GitHub Actions (`.github/workflows/pages-deploy.yml`)

## Code Style

- 2-space indentation (see `.editorconfig`)
- Single quotes in JS/CSS, double quotes in YAML
- LF line endings
- Prettier as default formatter
