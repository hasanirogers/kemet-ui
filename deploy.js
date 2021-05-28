const path = require('path');
const SftpClient = require('ssh2-sftp-client');

const localDir = '/storybook-static';
const remoteDir = '/home/zerodivide85/sites/kemet-ui-storybook';

require('dotenv').config();

const config = {
  host: process.env.FTP_DEPLOY_HOST,
  username: process.env.FTP_DEPLOY_USERNAME,
  password: process.env.FTP_DEPLOY_PASSWORD,
  port: process.env.FTP_DEPLOY_PORT || 22,
};

const main = async () => {
  const client = new SftpClient();
  const src = path.join(__dirname, localDir);

  try {
    await client.connect(config);
    await client.rmdir(remoteDir, true);

    client.on('upload', (info) => {
      console.log(`Listener: Uploaded ${info.source}`);
    });

    const result = await client.uploadDir(src, remoteDir);

    return result;
  } finally {
    client.end();
  }
};

main()
  .then(message => console.log(message))
  .catch((error) => { console.log(`main error: ${error.message}`); });
