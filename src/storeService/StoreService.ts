import { Duration } from "./StoreService.type";

enum Keys {
  time = 'time',
  duration = 'duration',
}

const StoreService = {
  getTime() {
    return Number(localStorage.getItem(Keys.time));
  },
  setTime(seconds: number) {
    localStorage.setItem(Keys.time, seconds.toString());
  },
  getDurations() {
    const jsonList = localStorage.getItem(Keys.duration);
    if (jsonList) {
      return JSON.parse(jsonList) as Duration[];
    }
    return [];
  }
};

export default StoreService;