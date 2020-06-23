/* eslint-disable no-unused-vars */
import { h } from 'preact';
import render from 'preact-render-to-string';
import htmlLooksLike from 'html-looks-like';
import PageLayout from './PageLayout';

describe('Button component', () => {
  test('it shows the expected text when rendered', () => {
    const PageLayoutComponent = render(<PageLayout>MY_CHILD_TEXT</PageLayout>);

    htmlLooksLike(PageLayoutComponent, `<div>MY_CHILD_TEXT</div>`);
  });
});
