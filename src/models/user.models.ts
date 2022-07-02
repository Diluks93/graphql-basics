export interface User {
  _id: string;
  id?: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  favouriteArtistIds?: string[];
}
