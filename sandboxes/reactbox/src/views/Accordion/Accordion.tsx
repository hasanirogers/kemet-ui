import React, { useState } from 'react';
import { KemetAccordion, KemetAccordionPanel, KemetIcon } from '../../WebComponents';



const ViewAccordion = () => {
  const [icon, setIcon] = useState('chevron-down');

  return (
    <content-wrapper>
      <KemetAccordion kemet-elevation="layer4" kemet-margin="tiny:largest">
        <KemetAccordionPanel onOpened={() => setIcon('chevron-up')} onClosed={() => setIcon('chevron-down')}>
          <h3 slot="trigger">Trigger 1</h3>
          <KemetIcon slot="icon" icon={icon} size={18} />
          <div slot="body">
            <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          </div>
        </KemetAccordionPanel>
        <KemetAccordionPanel onOpened={() => setIcon('chevron-up')} onClosed={() => setIcon('chevron-down')}>
          <h3 slot="trigger">Trigger 2</h3>
          <KemetIcon slot="icon" icon={icon} size={18} />
          <div slot="body">
            <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          </div>
        </KemetAccordionPanel>
        <KemetAccordionPanel onOpened={() => setIcon('chevron-up')} onClosed={() => setIcon('chevron-down')}>
          <h3 slot="trigger">Trigger 3</h3>
          <KemetIcon slot="icon" icon={icon} size={18} />
          <div slot="body">
            <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          </div>
        </KemetAccordionPanel>
      </KemetAccordion>
    </content-wrapper>
  );
}

export default ViewAccordion;
