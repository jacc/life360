import Life360 from "./src";

const life360 = new Life360(process.env.TOKEN);

life360.getUser(process.env.CIRCLE, process.env.USER).then(console.log);
