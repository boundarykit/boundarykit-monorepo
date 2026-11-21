import redirects from './redirects.json'
export default {
  title: 'BoundaryKit', url: 'https://docs.boundarykit.com', baseUrl: '/',
  favicon: 'img/favicon.svg', onBrokenLinks: 'throw',
  presets: [['classic', { blog: false, docs: {
    routeBasePath: '/', sidebarPath: './sidebars.ts', lastVersion: 'current',
    versions: { current: { label: 'v2', path: '' }, '1.0': { label: 'v1', path: '1.0' } }
  }, theme: { customCss: './src/theme.css' } }]],
  plugins: [['@docusaurus/plugin-client-redirects', { redirects }]],
  themeConfig: {
    navbar: { title: 'BoundaryKit', logo: { alt: 'BoundaryKit', src: 'img/logo/logo-light.svg', srcDark: 'img/logo/logo-dark.svg' },
      items: [{ to: '/quickstart', label: 'Quickstart' }, { type: 'docsVersionDropdown', position: 'right' }] },
    footer: { links: [{ title: 'Resources', items: [{ label: 'Architecture', to: '/architecture' }, { label: 'Release notes', to: '/changelog' }] }] }
  }
}
