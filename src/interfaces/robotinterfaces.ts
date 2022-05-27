export type RobotType = "Cleaner" | "Waiter" | "Developer";

export interface IRobot {
  name: string;
  battery: number;
  type: RobotType;
  reset: () => void;
  work: () => void;
}
