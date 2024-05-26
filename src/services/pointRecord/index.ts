import { api } from "../api";
import { GetUserCodeResponse } from "./interfaces";

export const registerUserCode = (userCode: string) => {
  return api.post("/pointRecords", { userCode });
};

// export const getSinglePointByUserCode = async (userCode: string) => {
//   return api.get<PointRecordProps>(
//     `/pointRecords/singleCode/?value=${userCode}`
//   );
// };

export const getAllPointByUserCode = async (userCode: string, page = 1) => {
  return api.get<GetUserCodeResponse>(
    `/pointRecords/search/${page}?value=${userCode}`
  );
};
