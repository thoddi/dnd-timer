
interface TimeUnit {
  name: string;
  seconds: number;
}
interface UnitsOfTime {
  [key: string]: TimeUnit;
  seconds: TimeUnit;
  minutes: TimeUnit;
  hours: TimeUnit;
  days: TimeUnit;
  months: TimeUnit;
  years: TimeUnit;
}

export const unitsOfTime: UnitsOfTime = {
  seconds: {
    name: 'sekúndur',
    seconds: 1,
  },
  minutes: {
    name: 'mínútur',
    seconds: 60,
  },
  hours: {
    name: 'klukkutímar',
    seconds: 3_600,
  },
  days: {
    name: 'dagar',
    seconds: 86_400,
  },
  months: {
    name: 'mánuðir',
    seconds: 2_592_000, // 30 dagar
  },
  years: {
    name: 'ár',
    seconds: 31_104_000,
  },
};