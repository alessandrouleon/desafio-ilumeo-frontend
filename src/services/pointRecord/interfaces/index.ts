
export interface PointRecordProps {
    id: string;
    userCode: string;
    createdAt: string;
    workedHours: string;
    finishedAt: string ;
  }
  
  export interface GetUserCodeResponse {
    pointRecords: PointRecordProps[];
    total: number;
    currentPage: number;
    nextPage: boolean;
    prevPage: boolean;
    lastPage: number;
  }
  