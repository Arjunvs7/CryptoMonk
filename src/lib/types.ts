export type Gender = "male" | "female" | "other";

export interface UserData {
  id: string;
  name: string;
  email: string;
  phone: string;
  hobbies: string[];
  place: string;
  gender: Gender;
}
