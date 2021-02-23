import React from 'react';
import { render, fireEvent, waitFor, configure } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

configure({
    getElementError: (message, container) => {
        const error = new Error(message);
        error.name = 'TestingLibraryElementError';
        error.stack = null;
        const errorObject = console.error;
        console.error = jest.fn();
        return error;
      },
})

describe("Orbit app", () => {
    describe("when clicking on Add button", () => {
        it("should display AddingForm", () => {
            const {getByText, getByTitle, queryByTitle} = render(<App/>);

            fireEvent.click(getByTitle('Add'),  {button: 1});

            expect(getByText('Register')).toBeInTheDocument();
            expect(queryByTitle('Add')).not.toBeInTheDocument();
        })
    })

    describe("when clicking on Close button", () => {
        it("should close AddingForm", () => {
            const { getByTitle, queryByTitle } = render(<App/>);

            fireEvent.click(getByTitle('Add'),  {button: 1});
            fireEvent.click(getByTitle('Close'),  {button: 1});

            expect(getByTitle('Add')).toBeInTheDocument();
            expect(queryByTitle('Close')).not.toBeInTheDocument();
        })
    })

    describe("when adding new astronaut", () => {
        it("should display that new astronaut in the table", () => {
            const {getByText, getByTitle, getByTestId} = render(<App/>);

            fireEvent.click(getByTitle('Add'),  {button: 1});
            fireEvent.change(getByTestId('fname-input'), {target: {value: 'Foo'}});
            fireEvent.change(getByTestId('lname-input'), {target: {value: 'Bar'}});
            fireEvent.change(getByTestId('birth-input'), {target: {value: '1993-01-15'}});
            fireEvent.change(getByTestId('superpower-input'), {target: {value: 'Test'}});
            fireEvent.click(getByText('Register'),  {button: 1});

            waitFor(() => expect(getByText('Foo')).toBeInTheDocument());
            waitFor(() => expect(getByText('Bar')).toBeInTheDocument());
            waitFor(() => expect(getByText('1993-01-15')).toBeInTheDocument());
            waitFor(() => expect(getByText('Test')).toBeInTheDocument());
        })
    })

    describe("when deleting astronaut", () => {
        it("should delete that astronaut from the table", () => {
            const {getByText, getByTitle, getByTestId} = render(<App/>);

            fireEvent.click(getByTitle('Add'),  {button: 1});
            fireEvent.change(getByTestId('fname-input'), {target: {value: 'Foo'}});
            fireEvent.change(getByTestId('lname-input'), {target: {value: 'Bar'}});
            fireEvent.change(getByTestId('birth-input'), {target: {value: '1993-01-15'}});
            fireEvent.change(getByTestId('superpower-input'), {target: {value: 'Test'}});
            fireEvent.click(getByText('Register'),  {button: 1});

            waitFor(() => expect(getByText('Foo')).toBeInTheDocument());
            waitFor(() => expect(getByText('Bar')).toBeInTheDocument());
            waitFor(() => expect(getByText('1993-01-15')).toBeInTheDocument());
            waitFor(() => expect(getByText('Test')).toBeInTheDocument());

            waitFor(() => fireEvent.click(getByTitle('Delete'),  {button: 1}));

            waitFor(() => expect(queryByText('Foo')).not.toBeInTheDocument());
        })
    })
});