import React from "react";
import Link from "next/link";

interface AcadExperienceProps {
  courseTitle: string;
  institutionName: string;
  institutionWebsite: string;
  location: string;
  startMonth: string;
  startYear: number;
  endMonth: string;
  endYear: number;
}

export const AcadExperience: React.FC<AcadExperienceProps> = ({
  courseTitle,
  institutionName,
  institutionWebsite,
  location,
  startMonth,
  startYear,
  endMonth,
  endYear,
}) => {
  const calculateDuration = (): string => {
    const startDate = new Date(startYear, getMonthIndex(startMonth), 1);
    const endDate = new Date(endYear, getMonthIndex(endMonth), 1);

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
  };

  const getMonthIndex = (month: string): number => {
    const monthIndexMap: Record<string, number> = {
      jan: 0,
      fev: 1,
      mar: 2,
      abr: 3,
      mai: 4,
      jun: 5,
      jul: 6,
      ago: 7,
      set: 8,
      out: 9,
      nov: 10,
      dez: 11,
    };
    return monthIndexMap[month];
  };

  const duration = calculateDuration();
  const endDateString = `${endMonth} ${endYear}`;

  return (
    <div>
      <h3 className="font-bold text-paynes-gray font-roboto">{courseTitle}</h3>
      <p className="flex text-paynes-gray font-roboto">
        <Link
          href={institutionWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="underline cursor-pointer"
        >
          {institutionName}
        </Link>
        &nbsp;&bull;&nbsp;{location}
      </p>
      <p className="flex text-paynes-gray font-roboto">
        {startMonth} {startYear} &ndash; {endDateString} &bull; {duration}
      </p>
    </div>
  );
};
