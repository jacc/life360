export interface Life360CirclePlace {
	id: string;
	source: string;
	source_id: string;
	owner_id: string;
	name: string;
	latitude: number;
	longitude: number;
	radius: number;
	address?: string;
	circle_id: string;
	hasAlerts: number;
}
