import React from 'react';
import { KemetScrollNav } from '../../WebComponents';
import './ScrollNav.scss';

const ViewScrollNav = () => {
  return (
    <content-wrapper>
      <section className="kemet-scroll-nav-demo resize">
        <KemetScrollNav effect="resize" offset={-250}>
          <div className="logo">
            <img src="https://kemet.dev/assets/images/storybook.png" alt="Kemet UI" />
          </div>
          <ul className="links">
            <li><a href="#" title="Link 1">Link 1</a></li>
            <li><a href="#" title="Link 2">Link 2</a></li>
            <li><a href="#" title="Link 3">Link 3</a></li>
          </ul>
        </KemetScrollNav>

        <article>
          <h2>Heading 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare porta nulla. Nulla ipsum felis, aliquet nec nisl sit amet, suscipit facilisis massa. Suspendisse consectetur lorem id odio fringilla pretium. Curabitur finibus nulla augue. Fusce vitae ornare lorem. Vivamus quis lacus ullamcorper, vehicula felis pretium, iaculis leo. Duis eget condimentum enim. Praesent vel est ut nisl pulvinar suscipit sit amet in sapien. Donec euismod odio ornare nisi luctus dignissim. Pellentesque vehicula, elit vitae maximus dapibus, erat nunc ultrices leo, nec pretium felis odio ut ex. Phasellus sapien felis, lobortis eu aliquam quis, semper quis neque. Aliquam vestibulum arcu ut nisl lacinia, in placerat dolor congue. Vivamus varius tincidunt odio, at pellentesque eros cursus nec. Donec viverra nec tellus vitae placerat. Cras id gravida mauris. Quisque sit amet imperdiet nisi.</p>
          <p>Sed eros ligula, blandit et iaculis et, faucibus in libero. Nunc augue dui, laoreet at porta ut, ultrices ac est. Duis at viverra metus. Phasellus pulvinar ligula sed aliquet pretium. Vestibulum erat risus, elementum ac imperdiet sed, semper eu sapien. Proin lobortis mauris ut ante tempor mattis. Donec dapibus interdum risus, eget malesuada arcu. Nulla facilisi. Maecenas aliquet ullamcorper tortor quis dapibus. Nunc facilisis augue vitae dictum semper. Etiam vehicula nec tortor non lobortis. Morbi hendrerit in nibh nec maximus. Nam convallis erat metus. In fermentum efficitur condimentum.</p>
          <p>Vestibulum accumsan vulputate consectetur. Quisque ut malesuada arcu. Mauris ligula odio, commodo nec eros ultricies, semper varius dui. Donec facilisis a odio nec imperdiet. Pellentesque molestie leo in mi maximus feugiat. Sed quis arcu a velit laoreet viverra. Etiam suscipit lacus lacus, a pretium justo tincidunt in. Fusce eget mi turpis.</p>
          <p>Ut molestie augue in eros eleifend hendrerit. Donec et laoreet lorem, sed porta arcu. Duis pharetra rhoncus ipsum eu pellentesque. Praesent bibendum bibendum risus maximus convallis. Curabitur nec libero eu velit cursus aliquam. Integer dapibus in eros pretium dignissim. Sed tortor justo, semper in pellentesque in, aliquet pellentesque sapien. Aliquam sem quam, pellentesque a erat ac, aliquet sagittis turpis. Suspendisse dignissim ante ante. Proin ac urna porta, auctor odio convallis, mollis orci. Donec scelerisque mauris non varius dapibus. Proin sollicitudin placerat consectetur.</p>
          <p>Etiam egestas vulputate sem a dictum. Curabitur mattis ex ut turpis vehicula, nec auctor eros facilisis. Duis nisl augue, varius feugiat sem et, iaculis gravida enim. Nam luctus purus et dapibus mattis. Curabitur hendrerit risus non velit aliquet hendrerit. Nullam faucibus, sapien vitae egestas congue, metus lacus rhoncus leo, non malesuada justo ipsum eu felis. Aenean venenatis metus non tincidunt sollicitudin.</p>

          <h2>Heading 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare porta nulla. Nulla ipsum felis, aliquet nec nisl sit amet, suscipit facilisis massa. Suspendisse consectetur lorem id odio fringilla pretium. Curabitur finibus nulla augue. Fusce vitae ornare lorem. Vivamus quis lacus ullamcorper, vehicula felis pretium, iaculis leo. Duis eget condimentum enim. Praesent vel est ut nisl pulvinar suscipit sit amet in sapien. Donec euismod odio ornare nisi luctus dignissim. Pellentesque vehicula, elit vitae maximus dapibus, erat nunc ultrices leo, nec pretium felis odio ut ex. Phasellus sapien felis, lobortis eu aliquam quis, semper quis neque. Aliquam vestibulum arcu ut nisl lacinia, in placerat dolor congue. Vivamus varius tincidunt odio, at pellentesque eros cursus nec. Donec viverra nec tellus vitae placerat. Cras id gravida mauris. Quisque sit amet imperdiet nisi.</p>
          <p>Sed eros ligula, blandit et iaculis et, faucibus in libero. Nunc augue dui, laoreet at porta ut, ultrices ac est. Duis at viverra metus. Phasellus pulvinar ligula sed aliquet pretium. Vestibulum erat risus, elementum ac imperdiet sed, semper eu sapien. Proin lobortis mauris ut ante tempor mattis. Donec dapibus interdum risus, eget malesuada arcu. Nulla facilisi. Maecenas aliquet ullamcorper tortor quis dapibus. Nunc facilisis augue vitae dictum semper. Etiam vehicula nec tortor non lobortis. Morbi hendrerit in nibh nec maximus. Nam convallis erat metus. In fermentum efficitur condimentum.</p>
          <p>Vestibulum accumsan vulputate consectetur. Quisque ut malesuada arcu. Mauris ligula odio, commodo nec eros ultricies, semper varius dui. Donec facilisis a odio nec imperdiet. Pellentesque molestie leo in mi maximus feugiat. Sed quis arcu a velit laoreet viverra. Etiam suscipit lacus lacus, a pretium justo tincidunt in. Fusce eget mi turpis.</p>
          <p>Ut molestie augue in eros eleifend hendrerit. Donec et laoreet lorem, sed porta arcu. Duis pharetra rhoncus ipsum eu pellentesque. Praesent bibendum bibendum risus maximus convallis. Curabitur nec libero eu velit cursus aliquam. Integer dapibus in eros pretium dignissim. Sed tortor justo, semper in pellentesque in, aliquet pellentesque sapien. Aliquam sem quam, pellentesque a erat ac, aliquet sagittis turpis. Suspendisse dignissim ante ante. Proin ac urna porta, auctor odio convallis, mollis orci. Donec scelerisque mauris non varius dapibus. Proin sollicitudin placerat consectetur.</p>
          <p>Etiam egestas vulputate sem a dictum. Curabitur mattis ex ut turpis vehicula, nec auctor eros facilisis. Duis nisl augue, varius feugiat sem et, iaculis gravida enim. Nam luctus purus et dapibus mattis. Curabitur hendrerit risus non velit aliquet hendrerit. Nullam faucibus, sapien vitae egestas congue, metus lacus rhoncus leo, non malesuada justo ipsum eu felis. Aenean venenatis metus non tincidunt sollicitudin.</p>

          <h2>Heading 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare porta nulla. Nulla ipsum felis, aliquet nec nisl sit amet, suscipit facilisis massa. Suspendisse consectetur lorem id odio fringilla pretium. Curabitur finibus nulla augue. Fusce vitae ornare lorem. Vivamus quis lacus ullamcorper, vehicula felis pretium, iaculis leo. Duis eget condimentum enim. Praesent vel est ut nisl pulvinar suscipit sit amet in sapien. Donec euismod odio ornare nisi luctus dignissim. Pellentesque vehicula, elit vitae maximus dapibus, erat nunc ultrices leo, nec pretium felis odio ut ex. Phasellus sapien felis, lobortis eu aliquam quis, semper quis neque. Aliquam vestibulum arcu ut nisl lacinia, in placerat dolor congue. Vivamus varius tincidunt odio, at pellentesque eros cursus nec. Donec viverra nec tellus vitae placerat. Cras id gravida mauris. Quisque sit amet imperdiet nisi.</p>
          <p>Sed eros ligula, blandit et iaculis et, faucibus in libero. Nunc augue dui, laoreet at porta ut, ultrices ac est. Duis at viverra metus. Phasellus pulvinar ligula sed aliquet pretium. Vestibulum erat risus, elementum ac imperdiet sed, semper eu sapien. Proin lobortis mauris ut ante tempor mattis. Donec dapibus interdum risus, eget malesuada arcu. Nulla facilisi. Maecenas aliquet ullamcorper tortor quis dapibus. Nunc facilisis augue vitae dictum semper. Etiam vehicula nec tortor non lobortis. Morbi hendrerit in nibh nec maximus. Nam convallis erat metus. In fermentum efficitur condimentum.</p>
          <p>Vestibulum accumsan vulputate consectetur. Quisque ut malesuada arcu. Mauris ligula odio, commodo nec eros ultricies, semper varius dui. Donec facilisis a odio nec imperdiet. Pellentesque molestie leo in mi maximus feugiat. Sed quis arcu a velit laoreet viverra. Etiam suscipit lacus lacus, a pretium justo tincidunt in. Fusce eget mi turpis.</p>
          <p>Ut molestie augue in eros eleifend hendrerit. Donec et laoreet lorem, sed porta arcu. Duis pharetra rhoncus ipsum eu pellentesque. Praesent bibendum bibendum risus maximus convallis. Curabitur nec libero eu velit cursus aliquam. Integer dapibus in eros pretium dignissim. Sed tortor justo, semper in pellentesque in, aliquet pellentesque sapien. Aliquam sem quam, pellentesque a erat ac, aliquet sagittis turpis. Suspendisse dignissim ante ante. Proin ac urna porta, auctor odio convallis, mollis orci. Donec scelerisque mauris non varius dapibus. Proin sollicitudin placerat consectetur.</p>
          <p>Etiam egestas vulputate sem a dictum. Curabitur mattis ex ut turpis vehicula, nec auctor eros facilisis. Duis nisl augue, varius feugiat sem et, iaculis gravida enim. Nam luctus purus et dapibus mattis. Curabitur hendrerit risus non velit aliquet hendrerit. Nullam faucibus, sapien vitae egestas congue, metus lacus rhoncus leo, non malesuada justo ipsum eu felis. Aenean venenatis metus non tincidunt sollicitudin.</p>
        </article>
      </section>
    </content-wrapper>
  );
}

export default ViewScrollNav;
