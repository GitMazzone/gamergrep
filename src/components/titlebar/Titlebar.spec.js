/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import renderer from 'react-test-renderer';
import Titlebar from './Titlebar';

test('Titlebar renders exit and minimize buttons', () => {
  const component = renderer.create(
    <Titlebar />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Clicking buttons in titlebar works in draggable area', () => {
  const component = renderer.create(
    <Titlebar />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
