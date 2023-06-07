import React from "react";
import Link from "next/link";

interface ResumeProps {
  jobTitle: string;
  companyName: string;
  companyWebsite?: string;
  location: string;
  arrangement: "Remoto" | "Presencial" | "Híbrido";
  startMonth: string;
  startYear: number;
  isCurrentJob: boolean;
  endMonth?: string;
  endYear?: number;
}

export const JobExperience: React.FC<ResumeProps> = ({
  jobTitle,
  companyName,
  companyWebsite,
  location,
  arrangement,
  startMonth,
  startYear,
  isCurrentJob,
  endMonth,
  endYear,
}) => {
  const getCurrentTime = (): Date => {
    const currentTime = Date.now();
    return new Date(currentTime);
  };

  const getMonthName = (monthIndex: number): string => {
    const monthNames: string[] = [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ];
    return monthNames[monthIndex];
  };

  const calculateDuration = (): string => {
    const startDate = new Date(startYear, getMonthIndex(startMonth), 1);
    const endDate = isCurrentJob
      ? getCurrentTime()
      : endMonth && endYear
      ? new Date(endYear, getMonthIndex(endMonth), 1)
      : null;

    if (endDate) {
      const diffInMonths =
        (endDate.getFullYear() - startDate.getFullYear()) * 12 +
        (endDate.getMonth() - startDate.getMonth());
      const years = Math.floor(diffInMonths / 12);
      const months = diffInMonths % 12;

      const durationParts: string[] = [];
      if (years > 0) {
        durationParts.push(`${years} ano${years > 1 ? "s" : ""}`);
      }
      if (months > 0) {
        const pluralizedMonths = months !== 1 ? "meses" : "mês";
        durationParts.push(`${months} ${pluralizedMonths}`);
      }

      return durationParts.join(" e ");
    }

    return "Momento";
  };

  const getMonthIndex = (month: string): number => {
    const monthIndexMap: Record<string, number> = {
      Jan: 0,
      Fev: 1,
      Mar: 2,
      Abr: 3,
      Mai: 4,
      Jun: 5,
      Jul: 6,
      Ago: 7,
      Set: 8,
      Out: 9,
      Nov: 10,
      Dez: 11,
    };
    return monthIndexMap[month];
  };

  const duration = calculateDuration();
  const endDateString = isCurrentJob
    ? `${getMonthName(
        getCurrentTime().getMonth()
      )} de ${getCurrentTime().getFullYear()}`
    : endMonth && endYear
    ? `${endMonth} de ${endYear}`
    : "";

  const shouldDisplayDuration =
    duration !== "Momento" && !duration.includes("-");

  return (
    <div>
      <h3 className="font-bold text-paynes-gray font-roboto">{jobTitle}</h3>
      {companyWebsite ? (
        <p className="flex text-paynes-gray font-roboto">
          <Link
            href={companyWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="underline cursor-pointer"
          >
            {companyName}
          </Link>
          &nbsp;&bull;&nbsp;{location} - {arrangement}
        </p>
      ) : (
        <p className="flex text-paynes-gray font-roboto">
          {companyName}&nbsp;&bull;&nbsp;{location} - {arrangement}
        </p>
      )}
      {shouldDisplayDuration && (
        <p className="flex text-paynes-gray font-roboto">
          {startMonth} de {startYear} &ndash; {endDateString} &bull; {duration}
        </p>
      )}
    </div>
  );
};
