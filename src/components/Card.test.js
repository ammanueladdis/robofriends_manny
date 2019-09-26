import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Card from './Card';
import { exportAllDeclaration } from '@babel/types';

console.log(shallow(<Card />))

it('expect to render Card component', () => {
  expect(shallow(<Card />).length).toEqual(1)
})