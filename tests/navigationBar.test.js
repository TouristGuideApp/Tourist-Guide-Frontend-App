import NavigationBar from '../components/navigationBar';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Navigation Bar', ()=>{
    test('renders tourguide', ()=> {
        render(<NavigationBar />);
    
        const outputElement = screen.getByText('tourguide', {exact: false});
        expect(outputElement).toBeInTheDocument();
    })
})

