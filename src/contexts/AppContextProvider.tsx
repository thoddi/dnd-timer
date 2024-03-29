import React, { createContext } from "react";
import useInGameTime from "../hooks/useInGameTime";
import useLocalStorageList, { Create, StorageInterface } from "../hooks/useLocalStorageList";
import { Duration, InGameEvent, Log, Speed, Timer } from "./AppContext.type";
import { unitsOfTime } from "../unitsOfTime";

interface TimeContextType {
  time: number;
  isPlaying: boolean;
  setPlaySpeed(speed: number): void;
  /**
   * Adds a duration to the current time and saves it in local storage.
   * @param seconds Seconds to add to time.
   * @returns The new time after adding duration.
   */
  addTime(seconds: number): number;
}

export const TimeContext = createContext<TimeContextType>({} as TimeContextType);
export const LogContext = createContext<StorageInterface<Log>>({} as StorageInterface<Log>);
export const TimerContext = createContext<StorageInterface<Timer>>({} as StorageInterface<Timer>);
export const SpeedContext = createContext<StorageInterface<Speed>>({} as StorageInterface<Speed>);
export const DurationContext = createContext<StorageInterface<Duration>>({} as StorageInterface<Duration>);
export const EventContext = createContext<StorageInterface<InGameEvent>>({} as StorageInterface<InGameEvent>);

const speedsInitialState = [
  {
    name: 'Rauntími',
    speed: 1,
  },
  {
    name: 'Spilunartími',
    speed: 2,
  }
] as Create<Speed>[];
const durationsInitialState = [
  {
    name: 'Long rest',
    duration: unitsOfTime.hours.seconds * 8,
  },
  {
    name: 'Short rest',
    duration: unitsOfTime.minutes.seconds * 30,
  }
] as Create<Duration>[];
const eventsInitalState = [
  {
    name: 'Borðað',
  }
] as Create<InGameEvent>[];

interface Props {
  children: React.ReactNode;
}

function AppContextProvider({ children }: Props) {
  const [time, isPlaying, setPlaySpeed, addTime] = useInGameTime();
  const logs = useLocalStorageList<Log>('logs');
  const timers = useLocalStorageList<Timer>('timers');
  const speeds = useLocalStorageList<Speed>('speeds', speedsInitialState)
  const durations = useLocalStorageList<Duration>('durations', durationsInitialState);
  const events = useLocalStorageList<InGameEvent>('events', eventsInitalState);

  return (
    <TimeContext.Provider value={{ time, isPlaying, setPlaySpeed, addTime }}>
      <LogContext.Provider value={logs}>
        <TimerContext.Provider value={timers}>
          <SpeedContext.Provider value={speeds}>
            <DurationContext.Provider value={durations}>
              <EventContext.Provider value={events}>
                {children}
              </EventContext.Provider>
            </DurationContext.Provider>
          </SpeedContext.Provider>
        </TimerContext.Provider>
      </LogContext.Provider>
    </TimeContext.Provider>
  );
}

export default AppContextProvider;