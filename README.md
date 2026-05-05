# Drunken Hitmen - AEM Edge Delivery Services Site

Men's slowpitch softball team website, built on Adobe Experience Manager Edge Delivery Services with Document Authoring (DA).

**Est. 2001 | 25+ Years | Legacy Softball League**

## Environments

- Preview: `https://main--drunken-hitmen--<your-github-org>.aem.page/`
- Live: `https://main--drunken-hitmen--<your-github-org>.aem.live/`

## Setup Instructions

### 1. Create the GitHub Repository

1. Push this project to a new GitHub repository (public recommended):
   ```bash
   cd drunken-hitmen-aem
   git init
   git add .
   git commit -m "Initial commit: Drunken Hitmen AEM EDS site"
   git branch -M main
   git remote add origin https://github.com/<your-org>/drunken-hitmen.git
   git push -u origin main
   ```

### 2. Install the AEM Code Sync App

1. Visit: https://github.com/apps/aem-code-sync/installations/new
2. Select **Only select Repositories**
3. Choose your `drunken-hitmen` repository
4. Click **Save**

Your site is now live at: `https://main--drunken-hitmen--<your-org>.aem.page/`

### 3. Set Up Content in Document Authoring (DA)

1. Go to https://da.live
2. Sign in with your Adobe Identity
3. Navigate to your org/repo: `https://da.live/#/<your-org>/drunken-hitmen`
4. Create the following content pages (see "Content Structure" below)

### 4. Install AEM Sidekick (Chrome Extension)

1. Install from Chrome Web Store: [AEM Sidekick](https://chromewebstore.google.com/detail/aem-sidekick/ccfggkjabjahcjoljmgmklhpaccedipo)
2. Pin the extension
3. Navigate to your DA content, click the extension, and select **Add this project**

### 5. Local Development

```bash
npm install -g @adobe/aem-cli
npm install
aem up
```
Opens http://localhost:3000/

## Content Structure

Create these pages in DA (da.live). Each page is a document with sections and blocks.

### `index` (Home Page)

```
Hero block:
| Hero                                  |
| Drunken Hitmen                        |
| Men's Slowpitch Softball              |
| Est. 2001 • Celebrating 25+ Years     |

--- (section break)

## Latest
Spring 2025 Season

Cards block:
| Cards                                                    |
| **Division Championships**                               |
| Sunday, May 17th at 8:00 AM vs Walkoff Warriors         |
| **Playoffs R1: Swept Snipers**                           |
| Game 1: Hitmen 14, Snipers 4. Game 2: Hitmen 20, Snipers 7 |
| **25+ Years of Brotherhood**                             |
| From weekend warriors to a legacy spanning two decades   |
```

### `schedule` (Schedule & Results Page)

```
## Schedule & Results
Spring 2025 Season, Legacy Softball League

Schedule block:
| Schedule |
| (data is rendered automatically from the block JS) |
```

### `stats` (Player Stats Page)

```
## Player Stats
Spring 2026 Season

Stats block:
| Stats |
| (data is rendered automatically from the block JS) |
```

### `hall-of-fame` (Hall of Fame Page)

```
## Hall of Fame
Honoring our greatest players

HOF block:
| HOF                          |              |                                          |      |
| Bobby 'Legend' K.            | 2001-2018    | Founding member, career .720 AVG, 3x MVP | 2019 |
| Johnny V.                    | 2001-2015    | All-time HR leader (187)                 | 2016 |
| Tommy 'Ice' D.              | 2003-2019    | Gold glove SS, 5 championships           | 2020 |
| Sal M.                       | 2001-2016    | Founding member, team captain 10 seasons | 2017 |
| Richie G.                    | 2005-2020    | Career .680 AVG, 4x batting champion     | 2021 |
| Vinny 'Rocket' P.           | 2002-2017    | Pitcher with 200+ wins                   | 2018 |
```

### `about` (About Us Page)

Standard content with headings and paragraphs, no special blocks needed.

### `contact` (Contact Us Page)

```
## Contact Us
Get in touch with the team

Contact block:
| Contact |
| (form is rendered automatically) |
```

### `nav` (Navigation - auto-loaded by header block)

The header block generates navigation automatically from the configured links in `header.js`.

### `footer` (Footer - auto-loaded by footer block)

The footer block generates content automatically from `footer.js`.

## Blocks Reference

| Block       | Purpose                                  | Authored In             |
|-------------|------------------------------------------|--------------------------|
| `hero`      | Full-width hero with DH logo             | DA document table        |
| `schedule`  | Game schedule with scores and W/L        | Auto-rendered from JS    |
| `stats`     | Sortable batting + pitching tables       | Auto-rendered from JS    |
| `hof`       | Hall of Fame player cards                | DA document table        |
| `cards`     | Flexible card grid                       | DA document table        |
| `contact`   | Contact form with success state          | Auto-rendered from JS    |
| `columns`   | Multi-column layout                      | DA document table        |
| `header`    | Sticky nav with mobile hamburger         | Auto from header.js      |
| `footer`    | Site footer with logo                    | Auto from footer.js      |

## Project Structure

```
/
├── blocks/
│   ├── cards/          # Card grid block
│   ├── columns/        # Multi-column layout
│   ├── contact/        # Contact form
│   ├── footer/         # Site footer
│   ├── header/         # Site navigation
│   ├── hero/           # Hero banner
│   ├── hof/            # Hall of Fame
│   ├── schedule/       # Game schedule
│   └── stats/          # Player statistics
├── icons/              # SVG icons and logos
├── scripts/
│   ├── aem.js          # AEM EDS core library
│   ├── scripts.js      # Main entry point
│   └── delayed.js      # Delayed loading scripts
├── styles/
│   ├── styles.css      # Main styles
│   ├── lazy-styles.css # Non-critical styles
│   └── fonts.css       # Font declarations
├── tools/
│   └── sidekick/       # Sidekick configuration
├── 404.html            # Custom 404 page
├── head.html           # Additional head elements
├── fstab.yaml          # Content source mapping
└── package.json        # Dependencies
```

## Theme

- **Colors:** Navy (#0a1e3d), Light Blue (#5bc0eb), White
- **Fonts:** Teko (headings), Barlow (body)
- **Logo:** DH crosshair mark (SVG)

## Updating Stats

Player stats are currently hardcoded in `blocks/stats/stats.js`. To update after each game day, edit the `battingData` and `pitchingData` arrays with the latest numbers from Legacy Softball.

Alternatively, create a `stats-data.json` spreadsheet in DA and modify the stats block to fetch from it dynamically.

## License

Apache-2.0
