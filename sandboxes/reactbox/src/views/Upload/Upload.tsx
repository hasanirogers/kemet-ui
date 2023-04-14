import React from 'react';
import { KemetUpload, KemetUploadFile } from '../../WebComponents';

const ViewUpload = () => {
  return (
    <content-wrapper>
      <KemetUpload>
        <KemetUploadFile name="image.jpg" size={2000000} loaded={2000000} status="complete"></KemetUploadFile>
        <KemetUploadFile name="image.png" size={200000} loaded={100000} status="uploading"></KemetUploadFile>
        <KemetUploadFile name="package.zip" size={8000000} loaded={2000000} status="error"></KemetUploadFile>
      </KemetUpload>
    </content-wrapper>
  );
}

export default ViewUpload;
