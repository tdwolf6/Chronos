import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import GraphsContainer from '../app/containers/GraphsContainer';

describe('GraphsContainer', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<GraphsContainer />);
  });

  it('renders multiple graph components', () => {
    expect();
  });
});
