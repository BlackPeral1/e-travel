import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../src/screens/Home/index';


jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(() => Promise.resolve()),
  getItem: jest.fn(() => Promise.resolve()),
}));

describe('<Home />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree.children.length).toBe(4);
  });
});