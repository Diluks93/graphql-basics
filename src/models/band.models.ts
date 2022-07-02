interface Member {
  artist: String
  instruments: String
  years: String
}

export interface Band {
  _id: string;
  id?: string;
  name: string;
  origin: string;
  membersId: Member[];
  website: string;
  genresIds: string[];
}
