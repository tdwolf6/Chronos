import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, render, mount } from 'enzyme';
import GraphsContainer from '../../../app/containers/GraphsContainer';
import DashboardContainer from '../../../app/containers/DashboardContainer'
import { HealthContext } from '../../../app/context/HealthContext';
import { CommsContext } from '../../../app/context/CommsContext';
import { DockerContext } from '../../../app/context/DockerContext';
import { ApplicationContext } from '../../../app/context/ApplicationContext';



configure({ adapter: new Adapter() });

window.URL.createObjectURL = function() {};
describe('<GraphsContainer />', () => {
    
    let wrapper: any; 
    beforeAll(() => {
          
    
    wrapper = shallow(<DashboardContainer />);
    })
  
 expect.any(wrapper);
      
});
