/**
 * Central icon registry.
 *
 * This is the ONLY file in the app that imports the icon library
 * (lucide-react) directly. Every page/component should import icons
 * from here instead, e.g.:
 *
 *   import { HomeIcon, SearchIcon } from "../components/icons";
 *
 * Why: keeps icon choices consistent across the app, makes it trivial
 * to swap the underlying icon library later (only this file changes),
 * and keeps pages free of third-party icon imports.
 */
import {
  Home,
  MapPin,
  FolderKanban,
  Users,
  MessageSquare,
  Wallet,
  BarChart3,
  Timer,
  UserCog,
  ClipboardList,
  Menu,
  Search,
  Bell,
  Info,
  DollarSign,
  Star,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  MoreVertical,
  Flag,
  Plus,
  Check,
  SlidersHorizontal,
  PlusCircle,
} from "lucide-react";

// Sidebar nav
export const DashboardIcon = Home;
export const MyJobsIcon = MapPin;
export const MyProjectsIcon = FolderKanban;
export const EngineerIcon = Users;
export const MessagesIcon = MessageSquare;
export const FundsIcon = Wallet;
export const ReportingIcon = BarChart3;
export const TimeManagementIcon = Timer;
export const ManageUsersIcon = UserCog;
export const CustomFieldIcon = ClipboardList;
export const CreateJobIcon = Plus;

// Chrome / top bar
export const MenuIcon = Menu;
export const SearchIcon = Search;
export const BellIcon = Bell;

// Panels
export const InfoIcon = Info;
export const DollarIcon = DollarSign;
export const StarIcon = Star;

// Navigation / pagination
export const ChevronLeftIcon = ChevronLeft;
export const ChevronRightIcon = ChevronRight;
export const ChevronDownIcon = ChevronDown;
export const MoreVerticalIcon = MoreVertical;

// Misc
export const CountryFlagIcon = Flag;
export const CheckIcon = Check;
export const FilterIcon = SlidersHorizontal;
export const PlusCircleIcon = PlusCircle;
