const os = require("os");

const user = os.userInfo();
console.log(` ${os.uptime()}seconds`);

const curruntOS = {
  name: os.type(),
  release: os.release,
  freeMem: os.totalmem(),
  totalMem: os.totalmem(),
};
console.log(curruntOS);
