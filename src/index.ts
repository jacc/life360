import fetch from 'node-fetch';
import {Life360Circle} from './types/circles.types';
import {Life360User} from './types/users.types';

export class Life360API {
	private readonly token;

	constructor(token: string) {
		this.token = token;
	}

	/**
	 * Gets all circles
	 * @param circleId The ID of the circle
	 */
	async getCircles() {
		return this.get<Life360Circle[]>('circles');
	}

	/**
	 * Gets a circle
	 * @param circleId The ID of the circle
	 */
	async getCircle(circleId: string) {
		return this.get<Life360Circle>(`circles/${circleId}`);
	}

	/**
	 * Gets a user in a circle
	 * @param circleId The ID of the circle
	 * @param userId The ID of the user
	 */
	async getUser(circleId: string, userId: string) {
		return this.get<Life360User>(`circles/${circleId}/members/${userId}`);
	}

	protected async get<T>(path: string): Promise<T> {
		return fetch(`https://api-cloudfront.life360.com/v3/${path}`, {
			headers: {
				Authorization: `Bearer ${this.token}`,
			},
		}).then(async res => res.json() as Promise<T>);
	}
}
