import SERVICES, { IServiceProps } from "./serviceDummyData";

import { TColor } from "@/common/types/color-type";
import { StaticImageData } from "next/image";

export interface IUserProps {
  id: string;
  username: string;
  name: string;
  surname: string;
  position: string;
  email?: string;
  src: string | StaticImageData;
  isOnline: boolean;
  isReply?: boolean;
  color: TColor;
  fullImage?: string | StaticImageData;
  services?: IServiceProps[];
  password: string;
}

const john: IUserProps = {
  id: "1",
  username: "john",
  name: "John",
  surname: "Doe",
  position: "CEO, Founder",
  email: "john@omtanke.studio",
  src: "/img/wanna/wanna1.png",
  isOnline: true,
  isReply: true,
  color: "primary",
  services: [SERVICES.SURFING, SERVICES.KITE_SURFING, SERVICES.TENNIS],
  password: "@ABC123",
};

const grace: IUserProps = {
  id: "2",
  username: "grace",
  name: "Grace",
  surname: "Buckland",
  position: "Staff",
  email: "grace@omtanke.studio",
  src: "/img/wanna/wanna2.png",
  isOnline: true,
  color: "warning",
  services: [
    SERVICES.SNOWBOARDING,
    SERVICES.ICE_SKATING,
    SERVICES.KITE_SURFING,
  ],
  password: "@ABC123",
};

const jane: IUserProps = {
  id: "3",
  username: "jane",
  name: "Jane",
  surname: "Lee",
  position: "Staff",
  email: "jane@omtanke.studio",
  src: "/img/wanna/wanna3.png",
  isOnline: true,
  color: "secondary",
  services: [SERVICES.YOGA, SERVICES.HANDBALL, SERVICES.CRICKET],
  password: "@ABC123",
};

const ryan: IUserProps = {
  id: "4",
  username: "ryan",
  name: "Ryan",
  surname: "McGrath",
  position: "Worker",
  email: "ryan@omtanke.studio",
  src: "/img/wanna/wanna4.png",
  isOnline: false,
  color: "info",
  services: [SERVICES.HIKING, SERVICES.FOOTBALL, SERVICES.HANDBALL],
  password: "@ABC123",
};

const ella: IUserProps = {
  id: "5",
  username: "ella",
  name: "Ella",
  surname: "Oliver",
  position: "Worker",
  email: "ella@omtanke.studio",
  src: "/img/wanna/wanna5.png",
  isOnline: false,
  color: "success",
  services: [
    SERVICES.ICE_SKATING,
    SERVICES.TENNIS,
    SERVICES.SNOWBOARDING,
    SERVICES.YOGA,
  ],
  password: "@ABC123",
};

const chloe: IUserProps = {
  id: "6",
  username: "chloe",
  name: "Chloe",
  surname: "Walker",
  position: "Staff",
  email: "chloe@omtanke.studio",
  src: "/img/wanna/wanna6.png",
  isOnline: true,
  color: "warning",
  services: [SERVICES.VOLLEYBALL, SERVICES.CRICKET],
  password: "@ABC123",
};

const sam: IUserProps = {
  id: "7",
  username: "sam",
  name: "Sam",
  surname: "Roberts",
  position: "Worker",
  email: "sam@omtanke.studio",
  src: "/img/wanna/wanna7.png",
  isOnline: false,
  color: "danger",
  fullImage: "/img/wanna/landing1.png",
  password: "@ABC123",
};

const USERS: { [key: string]: IUserProps } = {
  JOHN: john,
  GRACE: grace,
  JANE: jane,
  RYAN: ryan,
  ELLA: ella,
  CHLOE: chloe,
  SAM: sam,
};

export function getUserDataWithUsername(username: string): IUserProps {
  // @ts-ignore
  return USERS[
    Object.keys(USERS).filter(
      (f) => USERS[f].username.toString() === username
    )[0]
  ];
}

export function getUserDataWithId(id: string): IUserProps {
  // @ts-ignore
  return USERS[
    Object.keys(USERS).filter(
      (f) => USERS[f].id.toString() === id.toString()
    )[0]
  ];
}

export default USERS;
