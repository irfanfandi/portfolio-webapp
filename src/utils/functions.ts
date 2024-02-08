export const formatDisplayDate = (str: string) => {
  return new Intl.DateTimeFormat(["ban", "id"], {
    month: "long",
    year: "numeric",
  }).format(new Date(str));
};

export const delayFn = async (time: number) => {
  return new Promise((resolve, _) => {
    setTimeout(() => resolve(_), time);
  });
};
