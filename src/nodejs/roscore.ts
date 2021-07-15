import { HttpServerNodejs } from "@foxglove/xmlrpc/nodejs";

import { RosMaster } from "../RosMaster";
import { RosNode } from "../RosNode";
import { getEnvVar, getHostname, getNetworkInterfaces } from "./platform";

async function main() {
  const hostname = RosNode.GetRosHostname(getEnvVar, getHostname, getNetworkInterfaces);
  const port = 11311;
  const httpServer = new HttpServerNodejs();
  const rosMaster = new RosMaster(httpServer);

  await rosMaster.start(hostname, port);
  console.log(`ROS_MASTER_URI=http://${hostname}:${port}/`);
}

void main();
