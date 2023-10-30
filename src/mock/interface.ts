export interface IPersonBasicInfo {
  id: string;
  name: string;
  age: number;
  height: number;
  weight: number;
  level: string;
  maritalStatus: string;
  income: number;
  birthplace: string;
}

export interface IPersonOtherInfo {
  love?: string[];
  fatherName?: string;
  fatherAge?: number;
  fatherProfession?: string;
  motherName?: string;
  motherAge?: number;
  motherProfession?: string;
}

export interface IPerson extends IPersonOtherInfo, IPersonBasicInfo {}
