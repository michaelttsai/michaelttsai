# How I add a new entry

Notes to future me. Read this before touching anything.

---

## Preview locally first

Never edit blind. From the folder that contains `index.html`:

```
python3 -m http.server 8000
```

Then open <http://localhost:8000> in a browser. Press `Ctrl+C` in the terminal to stop it.

**Why a server instead of double-clicking the file:** every page links to the stylesheet as `/css/style.css`. The leading slash means "start from the site root." Opened as a plain file, the browser thinks the root is your hard drive and the page loads with no styling. A local server gives it a real root, so what you see matches what visitors will see.

---

## The workflow, every single time

Same five steps whether it is a new project, a new post, or a typo. The reps are the point.

```
git checkout main                    # start from the current live version
git pull                             # make sure it is up to date
git checkout -b add-project-name     # new branch, named for what it does
```

Do the work. Then:

```
git status                           # what changed?
git diff                             # what exactly changed inside those files?
git add .                            # stage every change for the next commit
git commit -m "Add project: name"    # save a labelled snapshot
git push -u origin add-project-name  # send the branch to GitHub
```

Then open a pull request on GitHub, read your own diff one more time, and merge. Finally:

```
git checkout main
git pull
git branch -d add-project-name       # clean up the branch you no longer need
```

GitHub Pages redeploys automatically within about a minute of the merge.

---

## Adding a new project

**Two files. One new, one edited.**

**1. Create `projects/my-project-name.html`**

Easiest route: copy `projects/personal-site.html` and replace the contents. Every project page has the same six parts, in this order:

| Part | Where it lives |
|---|---|
| Status | the `.meta` line at the top, plus the `<title>` and `<meta name="description">` in the head |
| Title | the `<h1>` |
| One-line summary | the `<p class="lede">` |
| What it is | first `<h2>` section |
| Why I built it | second `<h2>` section |
| Outcome so far | third `<h2>` section |
| Lessons / what I'd do differently | the `<div class="annotation">` block |
| Related posts | the `<div class="related">` block at the bottom |

Status values and the class that goes with each:

- Active — `status status--active`
- Shipped — `status status--shipped`
- Paused — `status status--paused`
- Archived — `status status--archived`

**2. Edit `projects/index.html`**

Copy an existing `<li class="entry">` block, paste it at the **top** of the `<ul class="entry-list">`, and change four things: the status, the date, the link and title, and the one-line summary. Newest or most active goes first.

---

## Adding a new blog post

**Two files, plus one optional edit.**

**1. Create `blog/YYYY-MM-DD-short-slug.html`**

Copy an existing post. The date-first filename means the folder sorts itself chronologically, and the URL tells you when the post is from before you click it.

Fill in:

- `<title>` and `<meta name="description">` in the head
- the `<time datetime="YYYY-MM-DD">` and the read time in the `.meta` line
- the `<h1>` and the `<p class="lede">`
- the body
- the `.related` block at the bottom, linking to the project this belongs to (delete the block if there is no related project)

**Read time:** word count divided by 225, rounded up. Two minutes is the floor.

**2. Edit `blog/index.html`**

New `<li class="entry">` at the **top** of the list. Date, read time, link and title, one-line summary.

**3. If the post relates to a project**, open that project page and add the post to its `.related` list. The link has to work in both directions or the cross-linking is a lie.

---

## Two questions before publishing anything

1. What did I actually learn here that I did not know before starting? If the answer is nothing, the entry is a description and not a lesson.
2. What would I tell someone about to make the same attempt? That sentence is usually the best line in the piece.

---

## The file map

```
.
├── index.html                  About page, also the homepage
├── 404.html                    shown for any URL that does not exist
├── CNAME                       the custom domain, one line
├── .nojekyll                   tells GitHub Pages to skip its Jekyll build
├── README.md                   what this repo is
├── NOTES.md                    this file
├── css/
│   └── style.css               the entire design, one file
├── projects/
│   ├── index.html              the list
│   └── personal-site.html      one file per project
└── blog/
    ├── index.html              the list
    └── 2026-07-22-starting-over.html   one file per post
```

Colours, fonts and spacing all come from the custom properties at the top of `style.css`. Change a value there and it changes everywhere. Resist hardcoding a colour further down the file.
