type RobotType = "Cleaner" | "Waiter" | "Developer";

interface IRobot {
  name: string;
  battery: number;
  type: RobotType;
  reset: () => void;
  work: () => void;
}

class Robot implements IRobot {
  battery;

  constructor(
    public name: string,
    public type: RobotType,
    protected message: string
  ) {
    this.battery = 100;
  }
  reset() {}
  work() {
    console.log(this.message);
  }
  generateName(): string {
    let name: string = "";

    const chars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i <= 3; i++) {
      if (i < 3) {
        name += Math.floor(Math.random() * (99 - 10) + 10);
      }
      return name;
    }
  }
}

export class Cleaner extends Robot {
  type: RobotType;

  constructor(public name: string) {
    super(name, "Cleaner", "Larala larita, I clean my little house");
  }
}
export class Developer extends Robot {
  type: RobotType;

  constructor(public name: string) {
    super(
      name,
      "Developer",
      "JavaScript is cool - I develop with JavaScript -> I'm cool"
    );
  }
}
export class Waiter extends Robot {
  type: RobotType;

  constructor(public name: string) {
    super(name, "Waiter", "Do you feel like a mini of fuet?");
  }
}

export default Robot;
