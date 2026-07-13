import { DAY_KEYS, HOURS, type DayKey } from "./constants";

const DAY_MAP: DayKey[] = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

function parseTime(time: string): number {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

export function getTodayKey(date = new Date()): DayKey {
  return DAY_MAP[date.getDay()];
}

export function isOpenNow(date = new Date()): boolean {
  const today = getTodayKey(date);
  const schedule = HOURS[today];
  if (!schedule.open || !schedule.close) return false;

  const now = date.getHours() * 60 + date.getMinutes();
  const open = parseTime(schedule.open);
  const close = parseTime(schedule.close);
  return now >= open && now < close;
}

export function getOpenStatus(date = new Date()) {
  const today = getTodayKey(date);
  const schedule = HOURS[today];
  const open = isOpenNow(date);

  if (open) {
    return { status: "open" as const, message: schedule.close };
  }

  if (schedule.open) {
    const now = date.getHours() * 60 + date.getMinutes();
    const openTime = parseTime(schedule.open);
    if (now < openTime) {
      return { status: "opens_today" as const, message: schedule.open };
    }
  }

  // Find next open day
  for (let i = 1; i <= 7; i++) {
    const nextDay = DAY_MAP[(date.getDay() + i) % 7];
    const nextSchedule = HOURS[nextDay];
    if (nextSchedule.open) {
      return { status: "closed" as const, message: nextSchedule.open, day: nextDay };
    }
  }

  return { status: "closed" as const, message: null, day: null };
}

export function getPopularTimes(): number[] {
  // Simulated busy hours (0-100 scale) for Wed-Sun
  return [15, 20, 35, 55, 75, 90, 85, 70, 50, 30, 20, 10];
}

export function formatHoursForDisplay(locale: "lt" | "en") {
  const labels = locale === "lt"
    ? { closed: "Uždaryta", weekdays: "Pr–An", wedThu: "Tr–Kt", friSat: "Pn–Št", sun: "Sk" }
    : { closed: "Closed", weekdays: "Mon–Tue", wedThu: "Wed–Thu", friSat: "Fri–Sat", sun: "Sun" };

  return [
    { label: labels.weekdays, hours: labels.closed },
    { label: labels.wedThu, hours: "12:00–22:00" },
    { label: labels.friSat, hours: "12:00–23:00" },
    { label: labels.sun, hours: "12:00–22:00" },
  ];
}
