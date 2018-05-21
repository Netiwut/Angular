export interface General {
  name: string;
  namehead: string;
  image: string;
  history: string;
}
export interface Postit {
  id: number;
  timestamp: string;
  name: string;
  detail: string;
  url: string;
}
export interface Member {
  id: number;
  name: string;
  position: string;
}
export interface People {
    id: number;
    name: string;
    member: Member[];
}
export interface Image {
    id: number;
    url: string;
}
export interface Gallery {
    id: number;
    name: string;
    detail: string;
    images: Image[];
}

