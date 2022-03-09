import { Client, LocalAuth } from 'whatsapp-web.js';
// create async constructor
const MakeWaConnection = async (): Promise<Client> => {
  const client = new Client({
    puppeteer: { headless: false },
    authStrategy: new LocalAuth({ clientId: 'Unix-Bree' }),
  });
    await client.initialize();

  client.on('qr', (qr) => {
    console.log("QR RECEIVED", qr);
    });
  return client;
};
MakeWaConnection().then((client) => {
  console.log(client);
});
