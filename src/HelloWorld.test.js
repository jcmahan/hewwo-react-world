import React from 'react';
import { shallow } from enzyme; 
import renderer from 'react-test-renderer';

import HelloWorld from './HelloWorld';

const name = 'Person';
const mockRemoveGreeting = jest.fn();
const component = shallow(
    <HelloWorld name={name} removeGreeting={mockRemoveGreeting} />
);

describe(HelloWorld, () => {
    //Add the rest of our tests here later; 
})

it('renders and matches our snapshot', () => {
    const component = renderer.create(
        <HelloWorld name={Person} />
    );
})