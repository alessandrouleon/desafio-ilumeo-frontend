import {  differenceInHours, differenceInMinutes } from "date-fns";
import { newDate } from "./date";

export function calculateCurrentTimeDifference(isoDate: string): string {
    const currentDate = newDate();
    const dateHora = new Date(isoDate);

    const hoursDifference = differenceInHours(currentDate, dateHora);
    const minutesDifference = differenceInMinutes(currentDate, dateHora) % 60;

    return `${hoursDifference}h ${minutesDifference}m`;
}
