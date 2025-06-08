export default defineAppConfig({
  title: 'AwA.gs',
  email: 'awa.gs@mingze.de',
  github: '#',
  twitter: '#',
  telegram: '#',
  mastodon: '#',
  blog: '#',
  description: 'A Simple / Speedy / Secure Link Shortener.',
  image: '',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
