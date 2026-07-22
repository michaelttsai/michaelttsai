# michaelttsai.com

My build-in-public site and living resume. I document what I build, what happened, and what I would do differently.

Hand-written HTML and CSS. No framework, no build step, no dependencies, no JavaScript. Deployed to GitHub Pages straight from `main`.

## Run it locally

```
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Adding an entry

See [NOTES.md](NOTES.md).

## Structure

```
index.html      About, and the homepage
projects/       one HTML file per project, plus an index
blog/           one HTML file per post, plus an index
css/style.css   the whole design
404.html        not-found page
CNAME           custom domain
```
