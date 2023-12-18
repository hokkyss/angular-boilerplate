import { fireEvent, render } from '@testing-library/angular';
import { TestComponent } from './test-component/test.component';

describe('HighlightDirective', () => {
  it('should highlight elements with given color', async () => {
    const screen = await render(TestComponent, {});
    screen.detectChanges();
    const element = screen.getByTestId('something-red');

    fireEvent.mouseEnter(element);

    expect(element.style.backgroundColor).toBe('red');
  });

  it('should highlight elements with its default color, `yellow`', async () => {
    const screen = await render(TestComponent, {});
    screen.detectChanges();
    const element = screen.getByTestId('something-yellow');

    fireEvent.mouseEnter(element);

    expect(element.style.backgroundColor).toBe('yellow');
  });
});
