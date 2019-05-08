import React from 'react';
import { create } from 'react-test-renderer';
import PageLayout from './PageLayout';
describe('Button component', () => {
  test('it shows the expected text when rendered', () => {
    const component = create(<PageLayout>MY_CHILD_TEXT</PageLayout>);
    const rootInstance = component.root;
    expect(rootInstance.props.children).toBe('MY_CHILD_TEXT');
  });
});
