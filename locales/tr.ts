export default {
  nuxtSiteConfig: {
    name: "Nuxt + Shadcn Başlangıç Şablonu",
    description: "Shadcn ile bir Nuxt başlangıç şablonu",
  },
  meta: {
    home: {
      title: "Ana Sayfa",
    },
  },
  errorPage: {
    button: "Ana sayfaya dön",
  },
  colorMode: {
    light: "Açık",
    dark: "Koyu",
    system: "Sistem",
  },
  linkGroups: [
    {
      title: "Navigasyon",
      links: ["Ana Sayfa", "Hata Sayfası"],
    },
  ],
  footer: {
    description: "Bu bir footer açıklamasıdır",
  },
};
