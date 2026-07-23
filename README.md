# Enterprise Portfolio

A static portfolio website for Yasser Alrajeh's enterprise infrastructure, cloud, and cybersecurity projects.

## Before publishing

Replace every occurrence of:

- Verify the LinkedIn profile URL in `index.html` and `projects/azure-governance.html`.
- The sample About section text in `index.html`

## Publish with GitHub Pages

1. Create a new public repository named `enterprise-portfolio`.
2. Upload all files from this folder to the repository root.
3. Open **Settings**.
4. Open **Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/root`.
7. Save.

Your site will appear at:

`https://YOUR-USERNAME.github.io/enterprise-portfolio/`

## Custom domain

If you'd like to use your own domain instead of the default GitHub Pages URL:

1. In the repo, go to **Settings → Pages → Custom domain**, enter your domain, and save (this creates a `CNAME` file automatically).
2. At your DNS provider (e.g. Cloudflare), add:
   - 4 **A records** at the root pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, or
   - A **CNAME record** for `www` pointing to `YOUR-USERNAME.github.io`.
3. If using Cloudflare, set the DNS records to "DNS only" (grey cloud) until GitHub verifies the domain, then switch to "Proxied" (orange cloud).
4. Back in GitHub Pages settings, enable **Enforce HTTPS** once the certificate is issued.

## Structure

- `index.html` — homepage
- `projects/azure-governance.html` — Azure Governance project page (full write-up with 86 screenshots, organized by section with a sticky table of contents and click-to-enlarge gallery)
- `style.css` — all visual styling
- `script.js` — smooth navigation, screenshot lightbox, and table-of-contents scrollspy
- `assets/images/azure/` — Azure Governance project screenshots (`fig-01.jpg` … `fig-86.jpg`)

## Adding another project

1. Duplicate `projects/azure-governance.html` as a starting template, or build a new page using the same `project-hero`, `content-layout` + `.toc`, and `.shot-grid` gallery pattern.
2. Add its screenshots under `assets/images/<project-name>/`.
3. Add a new `.project-card` in `index.html`'s `#projects` section linking to the new page, and remove/replace the "Planned" placeholder card once you have real content for it.
