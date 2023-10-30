import { useMemo } from "react";
import { IPerson } from "./interface";

export const personInfo: IPerson = {
  id: "1",
  name: "张三",
  age: 26,
  height: 185,
  weight: 80,
  level: "博士研究生",
  maritalStatus: "未婚",
  income: 30000,
  birthplace: "四川省成都市高新区天府四街02001号",
  love: ["游戏", "音乐", "篮球", "代码"],
  fatherName: "王二",
  fatherAge: 50,
  fatherProfession: "农民",
  motherName: "刘二",
  motherAge: 48,
  motherProfession: "农民",
};

export function usePersonInfoList(rowCount?: number) {
  const length = rowCount || 5;

  const list = useMemo(() => {
    const returnAllPersonInfos = [];
    for (let i = 0; i <= length; i = i + 1) {
      returnAllPersonInfos.push({
        ...personInfo,
        id: i.toString(),
        name: `张三${i}`,
      } as IPerson);
    }
    return returnAllPersonInfos;
  }, []);

  return list || [];
}
