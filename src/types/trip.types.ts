export interface Life360UserTrip {
	userId: string;
	tripId: string;
	startTime: number;
	endTime: number;
	topSpeed: number;
	averageSpeed: number;
	distance: number;
	duration: number;
	speedingCount: number;
	hardBrakingCount: number;
	rapidAccelerationCount: number;
	distractedCount: number;
	crashCount: number;
	score: number;
	driveType: number;
	userMode: number;
	userTag: number;
}
