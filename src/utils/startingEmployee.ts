interface Props {
  id: number;
  userCode: string;
}

export interface UserProps extends Props {}
export const StaticEmployees: Props[] = [
  { id: 1, userCode: "XAAA" },
  { id: 2, userCode: "001AA" },
];
