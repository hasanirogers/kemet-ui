import { html } from 'lit';
import type { Args, Meta, StoryObj } from '@storybook/web-components-vite';

import '../../elements/typewriter';

import '../../elements/tabs';
import '../../elements/tab';
import '../../elements/tab-panel';
import { ifDefined } from 'lit/directives/if-defined.js';


const meta: Meta = {
  title: 'Miscellaneous / Typewriter',
  component: 'kemet-typewriter',
  render: (args: Args) => Template(args),
  parameters: {
    layout: 'padded',
  },
  args: {
    content: `
      <h2>The content property fully supports HTML strings.</h2>
      <p><strong>Lorem ipsum</strong> dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <p>Incididunt ut labore et dolore magna aliqua ut enim ad. Minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure.</p>
      <p>Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in.</p>
      <img src="https://placehold.co/600x400" alt="Placeholder Image" />
      <p>Culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
      <p>Laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    `
  }
};
export default meta;

type Story = StoryObj;

const Template = (args: Args) => {
  return html`
    <kemet-typewriter
      content=${args.content}
      delay=${ifDefined(args.delay)}
      cursor=${ifDefined(args.cursor)}
      loop=${ifDefined(args.loop)}>
    </kemet-typewriter>
  `;
};

export const Standard: Story = {};

export const WithCursor: Story = {
  args: {
    cursor: '|'
  }
};

export const Slow: Story = {
  args: {
    delay: 40
  }
};

export const CompleteEvent: Story = {
  render: (args: Args) => {
    return html`
      <kemet-typewriter
        content=${args.content}
        delay=${ifDefined(args.delay)}
        cursor=${ifDefined(args.cursor)}
        loop=${ifDefined(args.loop)}
        @kemet-completed=${() => alert('The type writer has completed!')}>
      </kemet-typewriter>
    `;
  }
}
