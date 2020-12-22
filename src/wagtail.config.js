// @ts-check
import HomePage from './HomePage';
import BreadsIndexPage from './BreadsIndexPage';

export const wagtailConfig = {
  domain: 'http://localhost:8000',
  pageTypes: {
    'base.HomePage': HomePage,
    'breads.BreadsIndexPage': BreadsIndexPage,
  },
};
