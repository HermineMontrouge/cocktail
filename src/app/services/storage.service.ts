import { Injectable } from "@angular/core";

@Injectable()
export class StorageService {
  constructor() {}

  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key) {
    return localStorage.getItem(key);
  }
}
