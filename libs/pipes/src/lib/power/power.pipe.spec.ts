import { render } from '@testing-library/angular';

import { TestComponent } from './test-component/test.component';

describe('PowerPipe', () => {
  it('should correctly square a number', async () => {
    const screen = await render(TestComponent);

    const element = screen.getByTestId('square').innerHTML;

    expect(element).toBe(String(4));
  });

  it('should power by one', async () => {
    const screen = await render(TestComponent);

    const element = screen.getByTestId('identity').innerHTML;

    expect(element).toBe(String(2));
  });
});
