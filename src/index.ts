import { Cleaner, Developer, Waiter } from "./types/types";

const lola = new Developer("blalalam");
const lolo = new Waiter("bwdhufa");
const lili = new Cleaner("deuwef");
lola.work();
lili.work();
lolo.work();
console.log(lola.generateName());
