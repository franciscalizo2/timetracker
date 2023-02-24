export const getPathName = (path: string, startPath: string) => {
  return path.split(startPath)[1];
};
