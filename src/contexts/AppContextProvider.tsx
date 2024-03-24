import React, { createContext } from "react";
import useInGameTime from "../hooks/useInGameTime";
import useLocalStorageList, { StorageInterface } from "../hooks/useLocalStorageList";
import { Duration, InGameEvent, Log, Speed, Timer } from "./AppContext.type";

interface TimeContextType {
  time: number;
  setPlaySpeed(speed: number): void;
  addTime(seconds: number): void;
}

export const TimeContext = createContext<TimeContextType>({} as TimeContextType);
export const LogContext = createContext<StorageInterface<Log>>({} as StorageInterface<Log>);
export const TimerContext = createContext<StorageInterface<Timer>>({} as StorageInterface<Timer>);
export const SpeedContext = createContext<StorageInterface<Speed>>({} as StorageInterface<Speed>);
export const DurationContext = createContext<StorageInterface<Duration>>({} as StorageInterface<Duration>);
export const EventContext = createContext<StorageInterface<InGameEvent>>({} as StorageInterface<InGameEvent>);

interface Props {
  children: React.ReactNode;
}
function AppContextProvider({ children }: Props) {
  const [time, setPlaySpeed, addTime] = useInGameTime();
  const logs = useLocalStorageList<Log>('logs');
  const timers = useLocalStorageList<Timer>('timers');
  const speeds = useLocalStorageList<Speed>('speeds')
  const durations = useLocalStorageList<Duration>('durations');
  const events = useLocalStorageList<InGameEvent>('events');

  return (
    <TimeContext.Provider value={{ time, setPlaySpeed, addTime }}>
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