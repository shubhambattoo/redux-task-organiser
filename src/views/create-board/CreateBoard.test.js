import React from 'react';
import ReactDOM from 'react-dom';
import { CreateBoard } from './CreateBoard';
import {
  render,
  fireEvent,
  cleanup,
  getByTestId,
} from '@testing-library/react';
import { AuthContext } from '../../context/Auth';

const currentUser = {
  displayName: 'Shubham Battoo',
  email: 'shubham@gmail.com',
};

let container;
afterEach(cleanup);
beforeEach(() => {
  container = render(
    <AuthContext.Provider value={currentUser}>
      <CreateBoard />
    </AuthContext.Provider>
  ).container;
});

it('should change the value of input name', () => {
  const input = getByTestId(container, 'name');
  const newName = 'Agile Board';
  fireEvent.change(input, { target: { value: newName } });
  expect(input.value).toBe(newName);
});

it('should change the value of input teamMember', () => {
  const input = getByTestId(container, 'team');
  const team = 'Shubham, Nikhil, Rohit';
  fireEvent.change(input, { target: { value: team } });
  expect(input.value).toBe(team);
});

it('should change the value of input type', () => {
  const input = getByTestId(container, 'type');
  const type = 'Design UX';
  fireEvent.change(input, { target: { value: type } });
  expect(input.value).toBe(type);
});
