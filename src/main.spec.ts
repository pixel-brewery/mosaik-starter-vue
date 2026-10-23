import { describe, expect, it, vi } from 'vitest';
import type { TextElement } from '@pixel-brewery/mosaik-elements-foundation';

// The entrypoint owns mounting, runtime setup and framework event wiring.
describe('application bootstrap', () => {
  it('updates the rendered counter when the Mosaik action is activated', async () => {
    document.body.innerHTML = '<div id="app"></div>';
    await import('./main');

    const counter = document.querySelector<TextElement>('[data-testid="counter"]');
    const increment = document.querySelector<HTMLElement>('[data-testid="increment"]');
    expect(counter).not.toBeNull();
    expect(increment).not.toBeNull();
    await vi.waitFor(() => expect(counter?.text).toBe('0 clicks'));

    increment?.click();
    increment?.click();

    await vi.waitFor(() => expect(counter?.text).toBe('2 clicks'));
  });
});
