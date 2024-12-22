const form = document.getElementById('converter-form');
const v2rayUri = document.getElementById('v2ray-uri');
const yamlOutput = document.getElementById('yaml-output');
const convertBtn = document.getElementById('convert-btn');

convertBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const uri = v2rayUri.value;
  const params = uri.split('?')[1].split('&');
  const config = {};

  params.forEach((param) => {
    const [key, value] = param.split('=');
    config[key] = value;
  });

  const yamlString = `
server: ${config.server}
port: ${config.port}
type: ${config.type}
tls: ${config.tls}
network: ${config.network}
uuid: ${config.uuid}
`;

  yamlOutput.value = yamlString;
});