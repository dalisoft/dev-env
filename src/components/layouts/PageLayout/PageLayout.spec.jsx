import React from 'react';
import { create } from 'react-test-renderer';
import PageLayout from './PageLayout';

describe('Button component', () => {
  it('render correctly Spinner component', () => {
    const PageLayoutComponent = create(<PageLayout>MY_CHILD_TEXT</PageLayout>);
    expect(PageLayoutComponent).toMatchSnapshot();
  });

  test('it shows the expected text when rendered', () => {
    const PageLayoutComponent = create(<PageLayout>MY_CHILD_TEXT</PageLayout>);
    const PageLayoutComponentInstance = PageLayoutComponent.root;
    expect(PageLayoutComponentInstance.props.children).toBe('MY_CHILD_TEXT');
  });
});
