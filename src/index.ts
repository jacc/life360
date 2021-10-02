import fetch from 'node-fetch';
import {Life360Circle} from './types/circles.types';
import {Life360CircleLocation} from './types/location.types';
import {Life360CirclePlace} from './types/places.types';
import {Life360User} from './types/users.types';
import {Life360UserTrip} from './types/trip.types';
import {Life360CircleThread, Life360CircleThreads} from './types/threads.types';

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
	 * Gets all places added in a circle
	 * @param circleId The ID of the circle
	 */
	async getCirclePlaces(circleId: string) {
		return this.get<Life360CirclePlace[]>(`circles/${circleId}/allplaces`);
	}

	/**
	 * Gets a single place added in a circle
	 * @param circleId The ID of the circle
	 * @param placeID The ID of the place
	 */
	async getCirclePlace(circleId: string, placeId: string) {
		return this.get<Life360CirclePlace>(`circles/${circleId}/places/${placeId}`);
	}

	/**
	 * Gets location history for all members in a circle
	 * @param circleId The ID of the circle
	 */
	async getCircleHistory(circleId: string) {
		return this.get<Life360CircleLocation[]>(`circles/${circleId}/members/history`);
	}

	/**
	 * Gets location history for all members in a circle
	 * @param circleId The ID of the circle
	 */
	async getCircleThreads() {
		return this.get<Life360CircleThread[]>('circles/threads');
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
