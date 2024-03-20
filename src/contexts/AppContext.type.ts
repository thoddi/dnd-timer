export interface Speed {
  id: number;
  name: string;
  speed: number;
}

export interface Log {
  id: number;
  text: string;
  inGameTime: number;
  durationId?: number;
  eventId?: number;
}

export interface Timer {
  id: number;
  logId?: number;
  eventId?: number;
  durationId?: number;
  name: string;
  finishAtInGameTime?: number;
  soundAtProgressState?: number;
}

export interface Duration {
  id: number;
  name: string;
  duration: number;
}

export interface InGameEvent {
  id: number;
  name: string;
}