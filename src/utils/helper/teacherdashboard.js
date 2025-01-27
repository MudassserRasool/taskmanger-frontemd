function formatClassAverageData(input) {
  const data = input?.map((item) => item.averageScore);
  return [
    {
      name: 'Average',
      data: data || [],
    },
  ];
}

export { formatClassAverageData };
