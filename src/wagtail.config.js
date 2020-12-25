// @ts-check
import HomePage from './HomePage';
import BreadsIndexPage from './BreadsIndexPage';
import BreadPage from './BreadPage';

const domain =
  process.env.domain ?? 'https://jnaftali-wagtail-bakerydemo.herokuapp.com';

export const wagtailConfig = {
  domain,
  pageTypes: {
    'base.HomePage': HomePage,
    'breads.BreadsIndexPage': BreadsIndexPage,
    'breads.BreadPage': BreadPage,
  },
};
