import fetch, { Response } from "node-fetch";
import { Life360User } from "./users.types";

export default class Life360 {
  private readonly token: string;

  constructor(token: string) {
    this.token = token;
  }

  public async get(path: string): Promise<Response> {
    return await fetch(`https://api-cloudfront.life360.com/v3/${path}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  public async getCircles(): Promise<[Life360Circle]> {
    const response = await this.get(`circles`);
    const data = await response.json();
    return data as [Life360Circle];
  }

  public async getCircle(circleID: string): Promise<Life360Circle> {
    const response = await this.get(`circles/${circleID}`);
    const data = await response.json();
    return data as Life360Circle;
  }

  public async getUser(
    circleID: string,
    memberID: string
  ): Promise<Life360User> {
    const response = await this.get(`circles/${circleID}/members/${member}`);
    const data = await response.json();
    return data as Life360User;
  }
}
