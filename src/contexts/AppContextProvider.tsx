import React, { createContext } from "react";
import useInGameTime from "../hooks/useInGameTime";
import useLocalStorageList, { LocalStorageInterface } from "../hooks/useLocalStorageList";
import { Duration, InGameEvent, Log, Speed, Timer } from "./AppContext.type";

interface TimeContextType {
  time: number;
  setPlaySpeed(speed: number): void;
  addTime(seconds: number): void;
}

export const TimeContext = createContext<TimeContextType>({} as TimeContextType);
export const LogContext = createContext<LocalStorageInterface<Log>>({} as LocalStorageInterface<Log>);
export const TimerContext = createContext<LocalStorageInterface<Timer>>({} as LocalStorageInterface<Timer>);
export const SpeedContext = createContext<LocalStorageInterface<Speed>>({} as LocalStorageInterface<Speed>);
export const DurationContext = createContext<LocalStorageInterface<Duration>>({} as LocalStorageInterface<Duration>);
export const EventContext = createContext<LocalStorageInterface<InGameEvent>>({} as LocalStorageInterface<InGameEvent>);

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