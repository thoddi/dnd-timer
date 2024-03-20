import React, { createContext } from "react";
import useInGameTime from "../hooks/useInGameTime";
import useLocalStorageList, { Create } from "../hooks/useLocalStorageList";
import { Log, Timer } from "./AppContext.type";

interface TimeContextType {
  time: number;
  setPlaySpeed(speed: number): void;
  addTime(seconds: number): void;
}

interface LogContextType {
  logs: Log[];
  addLog(item: Create<Log>): void;
}

interface TimerContextType {
  timers: Timer[];
  addTimer(item: Create<Timer>): void;
}

export const TimeContext = createContext<TimeContextType>({} as TimeContextType);
export const LogContext = createContext<LogContextType>({} as LogContextType);
export const TimerContext = createContext<TimerContextType>({} as TimerContextType);

interface Props {
  children: React.ReactNode;
}
function AppContextProvider({ children }: Props) {
  const [time, setPlaySpeed, addTime] = useInGameTime();
  const [logs, addLog] = useLocalStorageList<Log>('logs');
  const [timers, addTimer] = useLocalStorageList<Timer>('timer');

  return (
    <TimeContext.Provider value={{ time, setPlaySpeed, addTime }}>
      <LogContext.Provider value={{ logs, addLog }}>
        <TimerContext.Provider value={{ timers, addTimer }}>
          {children}
        </TimerContext.Provider>
      </LogContext.Provider>
    </TimeContext.Provider>
  );
}

export default AppContextProvider;