# Project Structure & Config

## Base Config
- Base URL: `/Dave-Huntley`
- Site URL: `https://stimul8d.github.io`
- Using Astro 4.x with MDX, Tailwind, and sitemap
- Font stack: Inter Variable and Bricolage Grotesque Variable

## Publishing Rules
- Posts should be published at least 2 weeks apart
- Publication dates spread throughout the year for consistent content
- No more than 2 posts per month
- Current posts to be backdated to create natural history
- Future posts to maintain ~2 week gap rule

## Reading Time Rules
- Calculate at 200 words per minute
- Always round up to nearest 5 minutes
- e.g. 800 words = 4 mins, rounds to 5 mins
- e.g. 1100 words = 5.5 mins, rounds to 10 mins
- Hard code this value in the template for each post

## Content Status
1. Autonomy, Mastery, Purpose
   - Published: 2023-10-15
   - Status: Complete with image and credit
   - Image works: Yes

2. Has Agile Lost Its Way
   - Published: 2023-12-18
   - Status: Complete with image and credit
   - Image works: Yes

3. Fix Your Standups
   - Published: 2024-01-15
   - Status: Complete with image and credit
   - Image works: Yes

4. Refactoring Priority
   - Published: 2024-12-28
   - Need to update with image credit
   - Image not yet added to public folder

5. Can't Sell Agile
   - Published: 2023-11-12
   - Need to update with image credit
   - Image works: Yes

6. Strategic Alignment Isn't Rocket Science
   - Published: 2024-02-15
   - Status: Complete with content
   - Image: Not required

7. Building Your First X-Matrix
   - Published: 2024-03-01
   - Status: Complete with 8 step-by-step images
   - Images: Complete set in xmatrix folder

8. Making Catchball Work
   - Published: 2024-03-15
   - Status: Complete with content
   - Image: Not required

## Image Handling
- Blog images live in `/public/blog/`
- Image filename MUST match the blog slug exactly (e.g. blog slug `selling-agile` needs image `selling-agile.jpg`)
- Special case: x-matrix tutorial images in `/public/blog/xmatrix/` numbered one.png through eight.png
- All blog images must be 1920x1280 (Medium from Unsplash)
- Images are referenced using slug-based paths in templates
- DO NOT add image data to frontmatter - it causes issues
- Image paths are built automatically in [slug].astro using `imagePath = /Dave-Huntley/blog/${entry.slug}.jpg`

## Blog Post Structure
```markdown
---
title: "Post Title"
publishDate: "YYYY-MM-DD"
category: "Category Name"
tags: ["tag1", "tag2"]
summary: "Hook-style summary that tells the reader what they'll get"
readingTime: 5
draft: false
---
```

## Layout Components
- Layout.astro: Base layout with nav, footer, and meta tags
- Using shadcn/ui components
- [slug].astro: Handles all blog post rendering including images
- DO NOT use separate BlogLayout - everything is in [slug].astro

## Common Gotchas
1. Images must match blog post slug exactly (except xmatrix sequence)
2. Base URL is handled in the template, don't add it to content
3. All content lives in `/src/content/blog/`
4. Favicon and other static assets need base URL
5. Never truncate content or use placeholders

## Next Tasks
1. Add remaining images to public folder
2. Update refactoring and selling agile posts with proper image credits
3. Double check layout responsiveness
4. Test build and deployment
5. Review publication date spacing