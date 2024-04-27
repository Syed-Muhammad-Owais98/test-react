import { Entities } from "./data.ts";

export const getPermissionRole = (
  entity: Entities | undefined,
  permissions: Record<string, string>[] | undefined
) => {
  const permission = permissions?.find(
    (permission) => permission.entity === entity
  );
  const role = permission?.role;

  return role;
};
