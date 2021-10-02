export interface Life360CircleThread {
	id: string;
	circleId: string;
	message: Life360CircleThreadMessage;
	names: Life360CircleThreadNames;
	deleted: boolean;
	unreadCount: any;
}

export interface Life360CircleThreadMessage {
	type: string;
	id: string;
	circleId: string;
	senderId: string;
	threadId: string;
	text: string;
	timestamp: number;
	deleted: boolean;
	messageObjects: any;
	directObject: string;
	actionKey: string;
	activityType: string;
	location?: Life360CircleThreadLocation;
	clientMessageId: string;
	interfaces: string[];
	photo: any;
	read: boolean;
}

export interface Life360CircleThreadLocation {
	latitude: string;
	longitude: string;
	accuracy: string;
	startTimestamp: any;
	endTimestamp: number;
	since: any;
	timestamp: number;
	name: string;
	placeType: string;
	source: any;
	sourceId: any;
	address1: string;
	address2: string;
	shortAddress: any;
	inTransit: string;
	tripId: any;
	driveSDKStatus: any;
	battery: any;
	charge: string;
	wifiState: any;
	speed: number;
	isDriving: string;
	userActivity: any;
}

export type Life360CircleThreadNames = Record<string, Life360CircleThreadUser>;

export interface Life360CircleThreadUser {
	name: string;
	status: string;
}
