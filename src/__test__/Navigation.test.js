import React from 'react';
import { render } from '@testing-library/react';
import Navigation from '../components/Navigation';
import { BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';


describe('Render header component correctly', () => {
    it('Should render the header correctly', () => {
        const { container } = render(
            <Router>
                <Navigation />
            </Router>,
        );
        expect(container).toMatchSnapshot();
    });

    it('should have an active link', () => {
        const {getByText} = render(
            <Router>
                <Navigation />
            </Router>,
        );

        const rocketsLink = getByText('Rockets');
        expect(rocketsLink).toBeInTheDocument();
    });
});
