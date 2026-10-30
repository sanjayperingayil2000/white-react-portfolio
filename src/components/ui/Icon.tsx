import {
  Award,
  BadgeCheck,
  Briefcase,
  Calendar,
  CircleCheck,
  Code,
  FileText,
  GraduationCap,
  Headphones,
  House,
  Image,
  Languages,
  LayoutGrid,
  Mail,
  MapPin,
  MessageSquare,
  Milestone,
  PenTool,
  ScrollText,
  User,
  type LucideProps,
} from "lucide-react";
import type { IconName } from "@/types/content";

const icons = {
  home: House,
  user: User,
  file: FileText,
  briefcase: Briefcase,
  image: Image,
  message: MessageSquare,
  award: Award,
  headphones: Headphones,
  "layout-grid": LayoutGrid,
  code: Code,
  "pen-tool": PenTool,
  "check-circle": CircleCheck,
  "graduation-cap": GraduationCap,
  calendar: Calendar,
  mail: Mail,
  "map-pin": MapPin,
  languages: Languages,
  "badge-check": BadgeCheck,
  milestone: Milestone,
  "scroll-text": ScrollText,
} satisfies Record<IconName, React.ComponentType<LucideProps>>;

type IconProps = LucideProps & { name: IconName };

/** Content-driven icon: content files name an icon, this maps it to lucide. */
export function Icon({ name, ...props }: IconProps) {
  const Component = icons[name];
  return <Component aria-hidden="true" strokeWidth={1.5} {...props} />;
}
