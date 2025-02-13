import { FC, memo } from "react";
import SearchIcon from "@/icons/search.svg";
import MarkerIcon from "@/icons/marker.svg";
import PhoneIcon from "@/icons/phone.svg";
import EmailIcon from "@/icons/email.svg";
import EyeIcon from "@/icons/eye.svg";
import PersonIcon from "@/icons/person.svg";
import HamburguerIcon from "@/icons/hamburguer.svg";
import CloseIcon from "@/icons/close.svg";
import Agreement from "@/icons/agreement.svg";
import FacebookIcon from "@/icons/Facebook.svg";
import InstagramIcon from "@/icons/Instagram.svg";
import TikTokIcon from "@/icons/TikTok.svg";
import YoutubeIcon from "@/icons/Youtube.svg";
import SortIcon from "@/icons/sort.svg";
import buscarTrabajo from "@/icons/buscarTrabajo.svg";
import student from "@/icons/student.svg";
import work from "@/icons/work.svg";
import Whatsapp from "@/icons/Whatsapp.svg";
import MailUteg from "@/icons/icono-mail.svg";
import EventosInstitucionales from "@/icons/eventos-institucionales.svg";
import X from "@/icons/X.svg";

const iconTypes: any = {
  search: SearchIcon,
  marker: MarkerIcon,
  phone: PhoneIcon,
  email: EmailIcon,
  eye: EyeIcon,
  person: PersonIcon,
  hamburguer: HamburguerIcon,
  close: CloseIcon,
  facebook: FacebookIcon,
  tiktok: TikTokIcon,
  youtube: YoutubeIcon,
  instagram: InstagramIcon,
  agreement: Agreement,
  sort: SortIcon,
  buscarempleo: buscarTrabajo,
  studentIcon: student,
  workIcon: work,
  whatsapp: Whatsapp,
  mailuteg: MailUteg,
  utc_eventos_institucionales: EventosInstitucionales,
  X: X
};

const IconComponent: FC<any> = memo(({ name, ...props }: any) => {
  const Icon = iconTypes?.[name];
  return Icon ? <Icon {...props} /> : null;
});

export default IconComponent