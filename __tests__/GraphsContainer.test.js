import 'jsdom-global/register';
import { JSDOM } from 'jsdom';
import React from 'react';
import { configure, shallow, render } from 'enzyme';
import chai from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import { expect } from 'chai';
import GraphsContainer from '../app/containers/GraphsContainer.tsx';

configure({ adapter: new Adapter() });

// describe('GraphsContainer renders components', () => {
//   it(' renders component', () => {
//     const wrapper = shallow(GraphsContainer);

//     expect(wrapper).to.contain('something');
//   });
//   chai.use(chaiEnzyme());
// });

describe('GraphsContainer renders components', () => {});
