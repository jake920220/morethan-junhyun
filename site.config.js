const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Lino Kim",
    // image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    image: "/profile.jpeg",
    role: "frontend developer",
    bio: "I develop everything with web!",
    email: "linokim220@gmail.com",
    linkedin: "linokim",
    github: "jake920220",
    instagram: "",
  },
  projects: [
    {
      name: `morethan-junhyun`,
      href: "https://github.com/jake920220/morethan-junhyun",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Lino Kim 기술블로그",
    description: "프론트엔드 개발자 Lino의 기술 블로그입니다.",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://linokim.dev",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion", "Frontend", "Lino", "Development", "프론트엔드", "웹 개발"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }
