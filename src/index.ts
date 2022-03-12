import fetch from 'node-fetch';
import {Life360Circle} from './types/circles.types';
import {Life360CircleLocation} from './types/location.types';
import {Life360CirclePlace} from './types/places.types';
import {Life360User} from './types/users.types';
import {Life360UserTrip} from './types/trip.types';

export class Life360API {
	public static async login(username: string, password: string) {
		const request = await fetch('https://api-cloudfront.life360.com/v3/oauth2/token', {
			method: 'POST',
			headers: {
				Authorization:
					'Basic YnJ1czR0ZXZhcHV0UmVadWNydUJSVXdVYnJFTUVDN1VYZTJlUEhhYjpSdUt1cHJBQ3JhbWVzV1UydVRyZVF1bXVtYTdhemFtQQ==',
				'User-Agent': 'SafetyMapKoko/22.2.0.487/CBC47A39-34C3-43F2-9924-E7F1F928AC1C',
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({
				grant_type: 'password',
				username,
				password,
			}),
		});
		const response = await request.json();
		return new Life360API(
			response.access_token,
			response.user.firstName,
			response.user.lastName,
			response.user.avatar,
			response.user.loginEmail,
			response.user.created
		);
	}

	constructor(
		private readonly token: string,
		private readonly firstName: string,
		private readonly lastName: string,
		private readonly avatar: string,
		private readonly loginEmail: string,
		private readonly created: string
	) {}

	/**
	 * Login to Life360 and get account information
	 * @param username
	 * @param password
	 */

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
	 * Gets all places added in a circle
	 * @param circleId The ID of the circle
	 */
	async getCirclePlaces(circleId: string) {
		return this.get<Life360CirclePlace[]>(`circles/${circleId}/allplaces`);
	}

	/**
	 * Gets location history for all members in a circle
	 * @param circleId The ID of the circle
	 */
	async getCircleHistory(circleId: string) {
		return this.get<Life360CircleLocation[]>(`circles/${circleId}/members/history`);
	}

	/**
	 * Get all users in a circle
	 * @param circleId The ID of the circle
	 */
	async getUsers(circleId: string) {
		return this.get<Life360User>(`circles/${circleId}/members`);
	}

	/**
	 * Gets a user in a circle
	 * @param circleId The ID of the circle
	 * @param userId The ID of the user
	 */
	async getUser(circleId: string, userId: string) {
		return this.get<Life360User>(`circles/${circleId}/members/${userId}`);
	}

	/**
	 * Gets recent trips made by a user of the circle
	 * @param circleId The ID of the circle
	 * @param userId The ID of the user
	 */
	async getUserTrips(circleId: string, userId: string) {
		return this.get<Life360UserTrip[]>(`circles/${circleId}/users/${userId}/driverbehavior/trips`);
	}

	/**
	 * Gets a recent trip made by a user of the circle
	 * @param circleId The ID of the circle
	 * @param userId The ID of the user
	 * @param tripId The ID of the trip
	 */
	async getUserTrip(circleId: string, userId: string, tripId: string) {
		return this.get<Life360UserTrip>(
			`circles/${circleId}/users/${userId}/driverbehavior/trips/${tripId}`
		);
	}

	/**
	 * Internal function to get data from the API
	 * @param path The path to query
	 */
	protected async get<T>(path: string): Promise<T> {
		return fetch(`https://api-cloudfront.life360.com/v3/${path}`, {
			headers: {
				Authorization: `Bearer ${this.token}`,
			},
		}).then(async res => res.json() as Promise<T>);
	}
}
