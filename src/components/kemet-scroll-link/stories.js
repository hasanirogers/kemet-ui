import { html } from 'lit';

import './kemet-scroll-link.js';

const Template = () => html`
  <style>
    body {
      --nav-height: 72px;
      line-height: 1.5;
    }

    nav {
      position: fixed;
      top: 0;
      display: flex;
      gap: 2rem;
      align-items: center;
      width: 100%;
      height: var(--nav-height);
      border-bottom: 1px solid gray;
      background-color: #ffffff;
    }

    article {
      margin-top: var(--nav-height);
    }

    kemet-scroll-link {
      color: blue;
    }

    .docs-story nav {
      display: none;
    }
  </style>
  <nav>
    <kemet-scroll-link data-target="heading-1" @click="${event => handleLink(event)}">
      Heading 1
    </kemet-scroll-link>
    <kemet-scroll-link data-target="heading-2" @click="${event => handleLink(event)}">
      Heading 2
    </kemet-scroll-link>
    <kemet-scroll-link data-target="heading-3" @click="${event => handleLink(event)}">
      Heading 3
    </kemet-scroll-link>
    <kemet-scroll-link data-target="heading-4" @click="${event => handleLink(event)}">
      Heading 4
    </kemet-scroll-link>
  </nav>

  <article>
    <h2 id="heading-1">Heading 1</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare porta nulla. Nulla ipsum felis, aliquet nec nisl sit amet, suscipit facilisis massa. Suspendisse consectetur lorem id odio fringilla pretium. Curabitur finibus nulla augue. Fusce vitae ornare lorem. Vivamus quis lacus ullamcorper, vehicula felis pretium, iaculis leo. Duis eget condimentum enim. Praesent vel est ut nisl pulvinar suscipit sit amet in sapien. Donec euismod odio ornare nisi luctus dignissim. Pellentesque vehicula, elit vitae maximus dapibus, erat nunc ultrices leo, nec pretium felis odio ut ex. Phasellus sapien felis, lobortis eu aliquam quis, semper quis neque. Aliquam vestibulum arcu ut nisl lacinia, in placerat dolor congue. Vivamus varius tincidunt odio, at pellentesque eros cursus nec. Donec viverra nec tellus vitae placerat. Cras id gravida mauris. Quisque sit amet imperdiet nisi.</p>
    <p>Sed eros ligula, blandit et iaculis et, faucibus in libero. Nunc augue dui, laoreet at porta ut, ultrices ac est. Duis at viverra metus. Phasellus pulvinar ligula sed aliquet pretium. Vestibulum erat risus, elementum ac imperdiet sed, semper eu sapien. Proin lobortis mauris ut ante tempor mattis. Donec dapibus interdum risus, eget malesuada arcu. Nulla facilisi. Maecenas aliquet ullamcorper tortor quis dapibus. Nunc facilisis augue vitae dictum semper. Etiam vehicula nec tortor non lobortis. Morbi hendrerit in nibh nec maximus. Nam convallis erat metus. In fermentum efficitur condimentum.</p>
    <p>Vestibulum accumsan vulputate consectetur. Quisque ut malesuada arcu. Mauris ligula odio, commodo nec eros ultricies, semper varius dui. Donec facilisis a odio nec imperdiet. Pellentesque molestie leo in mi maximus feugiat. Sed quis arcu a velit laoreet viverra. Etiam suscipit lacus lacus, a pretium justo tincidunt in. Fusce eget mi turpis.</p>
    <p>Ut molestie augue in eros eleifend hendrerit. Donec et laoreet lorem, sed porta arcu. Duis pharetra rhoncus ipsum eu pellentesque. Praesent bibendum bibendum risus maximus convallis. Curabitur nec libero eu velit cursus aliquam. Integer dapibus in eros pretium dignissim. Sed tortor justo, semper in pellentesque in, aliquet pellentesque sapien. Aliquam sem quam, pellentesque a erat ac, aliquet sagittis turpis. Suspendisse dignissim ante ante. Proin ac urna porta, auctor odio convallis, mollis orci. Donec scelerisque mauris non varius dapibus. Proin sollicitudin placerat consectetur.</p>
    <p>Etiam egestas vulputate sem a dictum. Curabitur mattis ex ut turpis vehicula, nec auctor eros facilisis. Duis nisl augue, varius feugiat sem et, iaculis gravida enim. Nam luctus purus et dapibus mattis. Curabitur hendrerit risus non velit aliquet hendrerit. Nullam faucibus, sapien vitae egestas congue, metus lacus rhoncus leo, non malesuada justo ipsum eu felis. Aenean venenatis metus non tincidunt sollicitudin.</p>

    <h2 id="heading-2">Heading 2</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare porta nulla. Nulla ipsum felis, aliquet nec nisl sit amet, suscipit facilisis massa. Suspendisse consectetur lorem id odio fringilla pretium. Curabitur finibus nulla augue. Fusce vitae ornare lorem. Vivamus quis lacus ullamcorper, vehicula felis pretium, iaculis leo. Duis eget condimentum enim. Praesent vel est ut nisl pulvinar suscipit sit amet in sapien. Donec euismod odio ornare nisi luctus dignissim. Pellentesque vehicula, elit vitae maximus dapibus, erat nunc ultrices leo, nec pretium felis odio ut ex. Phasellus sapien felis, lobortis eu aliquam quis, semper quis neque. Aliquam vestibulum arcu ut nisl lacinia, in placerat dolor congue. Vivamus varius tincidunt odio, at pellentesque eros cursus nec. Donec viverra nec tellus vitae placerat. Cras id gravida mauris. Quisque sit amet imperdiet nisi.</p>
    <p>Sed eros ligula, blandit et iaculis et, faucibus in libero. Nunc augue dui, laoreet at porta ut, ultrices ac est. Duis at viverra metus. Phasellus pulvinar ligula sed aliquet pretium. Vestibulum erat risus, elementum ac imperdiet sed, semper eu sapien. Proin lobortis mauris ut ante tempor mattis. Donec dapibus interdum risus, eget malesuada arcu. Nulla facilisi. Maecenas aliquet ullamcorper tortor quis dapibus. Nunc facilisis augue vitae dictum semper. Etiam vehicula nec tortor non lobortis. Morbi hendrerit in nibh nec maximus. Nam convallis erat metus. In fermentum efficitur condimentum.</p>
    <p>Vestibulum accumsan vulputate consectetur. Quisque ut malesuada arcu. Mauris ligula odio, commodo nec eros ultricies, semper varius dui. Donec facilisis a odio nec imperdiet. Pellentesque molestie leo in mi maximus feugiat. Sed quis arcu a velit laoreet viverra. Etiam suscipit lacus lacus, a pretium justo tincidunt in. Fusce eget mi turpis.</p>
    <p>Ut molestie augue in eros eleifend hendrerit. Donec et laoreet lorem, sed porta arcu. Duis pharetra rhoncus ipsum eu pellentesque. Praesent bibendum bibendum risus maximus convallis. Curabitur nec libero eu velit cursus aliquam. Integer dapibus in eros pretium dignissim. Sed tortor justo, semper in pellentesque in, aliquet pellentesque sapien. Aliquam sem quam, pellentesque a erat ac, aliquet sagittis turpis. Suspendisse dignissim ante ante. Proin ac urna porta, auctor odio convallis, mollis orci. Donec scelerisque mauris non varius dapibus. Proin sollicitudin placerat consectetur.</p>
    <p>Etiam egestas vulputate sem a dictum. Curabitur mattis ex ut turpis vehicula, nec auctor eros facilisis. Duis nisl augue, varius feugiat sem et, iaculis gravida enim. Nam luctus purus et dapibus mattis. Curabitur hendrerit risus non velit aliquet hendrerit. Nullam faucibus, sapien vitae egestas congue, metus lacus rhoncus leo, non malesuada justo ipsum eu felis. Aenean venenatis metus non tincidunt sollicitudin.</p>

    <h2 id="heading-3">Heading 3</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare porta nulla. Nulla ipsum felis, aliquet nec nisl sit amet, suscipit facilisis massa. Suspendisse consectetur lorem id odio fringilla pretium. Curabitur finibus nulla augue. Fusce vitae ornare lorem. Vivamus quis lacus ullamcorper, vehicula felis pretium, iaculis leo. Duis eget condimentum enim. Praesent vel est ut nisl pulvinar suscipit sit amet in sapien. Donec euismod odio ornare nisi luctus dignissim. Pellentesque vehicula, elit vitae maximus dapibus, erat nunc ultrices leo, nec pretium felis odio ut ex. Phasellus sapien felis, lobortis eu aliquam quis, semper quis neque. Aliquam vestibulum arcu ut nisl lacinia, in placerat dolor congue. Vivamus varius tincidunt odio, at pellentesque eros cursus nec. Donec viverra nec tellus vitae placerat. Cras id gravida mauris. Quisque sit amet imperdiet nisi.</p>
    <p>Sed eros ligula, blandit et iaculis et, faucibus in libero. Nunc augue dui, laoreet at porta ut, ultrices ac est. Duis at viverra metus. Phasellus pulvinar ligula sed aliquet pretium. Vestibulum erat risus, elementum ac imperdiet sed, semper eu sapien. Proin lobortis mauris ut ante tempor mattis. Donec dapibus interdum risus, eget malesuada arcu. Nulla facilisi. Maecenas aliquet ullamcorper tortor quis dapibus. Nunc facilisis augue vitae dictum semper. Etiam vehicula nec tortor non lobortis. Morbi hendrerit in nibh nec maximus. Nam convallis erat metus. In fermentum efficitur condimentum.</p>
    <p>Vestibulum accumsan vulputate consectetur. Quisque ut malesuada arcu. Mauris ligula odio, commodo nec eros ultricies, semper varius dui. Donec facilisis a odio nec imperdiet. Pellentesque molestie leo in mi maximus feugiat. Sed quis arcu a velit laoreet viverra. Etiam suscipit lacus lacus, a pretium justo tincidunt in. Fusce eget mi turpis.</p>
    <p>Ut molestie augue in eros eleifend hendrerit. Donec et laoreet lorem, sed porta arcu. Duis pharetra rhoncus ipsum eu pellentesque. Praesent bibendum bibendum risus maximus convallis. Curabitur nec libero eu velit cursus aliquam. Integer dapibus in eros pretium dignissim. Sed tortor justo, semper in pellentesque in, aliquet pellentesque sapien. Aliquam sem quam, pellentesque a erat ac, aliquet sagittis turpis. Suspendisse dignissim ante ante. Proin ac urna porta, auctor odio convallis, mollis orci. Donec scelerisque mauris non varius dapibus. Proin sollicitudin placerat consectetur.</p>
    <p>Etiam egestas vulputate sem a dictum. Curabitur mattis ex ut turpis vehicula, nec auctor eros facilisis. Duis nisl augue, varius feugiat sem et, iaculis gravida enim. Nam luctus purus et dapibus mattis. Curabitur hendrerit risus non velit aliquet hendrerit. Nullam faucibus, sapien vitae egestas congue, metus lacus rhoncus leo, non malesuada justo ipsum eu felis. Aenean venenatis metus non tincidunt sollicitudin.</p>

    <h2 id="heading-4">Heading 4</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare porta nulla. Nulla ipsum felis, aliquet nec nisl sit amet, suscipit facilisis massa. Suspendisse consectetur lorem id odio fringilla pretium. Curabitur finibus nulla augue. Fusce vitae ornare lorem. Vivamus quis lacus ullamcorper, vehicula felis pretium, iaculis leo. Duis eget condimentum enim. Praesent vel est ut nisl pulvinar suscipit sit amet in sapien. Donec euismod odio ornare nisi luctus dignissim. Pellentesque vehicula, elit vitae maximus dapibus, erat nunc ultrices leo, nec pretium felis odio ut ex. Phasellus sapien felis, lobortis eu aliquam quis, semper quis neque. Aliquam vestibulum arcu ut nisl lacinia, in placerat dolor congue. Vivamus varius tincidunt odio, at pellentesque eros cursus nec. Donec viverra nec tellus vitae placerat. Cras id gravida mauris. Quisque sit amet imperdiet nisi.</p>
    <p>Sed eros ligula, blandit et iaculis et, faucibus in libero. Nunc augue dui, laoreet at porta ut, ultrices ac est. Duis at viverra metus. Phasellus pulvinar ligula sed aliquet pretium. Vestibulum erat risus, elementum ac imperdiet sed, semper eu sapien. Proin lobortis mauris ut ante tempor mattis. Donec dapibus interdum risus, eget malesuada arcu. Nulla facilisi. Maecenas aliquet ullamcorper tortor quis dapibus. Nunc facilisis augue vitae dictum semper. Etiam vehicula nec tortor non lobortis. Morbi hendrerit in nibh nec maximus. Nam convallis erat metus. In fermentum efficitur condimentum.</p>
    <p>Vestibulum accumsan vulputate consectetur. Quisque ut malesuada arcu. Mauris ligula odio, commodo nec eros ultricies, semper varius dui. Donec facilisis a odio nec imperdiet. Pellentesque molestie leo in mi maximus feugiat. Sed quis arcu a velit laoreet viverra. Etiam suscipit lacus lacus, a pretium justo tincidunt in. Fusce eget mi turpis.</p>
    <p>Ut molestie augue in eros eleifend hendrerit. Donec et laoreet lorem, sed porta arcu. Duis pharetra rhoncus ipsum eu pellentesque. Praesent bibendum bibendum risus maximus convallis. Curabitur nec libero eu velit cursus aliquam. Integer dapibus in eros pretium dignissim. Sed tortor justo, semper in pellentesque in, aliquet pellentesque sapien. Aliquam sem quam, pellentesque a erat ac, aliquet sagittis turpis. Suspendisse dignissim ante ante. Proin ac urna porta, auctor odio convallis, mollis orci. Donec scelerisque mauris non varius dapibus. Proin sollicitudin placerat consectetur.</p>
    <p>Etiam egestas vulputate sem a dictum. Curabitur mattis ex ut turpis vehicula, nec auctor eros facilisis. Duis nisl augue, varius feugiat sem et, iaculis gravida enim. Nam luctus purus et dapibus mattis. Curabitur hendrerit risus non velit aliquet hendrerit. Nullam faucibus, sapien vitae egestas congue, metus lacus rhoncus leo, non malesuada justo ipsum eu felis. Aenean venenatis metus non tincidunt sollicitudin.</p>
  </article>

  <kemet-scroll-link>
    <kemet-button>Scroll to Top</kemet-button>
  </kemet-scroll-link>
`;

const handleLink = (event) => {
  const link = event.target;
  link.yOffset = -72;
  link.target = document.getElementById(link.dataset.target);
};

export const ScrollLink = Template.bind({});
ScrollLink.decorators = [story => html`<div style="padding:2rem;">${story()}</div>`];
