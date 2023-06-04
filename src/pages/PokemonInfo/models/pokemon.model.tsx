/* eslint-disable @typescript-eslint/no-explicit-any */
export type abilities = {
  ability:{
    name: string;
    url: string;
    is_hidden: boolean;
    slot: number;
  }
  name?: string;
  names?: any[]
}

export type pokemon = {
  id: number;
  name: string;
  stats: any[];
  abilities: abilities[];
}