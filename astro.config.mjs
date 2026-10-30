import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({site:'https://wifi.guidehollow.com',output:'static',trailingSlash:'always',integrations:[sitemap()]});
