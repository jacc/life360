import Life360 from ".";
import { Life360User } from "./types/users.types";

class Users extends Life360 {
  constructor(token: string) {
    super(token);
  }

  public async getUser(
    circleID: string,
    memberID: string
  ): Promise<Life360User> {
    const response = await this.get(`circles/${circleID}/members/${memberID}`);
    const data = await response.json();
    return data as Life360User;
  }
}
