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
    name: 'Spilunartími',
    speed: 2,
  },  
  {
    name: 'Leita að loot-i',
    speed: 60,
  },
  {
    name: 'Montosh',
    speed: unitsOfTime.hours.seconds * 8,
  },
] as Create<Speed>[];
const durationsInitialState = [
  {
    name: 'Long rest',
    duration: unitsOfTime.hours.seconds * 8,
    timer: {
      name: 'Seinast sofið',
      finishAfterSeconds: unitsOfTime.days.seconds,
    },
  },
  {
    name: 'Short rest',
    duration: unitsOfTime.minutes.seconds * 30,
  }
] as (Create<Duration> & { timer?: Create<Timer> })[] ;
const eventsInitalState = [
  {
    name: 'Borðað',
  }
] as Create<InGameEvent>[];

interface Props {
  children: React.ReactNode;
}

function AppContextProvider({ children }: Props) {
  const setInitialState = localStorage.length === 0;
  const [time, isPlaying, setPlaySpeed, addTime] = useInGameTime();
  const logs = useLocalStorageList<Log>('logs');
  const timers = useLocalStorageList<Timer>('timers');
  const speeds = useLocalStorageList<Speed>('speeds')
  const durations = useLocalStorageList<Duration>('durations');
  const events = useLocalStorageList<InGameEvent>('events');

  if (setInitialState) {
    for (const speed of speedsInitialState) {
      speeds.add(speed);
    }
    for (const { timer, ...duration} of durationsInitialState) {
      const id = durations.add(duration);
      if  (timer) {
        timers.add({...timer, durationId: id});
      }
    }
    for (const event of eventsInitalState) {
      events.add(event);
    }
  }

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