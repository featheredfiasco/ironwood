# IronWood Property Repair — Website

This is the source for **ironwoodpropertyrepair.com**. It's a static site (HTML/CSS/JS) — no database, no build step, no platform fees. Just files you own and host wherever you want.

---

## File structure

```
ironwood/
├── index.html              ← Homepage
├── services.html           ← Services page
├── about.html              ← About page (incl. Ples Walker bio + STR section)
├── contact.html            ← Contact form page
├── 404.html                ← Page-not-found
├── sitemap.xml             ← For Google search indexing
├── robots.txt              ← For search engine crawlers
├── CNAME                   ← Tells GitHub Pages your custom domain
└── assets/
    ├── styles.css          ← All styling
    ├── script.js           ← Nav toggle + form handler
    └── images/
        ├── logo.png        ← Black logo, transparent bg
        ├── logo-white.png  ← White logo for dark backgrounds (not currently used; available)
        ├── favicon.png     ← Browser tab icon (32x32)
        ├── favicon-192.png ← Apple touch icon
        ├── logo-original.jpg
        ├── hero-workshop.svg     ← Hero illustration (replaceable with photo)
        ├── coastal-home.svg      ← Vacation rental illustration
        └── tools-bench.svg       ← Workshop tools illustration
```

---

## Deployment — Step-by-step

### Phase 1: Get the files into VS Code

1. Download/extract this `ironwood` folder somewhere easy to find (e.g., your Desktop or Documents folder).
2. Open **VS Code**.
3. **File → Open Folder…** → select the `ironwood` folder.
4. You should see all the files in the left sidebar.

### Phase 2: Set up Git (one-time, ~2 min)

If you haven't run these before:

1. Open VS Code's **Terminal** (Terminal → New Terminal, or `Ctrl + ~`)
2. Run these two commands, replacing with your real info (use the same email as your GitHub account):

   ```bash
   git config --global user.name "Ples Walker"
   git config --global user.email "your-email@example.com"
   ```

### Phase 3: Push to GitHub

