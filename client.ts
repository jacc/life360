import 'dotenv/config';
import {Life360API} from './src';

const life360 = new Life360API(process.env.TOKEN!);

void life360.getCircleThreads().then(r => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	console.log(r);
	r.forEach(thread => {
		console.log(thread);
	});
});
// Void life360.getCircle(process.env.CIRCLE!).then(console.log);
