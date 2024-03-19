import React, { createContext } from "react";
import useInGameTime from "../hooks/useInGameTime";
import useInGameLogs, { Log } from "../hooks/useInGameLogs";

interface TimeContextType {
  time: number;
  setPlaySpeed(speed: number): void;
  addTime(seconds: number): void;
}

interface LogContextType {
  logs: Log[];
  addLog(text: string, inGameTime: number, durationId?: number, eventId?: number): void;
}

export const TimeContext = createContext<TimeContextType>({} as TimeContextType);
export const LogContext = createContext<LogContextType>({} as LogContextType);

interface Props {
  children: React.ReactNode;
}
function AppContextProvider({ children }: Props) {
  const [time, setPlaySpeed, addTime] = useInGameTime();
  const [logs, addLog] = useInGameLogs();

  return (
    <TimeContext.Provider value={{ time, setPlaySpeed, addTime }}>
      <LogContext.Provider value={{ logs, addLog }}>
        {children}
      </LogContext.Provider>
    </TimeContext.Provider>
  );
}

export default AppContextProvider;