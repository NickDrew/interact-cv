import React from 'react';
import { render, getByTestId } from 'react-testing-library';
import 'jest-dom/extend-expect'; // add some helpful assertions

import GridItem from '../index';

describe('<GridItem />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<GridItem />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to adopt passed grid-column style', () => {
    const id = 'test';
    const col = '1/5';
    const { container } = render(<GridItem data-testid={id} column={col} />);

    expect(getByTestId(container, id)).toHaveStyle(`grid-column: ${col}`);
  });

  it('Expect to adopt passed grid-row style', () => {
    const id = 'test';
    const row = '3';
    const { container } = render(<GridItem data-testid={id} row={row} />);

    expect(getByTestId(container, id)).toHaveStyle(`grid-row: ${row}`);
  });

  it('Expect to adopt passed grid-area style', () => {
    const id = 'test';
    const area = '2 / 1 / span 2 / span 3';
    const { container } = render(<GridItem data-testid={id} area={area} />);

    expect(getByTestId(container, id)).toHaveStyle(`grid-area: ${area}`);
  });

  it('Should render and match the snapshot', () => {
    const col = '1/5';
    const row = '3';
    const {
      container: { firstChild },
    } = render(<GridItem column={col} row={row} />);
    expect(firstChild).toMatchSnapshot();
  });
});
