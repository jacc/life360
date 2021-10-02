import 'dotenv/config';
import {Life360API} from './src';

const life360 = new Life360API(process.env.TOKEN!);

void life360.getCircles().then(console.log);
// Void life360.getCircle(process.env.CIRCLE!).then(console.log);
