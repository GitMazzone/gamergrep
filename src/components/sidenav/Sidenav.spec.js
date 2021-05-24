import React from 'react';
import renderer, { act } from 'react-test-renderer';
import Sidenav from './Sidenav';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Sidenav>Sidenav</Sidenav>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  act(() => {
    tree.props.onMouseEnter();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  act(() => {
    tree.props.onMouseLeave();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
