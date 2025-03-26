import { IconType } from "react-icons";

import {
  HiChevronUp,
  HiChevronDown,
  HiChevronRight,
  HiChevronLeft,
  HiArrowUpRight,
  HiOutlineArrowPath,
  HiCheck,
  HiMiniQuestionMarkCircle,
  HiMiniXMark,
  HiOutlineLink,
  HiExclamationTriangle,
  HiInformationCircle,
  HiExclamationCircle,
  HiCheckCircle,
  HiMiniGlobeAsiaAustralia,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiClipboard,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineLightBulb,
} from "react-icons/hi2";

import {
  HiSun,
  HiMoon,
} from "react-icons/hi";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
  PiHeartHalfFill,
} from "react-icons/pi";

import { FaDiscord, FaGithub, FaLinkedin, FaXTwitter, FaLaravel, FaReact, FaCss3Alt, FaDocker, } from "react-icons/fa6";
import { SiTypescript, SiPostgresql, SiHeroku, SiAwssecretsmanager } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { RiDoubleQuotesL } from "react-icons/ri";
export const iconLibrary: Record<string, IconType> = {
  chevronUp: HiChevronUp,
  chevronDown: HiChevronDown,
  chevronRight: HiChevronRight,
  chevronLeft: HiChevronLeft,
  refresh: HiOutlineArrowPath,
  arrowUpRight: HiArrowUpRight,
  check: HiCheck,
  arrowRight: HiArrowRight,
  helpCircle: HiMiniQuestionMarkCircle,
  infoCircle: HiInformationCircle,
  accentCircle: HiOutlineLightBulb,
  warningTriangle: HiExclamationTriangle,
  errorCircle: HiExclamationCircle,
  checkCircle: HiCheckCircle,
  email: HiEnvelope,
  globe: HiMiniGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  close: HiMiniXMark,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  secretpage: SiAwssecretsmanager,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaXTwitter,
  clipboard: HiClipboard,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  laravel: FaLaravel,
  react: FaReact,
  typescript: SiTypescript,
  css: FaCss3Alt,
  api: TbApi,
  sql: SiPostgresql,
  heroku: SiHeroku,
  docker: FaDocker,
  quote: RiDoubleQuotesL,
  themeParams: PiHeartHalfFill,
  light: HiSun,
  dark: HiMoon,
};
