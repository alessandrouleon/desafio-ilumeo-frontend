import { api } from "../api";
import { GetUserCodeResponse, PointRecordProps } from "./interfaces";

export const registerUserCode = (userCode: string) => {
  return api.post("/pointRecords", { userCode });
};

export const getSinglePointByUserCode = async (userCode: string) => {
  const response = api.get<PointRecordProps>(
    `/pointRecords/singleCode/?userCode=${userCode}`
  );
  return response;
};

export const getAllPointByUserCode = async (userCode: string, page = 1) => {
  return await api.get<GetUserCodeResponse>(
    `/pointRecords/search/${page}?value=${userCode}`
  );
};

export const finishUserCode = async (userCode: string) => {

 const res = api.patch(`/pointRecords/finish/?userCode=${userCode}`);
 console.log("res::", res);
 return res;
};
