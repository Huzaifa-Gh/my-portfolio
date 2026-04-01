This is the folder structure of the whole application

.
├── README.md
├── app
│   ├── (root)
│   │   ├── contact
│   │   │   └── page.tsx
│   │   ├── experience
│   │   │   ├── [expId]
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── projects
│   │   │   ├── [projectId]
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── resume
│   │   │   └── page.tsx
│   │   └── skills
│   │       └── page.tsx
│   ├── api
│   │   └── github-stars
│   │       └── route.ts
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── manifest.ts
│   └── sitemap.ts
├── assets
│   └── fonts
│       ├── CalSans-SemiBold.ttf
│       ├── CalSans-SemiBold.woff
│       ├── CalSans-SemiBold.woff2
│       ├── Inter-Bold.ttf
│       └── Inter-Regular.ttf
├── components
│   ├── common
│   │   ├── animated-section.tsx
│   │   ├── animated-text.tsx
│   │   ├── client-page-wrapper.tsx
│   │   ├── github-star-badge.tsx
│   │   ├── icons.tsx
│   │   ├── main-nav.tsx
│   │   ├── mode-toggle.tsx
│   │   ├── page-container.tsx
│   │   └── site-footer.tsx
│   ├── contact
│   │   └── github-redirect-card.tsx
│   ├── experience
│   │   ├── experience-card.tsx
│   │   └── timeline.tsx
│   ├── modals
│   │   └── custom-modal.tsx
│   ├── projects
│   │   ├── exp-description.tsx
│   │   └── project-card.tsx
│   ├── skills
│   │   ├── rating.tsx
│   │   └── skills-card.tsx
│   └── ui
│       ├── accordion.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── chip-container.tsx
│       ├── chip.tsx
│       ├── custom-tooltip.tsx
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── form.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── modal.tsx
│       ├── tabs.tsx
│       ├── textarea.tsx
│       ├── toast.tsx
│       ├── toaster.tsx
│       ├── tooltip.tsx
│       └── use-toast.ts
├── components.json
├── config
│   ├── constants.ts
│   ├── experience.ts
│   ├── pages.ts
│   ├── projects.ts
│   ├── routes.ts
│   ├── site.ts
│   ├── skills.ts
│   └── socials.ts
├── hooks
│   ├── use-lock-body.ts
│   └── use-modal-store.ts
├── information
│   ├── overview.md
│   └── structure.md
├── lib
│   └── utils.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── providers
│   ├── animation-provider.tsx
│   └── modal-provider.tsx
├── public
│   ├── experience
│   │   ├── consolices_logo.png
│   │   └── patronecs_logo.png
│   ├── logo.png
│   ├── logo.svg
│   ├── profile-img.jpg
│   ├── projects
│   │   ├── first-signal
│   │   │   ├── dashboard.png
│   │   │   └── logo.png
│   │   ├── five-star-ai
│   │   │   ├── dashboard.png
│   │   │   └── logo.png
│   │   ├── inkfinity-creation
│   │   │   └── logo.png
│   │   └── layout-iq
│   │       └── logo.png
│   └── robots.txt
├── tailwind.config.js
└── tsconfig.json
