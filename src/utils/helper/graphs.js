export function processBarGraphData(barGraphData, selectedSubject) {
  let weeks;
  let highestTimeSpend = 0;
  const seriesData =
    barGraphData?.data?.map((subject) => {
      const resultData = subject?.result?.[0];

      weeks = resultData ? resultData.weeks.map((week) => week.week) : [];

      const data = resultData
        ? resultData.weeks.map((week) => week.totalTimeSpend)
        : [];
      const maxTimeSpend = Math.max(...data);

      if (maxTimeSpend > highestTimeSpend) {
        highestTimeSpend = maxTimeSpend;
      }
      return {
        name: selectedSubject || subject.subjectName,
        data,
      };
    }) || [];

  if (!selectedSubject && seriesData.length > 0) {
    const highestSubject = seriesData.reduce((prev, current) => {
      const prevMax = prev.totalTimeSpend
        ? Math.max(...prev.totalTimeSpend)
        : -Infinity;
      const currentMax = current.totalTimeSpend
        ? Math.max(...current.totalTimeSpend)
        : -Infinity;
      return prevMax > currentMax ? prev : current;
    }, seriesData[0]);

    seriesData.length = 0;
    seriesData.push(highestSubject);
  }

  return { seriesData, highestTimeSpend, weeks };
}
