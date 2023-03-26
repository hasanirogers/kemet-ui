import React from 'react';
import { KemetTracker, KemetTrackerStep } from '../../WebComponents';

const ViewTracker = () => {
  return (
    <content-wrapper>
      <KemetTracker breakpoint="767px">
        <KemetTrackerStep completed={true}>Step 1</KemetTrackerStep>
        <KemetTrackerStep completed={true}>Step 2</KemetTrackerStep>
        <KemetTrackerStep current={true}>Step 3</KemetTrackerStep>
        <KemetTrackerStep>Step 4</KemetTrackerStep>
        <KemetTrackerStep>Step 5</KemetTrackerStep>
      </KemetTracker>
    </content-wrapper>
  );
}

export default ViewTracker;
