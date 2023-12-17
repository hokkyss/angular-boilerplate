import { Component } from '@angular/core';
import { fireEvent, render } from '@testing-library/angular';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  it('should highlight elements with given color', async () => {
    @Component({
      template: `
        <h2
          data-testid="highlight"
          angularBoilerplateHighlight
          highlightColor="red"
        >
          Something Red
        </h2>
      `,
      imports: [HighlightDirective],
      standalone: true,
    })
    class TestComponent {}

    const screen = await render(TestComponent, {});
    screen.detectChanges();

    const element = screen.getByTestId('highlight');

    fireEvent.mouseEnter(element);

    expect(element.style.backgroundColor).toBe('red');
  });

  it('should highlight elements with its default color, `yellow`', async () => {
    @Component({
      template: `
        <h2 data-testid="highlight" angularBoilerplateHighlight>
          Something Yellow
        </h2>
      `,
      imports: [HighlightDirective],
      standalone: true,
    })
    class TestComponent {}

    const screen = await render(TestComponent, {});
    screen.detectChanges();

    const element = screen.getByTestId('highlight');

    fireEvent.mouseEnter(element);

    expect(element.style.backgroundColor).toBe('yellow');
  });
});