1. In VS Code, click the **Source Control** icon in the left sidebar (looks like a branching tree, third icon down).
2. Click **"Initialize Repository"**. This turns the folder into a Git repo.
3. You'll see all your files listed as "Changes." Type a message in the box at the top: `Initial commit — site launch`
4. Click the **✓ Commit** button.
5. Now click **"Publish Branch"** (or "Publish to GitHub").
6. VS Code will ask whether to make it **public** or **private** → **choose Public** (required for free GitHub Pages).
7. Name the repo `ironwood-property-repair` (or any name you want — it'll be part of the temporary URL).
8. Click publish. VS Code uploads everything to your GitHub account.

### Phase 4: Turn on GitHub Pages

1. Open your browser and go to **github.com**.
2. Click your repo (e.g., `ironwood-property-repair`).
3. Click **Settings** (top-right of the repo page).
4. In the left sidebar, click **Pages**.
5. Under "Source," select **"Deploy from a branch."**
6. Under "Branch," select **`main`** and **`/ (root)`**. Click **Save**.
7. Wait ~1 minute. Refresh the page. You'll see a green box: **"Your site is live at https://yourusername.github.io/ironwood-property-repair/"**
8. Click that link to verify. You should see your site.

### Phase 5: Connect your custom domain (ironwoodpropertyrepair.com)

This makes the site live at your real domain instead of the github.io URL.

**On GitHub:**
1. Still on the **Settings → Pages** page.
2. Under "Custom domain," type: `ironwoodpropertyrepair.com`
3. Click **Save**.
4. Check the **"Enforce HTTPS"** box once it becomes available (may take an hour or so for the certificate to provision).

**At your domain registrar** (wherever you bought ironwoodpropertyrepair.com — GoDaddy, Namecheap, Squarespace Domains, Google Domains, etc.):

1. Log in and find the **DNS settings** for your domain.
2. Add these A records (4 of them, all pointing to `@` or root):

   ```
   Type: A    Host: @    Value: 185.199.108.153
   Type: A    Host: @    Value: 185.199.109.153
   Type: A    Host: @    Value: 185.199.110.153
   Type: A    Host: @    Value: 185.199.111.153
   ```

3. Add a CNAME record for the www version:

   ```
   Type: CNAME    Host: www    Value: yourusername.github.io
   ```
   (Replace `yourusername` with your GitHub username.)

4. **Save**. DNS changes can take up to 24 hours to fully propagate, but usually work within an hour.

5. Once propagated, visiting **ironwoodpropertyrepair.com** loads your site.

---

## Phase 6: Activate the contact form

The contact form is wired up but needs an external service to actually deliver submissions to your email. We're using **Formspree** (free, easy).

1. Go to **formspree.io** and sign up (free account).
2. Click **New Form**.
3. Set the email to: `ironwoodpropertyrepair@gmail.com`
4. Name the form: `IronWood Contact Form`
5. After creation, you'll see a form endpoint URL like: `https://formspree.io/f/xyzabcde`
6. Copy just the ID part — `xyzabcde`.
7. In VS Code, open `assets/script.js`.
8. Find this line:
   ```js
   const FORMSPREE_ID = 'YOUR_FORMSPREE_ID';
   ```
9. Replace `YOUR_FORMSPREE_ID` with your actual ID:
   ```js
   const FORMSPREE_ID = 'xyzabcde';
   ```
10. Save the file.
11. Commit and push the change (see "Updating the site" below).

The first submission you get from Formspree, you'll need to confirm your email in their notification. After that, every form submission goes straight to your Gmail inbox.

**Free tier limits:** 50 submissions per month. You'll get a notification if you ever hit the limit. If/when you do, $10/month upgrades to unlimited.

---

## Updating the site (the workflow you'll use forever)

Once everything's set up, here's how to make any change:

1. In VS Code, edit any file (e.g., change phone number in `index.html`).
2. Save the file (Cmd+S).
3. Open **Source Control** (left sidebar branching icon).
4. Type a commit message describing the change (e.g., "Update phone number").
5. Click the **✓** to commit.
6. Click **Sync Changes** (or the cloud arrow icon).
7. Site updates live in ~30 seconds.

---

## Common edits — where to find what

### Change the phone number
Phone number appears in 5 places. To update:
1. **Find & Replace** in VS Code: `Cmd+Shift+F`
2. Search: `210-884-0151`
3. Replace with your new number (keep the dashes)
4. Click "Replace All"
5. Also update the `tel:` links — search for `+12108840151` and replace with `+1` followed by your new number with no dashes.

### Change the email address
1. Find & Replace: `ironwoodpropertyrepair@gmail.com`
2. Replace with new email
3. Save and push.

### Update a service description
Open `services.html`, find the section, edit the text, save, push.

### Swap a placeholder image with a real photo
1. Drop your photo into `assets/images/` (use clean filenames like `ples-walker.jpg`, `truck.jpg`)
2. In the HTML file, find the `<img src="assets/images/coastal-home.svg" ...>` line you want to replace
3. Change to your photo: `<img src="assets/images/your-photo.jpg" ...>`
4. Update the `alt` attribute to describe what's in the photo
5. Save, push.

**Recommended photo specs:**
- Hero images: 1600×900px, JPG, under 400KB
- Section images: 1200×900px, JPG, under 250KB
- Compress before uploading: tinypng.com (free)

---

## SEO — what's already built in

- ✅ Title tags optimized for "handyman Fort Walton Beach," "rental maintenance Destin," etc.
- ✅ Meta descriptions on every page
- ✅ LocalBusiness schema markup (helps Google show your business in local results)
- ✅ Open Graph tags (so links shared on Facebook/iMessage look good)
- ✅ Sitemap.xml + robots.txt
- ✅ Mobile-responsive (Google penalizes non-responsive sites)
- ✅ Fast load times (no heavy framework, just HTML/CSS/JS)

**Next steps to maximize search visibility:**
1. Set up a **Google Business Profile** (free, separate from this site) — this is bigger for local search than the website itself
2. After launch, submit your sitemap to Google Search Console (`search.google.com/search-console`) — takes 5 minutes, helps Google index faster
3. Once you have real customer photos and reviews, add them to the site for fresh, unique content

---

## Future improvements (when you have time)

- Replace placeholder SVG illustrations with real photos
- Add a "Recent work" gallery once you have project photos
- Add testimonials section once clients leave reviews
- Add a blog section for SEO content (e.g., "5 things every Destin STR owner should check before peak season")
- Set up Google Analytics or Plausible (privacy-friendly alternative) to track visitors

---

## Questions?

The whole site is built with standard HTML, CSS, and JavaScript — no frameworks, no build steps. Any web developer or AI assistant can read and modify it. You're not locked into anything.

If something breaks: the site files are in Git, so you can always roll back to a previous version through GitHub's interface.
