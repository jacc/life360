export interface Life360CircleLocation {
	latitude: string;
	longitude: string;
	accuracy: string;
	startTimestamp: string;
	endTimestamp: string;
	since: string;
	timestamp: string;
	name?: string;
	placeType: any;
	source: boolean;
	sourceId: any;
	address1: string;
	address2: string;
	shortAddress: string;
	inTransit: string;
	tripId: any;
	driveSDKStatus: any;
	battery: string;
	charge: string;
	wifiState: string;
	speed: number;
	isDriving: string;
	userActivity: string;
	userId: string;
}
