# Advocate Manisha Gandhi — Official Portfolio & Legal Portal

[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-blue?style=flat-square&logo=github)](https://adv-manisha.github.io)
[![Status](https://img.shields.io/badge/Status-Active%20Development-gold?style=flat-square)](#roadmap)
[![License](https://img.shields.io/badge/License-Proprietary%20%2F%20All%20Rights%20Reserved-navy?style=flat-square)](#legal-disclaimer)

Official personal and professional portal for **Advocate Manisha Gandhi** — Legal Researcher, Corporate Law Specialist, and **Co-Founder of Law Glimpse**.

---

## ⚖️ About Advocate Manisha Gandhi

Advocate Manisha Gandhi brings a rare, interdisciplinary perspective to commercial and securities jurisprudence. Combining classical humanities training with advanced legal qualifications, she specializes in capital market regulations, corporate governance, investor protection, and plain-language legal drafting.

- **Role & Designation:** Advocate & Legal Researcher
- **Bar Council Enrollment:** **Bar Council of Gujarat** (Enrollment No. **`G/1023/2024`**)
- **Leadership:** **Co-Founder**, *Law Glimpse*
- **Specialization:** Corporate & Business Law, SEBI Compliance, IPO Disclosure, Corporate Governance
- **Academic Credentials:**
  - **LLM — Business & Corporate Law**, Sabarmati University (2024–2025)
  - **LLB**, Gujarat University (2020–2023)
  - **MA — Hindi**, MLSU (2015–2017)
  - **MA — English Literature**, MLSU (2013–2015)
  - **BA**, MLSU (2010–2013)

---

## 🏛️ About Law Glimpse

As **Co-Founder of Law Glimpse**, Advocate Manisha Gandhi is dedicated to democratizing legal education and making legal concepts lucid, accessible, and structured for law aspirants, students, and practitioners. The platform bridges foundational legal doctrine with real-world regulatory insight.

---

## 🌐 Website Overview & Core Sections

The portal features a bespoke **Editorial Legal Aesthetic** with a full **Light and Dark Theme Switcher** (defaulting to the distinguished, archival **Light Theme**).

### Sections & Capabilities:
1. **Dynamic Navigation Header & Theme Switcher:**
   - Real-time scroll detection with glassmorphism backdrop.
   - Built-in **Light & Dark Theme Switcher** with persistent `localStorage` memory and automatic system compatibility.
   - Dynamic links to **Home**, **About**, **Practice Areas**, and **Contact** (with **Research**, **Publications**, and **Blog** ready to uncomment when desired).
   - Direct Call-To-Action (CTA): *"Legal Query"*.
   - Responsive mobile drawer menu.
2. **Hero Section:**
   - Identity, professional summary, credentials, and dual CTAs.
   - Profile visual presentation with fallbacks.
3. **About & Leadership:**
   - Interdisciplinary bio (Literature & Corporate Law).
   - Co-Foundership of **Law Glimpse**.
   - Academic milestones and primary practice focus areas.
4. **Professional Advocate Services (Upcoming / In Upgrade):**
   - Corporate governance & regulatory advisory.
   - SEBI compliance, ICDR & disclosure review.
   - Plain-language commercial contract drafting & vetting.
   - Corporate restructuring & legal risk assessment.
5. **Research Papers & Working Drafts:**
   - Deep dives into SEBI adjudicatory power, independent directors, and capital markets.
   - Tagged abstracts and research categorization.
6. **Publications & Conference Presentations:**
   - Peer-reviewed articles, upcoming journal manuscripts, and national conference proceedings.
7. **Legal Perspectives & Blog:**
   - Practical commentary on MCA notifications, SEBI circulars, and Rajbhasha compliance.
8. **Client Query & Consultation Hub:**
   - Direct intake form for legal queries, advisory requests, and academic collaboration.
   - Verified contact channels (Email, LinkedIn, Curriculum Vitae download).
9. **Dynamic Legal Slogans & Wisdom Banner:**
   - Curated constitutional maxims from Dr. B.R. Ambedkar, Nani Palkhivala, Justice Krishna Iyer, Justice H.R. Khanna, and Mahatma Gandhi.
   - Inspires law students and strengthens public faith in the rule of law.
   - Interactive "Inspire Another ↻" shuffle button and auto-rotation with hover pause.
   - Customizable via `LEGAL_SLOGANS` array or runtime `window.addLegalSlogan()`.
10. **Dual Theme Engine (Light & Dark):**
    - Strictly defaults to **Light Theme** for initial visits.
    - Theme toggle button seamlessly integrated at the end of the navbar, directly beside "Legal Query".
    - High-contrast, WCAG-compliant footer text in both themes.
11. **Law Glimpse Legal Study Hub & Dedicated Sub-Pages:**
    - **Centralized Data Registry (`study-data.js`)**: Single source of truth powering dynamic card rendering, subject/epoch tables, court filters, and live search across the entire study portal.
    - **Interactive Parent Portal (`study.html`)**:
      - 3-Pillar spotlight navigation cards pointing to dedicated study destinations.
      - Dynamic card views + full statutory tables with real-time court scope filter (*Supreme Court*, *Gujarat High Court*, *Bombay High Court*, *Delhi High Court*).
      - One-click **"Copy Citation"** with live visual clipboard feedback.
      - Deep-linking tab navigation (`#tabJudgments`, `#tabNotes`, `#tabTricks`).
    - **Dedicated Deep-Dive Sub-Pages**:
      - **🏛️ Landmark Judgments (`landmark-judgments.html`)**: Focus mode featuring card view (active by default with ratio callout boxes and takeaways), Subject Table, Year Table, Court scope switcher, and live keyword lookup across 23 landmark cases.
      - **📑 Subject Notes (`subject-notes.html`)**: Dedicated module directory covering Company Law, SEBI Regulations, New Criminal Laws (BNS/BNSS/BSA), Constitutional Law, and Commercial Contracts with immediate PDF brief downloads.
      - **🧠 Recall Tricks & Mnemonics (`recall-tricks.html`)**: High-retention cognitive formulas (*SAMROP*, *SOUP DISC*, *WIB*, *ANSR*, *Frustration 4-Step Test*) designed for judicial exams and university law students.
    - **100% BCI Rule 36 Compliant**: Academic empowerment and non-commercial educational resource.

---

## 📂 Project Structure

```text
adv-manisha.github.io/
├── index.html                  # Main portal: Hero, Dynamic Slogans, About, Law Glimpse, Practice Areas, Query Hub
├── study.html                  # Parent Study Hub: 3-Pillar Spotlight, Multi-Tab Portal & Deep Links
├── landmark-judgments.html     # Dedicated Landmark Judgments Sub-Page (Cards, Subject Table, Year Table)
├── subject-notes.html          # Dedicated Subject Notes Sub-Page (Company Law, SEBI, BNS/BNSS, Constitution)
├── recall-tricks.html          # Dedicated Memory Mnemonics & Exam Formulas Sub-Page (SAMROP, SOUP DISC, WIB)
├── study-data.js               # Centralized Legal Study Data Registry (Judgments, Notes, Tricks + Helper APIs)
├── research.html               # Dedicated Research Papers & Academic Drafts repository
├── publications.html           # Dedicated Journal & Conference Presentations repository
├── blog.html                   # Dedicated Legal Perspectives & Articles repository
├── style.css                   # Design tokens, theme variables, study hub cards, court badges, responsive grid
├── script.js                   # Theme toggle, dynamic slogans, study hub engine, copy citation, BCI modal
├── README.md                   # Documentation & project architecture (this file)
├── materials/                  # Downloadable academic study PDFs (33 structured briefs)
│   ├── landmark-judgments/     # 23 Case briefs (Supreme Court & State HCs: Gujarat, Bombay, Delhi)
│   ├── subject-notes/          # 5 Comprehensive statutory notes (Company Law, SEBI, BNS/BNSS, etc.)
│   └── recall-tricks/          # 5 Visual memory aid formula sheets (SAMROP, SOUP DISC, WIB tree, etc.)
├── law-glimpse-logo.png        # Official Law Glimpse brand logo
├── logo.png                    # Official brand monogram / logo
├── profile.png                 # Advocate portrait image
├── favicon-16.png              # 16x16 Favicon
├── favicon-32.png              # 32x32 Favicon
└── favicon-180.png             # Apple Touch Icon
```

---

### 💡 How to Add New Judgments, Subject Notes, or Recall Tricks

The entire study suite is data-driven via `study-data.js`. You do **not** need to write or maintain complex HTML tables or card markup.

#### Option A: Edit `study-data.js` Directly

Simply append your new record to the corresponding array in `study-data.js`:

```javascript
// 1. Adding a new Landmark Judgment:
STUDY_DATA.judgments.push({
  id: "case-unique-id",
  title: "Case Title v. Respondent Name",
  citation: "(2025) 1 SCC 100",
  court: "Supreme Court",            // "Supreme Court" | "High Court of Gujarat" | "High Court of Bombay" | "High Court of Delhi"
  stateCourt: "State High Court",    // "Supreme Court" | "State High Court"
  courtBadgeClass: "badge-sc",       // "badge-sc" | "badge-hc-gujarat" | "badge-hc-bombay" | "badge-hc-delhi"
  year: 2025,
  epoch: "2024–2023",                // "2024–2023" | "2022–2020" | "2019–2015" | "2014–2010" | "Foundational Precedents"
  subject: "Constitutional Law",     // Matches filter pills: Constitutional, Corporate, Criminal, Contracts, ADR
  bench: "5-Judge Constitution Bench",
  ratioDecidendi: "Core legal holding and principle established by the court.",
  takeaways: [
    "Key takeaway point 1",
    "Key takeaway point 2"
  ],
  pdfFile: "materials/landmark-judgments/case-brief-file.pdf"
});

// 2. Adding a new Subject Note:
STUDY_DATA.notes.push({
  id: "note-unique-id",
  subject: "Corporate & SEBI Law",
  title: "Title of Subject Note",
  description: "Concise summary of the statutory framework and critical sections covered.",
  coverage: ["Section 135", "Schedule VII", "CSR Rules 2024"],
  pdfFile: "materials/subject-notes/your-note-file.pdf"
});

// 3. Adding a new Recall Trick / Mnemonic:
STUDY_DATA.tricks.push({
  id: "trick-unique-id",
  subject: "Constitutional Law",
  title: "Mnemonic Title",
  formula: "ACRONYM",
  fullForm: "Letter A = Meaning 1 | Letter B = Meaning 2",
  explanation: "Explanation of how to apply this trick in judicial examinations.",
  pdfFile: "materials/recall-tricks/your-trick-file.pdf"
});
```

#### Option B: Dynamic Injection via Browser Console or Scripts

You can also inject entries at runtime or through custom scripts:

```javascript
window.addLandmarkJudgment({
  title: "X v. State of Gujarat",
  citation: "2024 SCC OnLine Guj 120",
  court: "High Court of Gujarat",
  courtBadgeClass: "badge-hc-gujarat",
  year: 2024,
  epoch: "2024–2023",
  subject: "Criminal Law & BNSS",
  bench: "Division Bench",
  ratioDecidendi: "Bail guidelines under BNSS Section 480.",
  takeaways: ["Takeaway 1", "Takeaway 2"],
  pdfFile: "materials/landmark-judgments/guj-hc-bail-guidelines.pdf"
});
```

> **PDF File Rule**: Whenever you add a new entry, drop the corresponding PDF into the respective `materials/` subfolder (`materials/landmark-judgments/`, `materials/subject-notes/`, or `materials/recall-tricks/`). The website will automatically render the card, the table rows, the red/gold PDF badge, and download action.

---

### 💡 Adding Dynamic Legal Slogans

To add new inspiring slogans for students and citizens, simply append to the `LEGAL_SLOGANS` array in `script.js` or call `window.addLegalSlogan()`:

```javascript
window.addLegalSlogan({
  quote: "The arc of the moral universe is long, but it bends toward justice.",
  author: "Martin Luther King Jr.",
  designation: "Civil Rights Leader",
  theme: "Faith in Universal Justice"
});
```

---

## 🚀 Local Development & Preview

The site is built with pure, framework-free web standards (HTML5, CSS3, ES6 JavaScript) for zero-dependency speed, pristine SEO, and immediate GitHub Pages deployment.

### Running Locally:
You can run any local static HTTP server:

```bash
# Using Python 3:
python3 -m http.server 8000

# Or using Node npx:
npx serve .
```

Then visit `http://localhost:8000` in your web browser.

---

## 📅 Roadmap & Upgrade Plan (Sprints)

| Sprint | Phase | Scope & Deliverables |
| :--- | :--- | :--- |
| **Sprint 1** | **Brand & Architecture Foundation** | Update metadata, establish Advocate & Law Glimpse co-founder positioning, fix contact placeholders, implement BCI disclaimer. |
| **Sprint 2** | **Dynamic Header & Navigation** | Sticky dynamic navbar with dropdowns for Services and Resources, mobile-first overlay, and instant Consultation CTA. |
| **Sprint 3** | **Advocate Services & Query Portal** | Add dedicated Practice Areas / Legal Services section + interactive Consultation/Query intake form with validation. |
| **Sprint 4** | **Scholarly Hub Activation** | Uncomment, format, and activate Research, Publications, and Blog sections with category filtering and abstract modals. |
| **Sprint 5** | **Performance, SEO & Launch Polish** | Optimize image assets (profile compression), inject JSON-LD LegalService schema, Open Graph tags, and test responsiveness. |

---

## ⚖️ Legal Disclaimer & Regulatory Compliance

This website is maintained for informational and academic purposes only, in accordance with **Rule 36 of the Bar Council of India Rules**. 

The Bar Council of India does not permit advertisement or solicitation by advocates in any form. By accessing this website, the user acknowledges that they are seeking information regarding Advocate Manisha Gandhi of their own accord and that there has been no advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever.

---

## 📬 Contact & Inquiries

- **Advocate:** Manisha Gandhi
- **Role:** Advocate & Co-Founder, Law Glimpse
- **LinkedIn:** [linkedin.com/in/manisha-p-gandhi](https://www.linkedin.com/in/manisha-p-gandhi)
- **Website:** [adv-manisha.github.io](https://adv-manisha.github.io)
