import { UserType } from './types.ts';

export class Api {
  public static async getAllUsers() {
    const res = await fetch(`http://localhost:3000/users`);
    return (await res.json()) as { data: UserType[]; meta: string };
  }

  public static async getUserMessages(id: number) {
    const res = await fetch(`http://localhost:3000/users/${id}/messages`);
    return await res.json();
  }

  public static async deleteUser(id: number) {
    const res = await fetch(`http://localhost:3000/users/${id}`, {
      method: 'DELETE',
    });
    return (await res.json()) as { data: UserType[]; message: string };
  }
}
