# Dayina Sandeep - Custom Portfolio Website

A beautifully crafted, responsive, single-page portfolio website showcasing academic work, professional experience, certifications, publications, and skills. Built with HTML, Tailwind CSS, customized floating gradients, interactive 3D perspective layers, and smooth scroll animations.

---

## 🚀 Deployment to GitHub Pages

We have pre-configured everything to make deploying your portfolio to **GitHub Pages** as simple as possible. We already set the `base: './'` in `vite.config.ts`, which ensures all pathways and assets load perfectly on your custom GitHub Pages URL.

Choose **one** of the two deployment methods below:

### Method 1: Automatic Deployment using GitHub Actions (Highly Recommended)

We have created an automated deployment workflow for you. Every time you push changes to your `main` branch, GitHub will automatically build and publish your website!

#### Step-by-Step Setup:
1. **Push your code to GitHub**: Create a repository on GitHub (if you haven't already), and push this codebase to your `main` branch.
2. **Enable Actions Permissions**:
   - Go to your GitHub repository in your web browser.
   - Click on the **Settings** tab.
   - In the left sidebar, click on **Actions** -> **General**.
   - Scroll down to the **Workflow permissions** section.
   - Select **Read and write permissions**, then click **Save**.
3. **Configure GitHub Pages Source**:
   - Go to your repository **Settings**.
   - In the left sidebar, click on **Pages**.
   - Under **Build and deployment** -> **Source**, select **GitHub Actions** from the dropdown menu (instead of "Deploy from a branch").
4. **Deploy!**
   - Go to the **Actions** tab of your repository.
   - Select the **Deploy static content to Pages** workflow and click **Run workflow**, or simply make any new push/commit to your `main` branch!
   - Once the action completes (usually under 1 minute), your site will be live at: `https://<your-username>.github.io/<your-repo-name>/`

---

### Method 2: Manual Deployment (Using a deployment command)

If you prefer building and deploying manually without automated actions:

1. Install the `gh-pages` package in your local repository terminal:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Open your `package.json` file and add these two scripts inside the `"scripts"` section:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Deploy your website by running the following command in your terminal:
   ```bash
   npm run deploy
   ```
4. Under your repository **Settings** -> **Pages**, make sure the source is set to **Deploy from a branch** and select the **gh-pages** branch!

---

## 🛠️ Features Implemented

- **Unified Single-File Design**: Built directly in a high-performance, responsive `/index.html` structure loaded with Tailwind CSS and Lucide icons via CDN to optimize latency.
- **Micro-Animations**: Custom hover transformations (`scale`, `shadow`) on all cards, projects, and contact icons creating visual feedback.
- **3D Card Transitions**: Implemented smooth responsive CSS `perspective-1000` rotational elements on projects and publication cards.
- **Active Navigation Tracking**: JavaScript-powered dynamic highlight state highlighting which section is currently scrolled into view.
- **Scroll Reveal**: Elements smoothly slide and fade into view using an optimized modern `IntersectionObserver` interface.
