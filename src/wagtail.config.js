// @ts-check
import HomePage from './HomePage';
import BreadsIndexPage from './BreadsIndexPage';
import BreadPage from './BreadPage';

export const wagtailConfig = {
  domain: 'http://localhost:8000',
  pageTypes: {
    'base.HomePage': HomePage,
    'breads.BreadsIndexPage': BreadsIndexPage,
    'breads.BreadPage': BreadPage,
  },
};
