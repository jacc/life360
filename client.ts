import 'dotenv/config';
import {Life360API} from './src';

const life360 = new Life360API(process.env.TOKEN!);

void life360
	.getUserTrips(process.env.CIRCLE!, process.env.USERID!)
	.then(JSON.stringify)
	.then(console.log);
// Void life360.getCircle(process.env.CIRCLE!).then(console.log);
