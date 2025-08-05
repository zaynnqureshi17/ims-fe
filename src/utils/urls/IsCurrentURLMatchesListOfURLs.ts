/* eslint-disable @typescript-eslint/no-explicit-any */
export const IsCurrentURLMatchesListOfURLs = (
  currentPath: string,
  listOfRoutes: any[],
) => {
  return listOfRoutes.some((route) => {
    const normalizedRoute = route.replace(/:[a-zA-Z0-9_]+/, "");
    return currentPath.includes(normalizedRoute);
  });
};
