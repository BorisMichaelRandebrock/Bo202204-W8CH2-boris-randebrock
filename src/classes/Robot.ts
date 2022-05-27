import { IRobot, RobotType } from "../interfaces/robotinterfaces";

class Robot implements IRobot {
  battery;
  name;
  intervalId: NodeJS.Timer;

  constructor(public type: RobotType) {
    this.battery = 4;
    this.name = this.generateName();
    this.decreaseBattery();
  }

  reset() {
    this.name = this.generateName();
    clearInterval(this.intervalId);
    this.battery = 100;
    this.decreaseBattery();
  }

  work() {
    let message: string;

    if (this.battery > 0) {
      switch (this.type) {
        case "Cleaner":
          message = "Larala larita, I clean my little house";
          break;

        case "Waiter":
          message = "Do you feel like a mini of fuet?";
          break;

        case "Developer":
          message =
            "JavaScript is cool - I develop with JavaScript -> I'm cool";
          break;

        default:
          message = "";
          break;
      }
      console.log(message);
    }
  }

  generateName(): string {
    let name: string = "";

    const chars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i <= 3; i++) {
      if (i < 3) {
        name += chars.charAt(Math.floor(Math.random() * chars.length));
        continue;
      }

      name += Math.floor(Math.random() * (99 - 10) + 10);
    }

    return name;
  }

  decreaseBattery(): void {
    this.intervalId = setInterval(() => {
      this.battery -= 1;
      console.log(this.battery);

      if (this.battery === 10) {
        console.log("I'm low of battery");
      }

      if (this.battery === 0) {
        console.log("Me morí");
        clearInterval(this.intervalId);
      }
    }, 1000);
  }
}

export default Robot;
