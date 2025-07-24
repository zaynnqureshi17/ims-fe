import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface UpdateQueryParamsProps {
  router: AppRouterInstance;
  basePath: string;
  queryParams: Record<string, string | undefined>;
}

export const updateQueryParams = ({
  router,
  basePath,
  queryParams,
}: UpdateQueryParamsProps) => {
  const params = new URLSearchParams();

  Object.entries(queryParams).forEach(([key, value]) => {
    if (value) params.set(key, value);
  });

  router.push(`${basePath}${params.toString() ? `?${params.toString()}` : ""}`);
};
