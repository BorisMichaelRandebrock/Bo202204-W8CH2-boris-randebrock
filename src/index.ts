import Robot from "./classes/Robot";
import { IRobot, RobotType } from "../src/interfaces/robotinterfaces";

const createRobot = (type: RobotType): IRobot => {
  const newRobot = new Robot(type);
  return newRobot;
};

const roomba = createRobot("Cleaner");
