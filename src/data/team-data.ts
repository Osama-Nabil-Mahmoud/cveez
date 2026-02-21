
/**
 * @fileOverview بيانات أعضاء فريق CVEEEZ المحدثة (16 عضواً)
 */

export interface TeamMember {
  id: string;
  name: {
    ar: string;
    en: string;
  };
  roleKey: string;
  initials: string;
  description?: {
    ar: string;
    en: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: { ar: "خليفة محمد خليفة", en: "Khalifa Mohamed Khalifa" },
    roleKey: "team.roles.ceo",
    initials: "KM"
  },
  {
    id: "2",
    name: { ar: "هدير محفوظ", en: "Hadeer Mahfouz" },
    roleKey: "team.roles.deputy_ceo",
    initials: "HM"
  },
  {
    id: "3",
    name: { ar: "محمد السيد", en: "Mohamed El-Sayed" },
    roleKey: "team.roles.hr",
    initials: "MS"
  },
  {
    id: "4",
    name: { ar: "مصطفي دياب", en: "Mostafa Diab" },
    roleKey: "team.roles.dev_manager",
    initials: "MD"
  },
  {
    id: "5",
    name: { ar: "محمود السمعوني", en: "Mahmoud El-Samaouni" },
    roleKey: "team.roles.design_lead",
    initials: "ME"
  },
  {
    id: "6",
    name: { ar: "نهي عبد الرحمن", en: "Noha Abdel Rahman" },
    roleKey: "team.roles.moderator_lead",
    initials: "NA",
    description: {
      ar: "نُهى تُمثّل قائد الفريق في تنظيم ومتابعة كافة أنشطة",
      en: "Team leader in organizing and following up all activities"
    }
  },
  {
    id: "7",
    name: { ar: "محمد السيد يوسف", en: "Mohamed El-Sayed Youssef" },
    roleKey: "team.roles.expert_designer",
    initials: "MY"
  },
  {
    id: "8",
    name: { ar: "ريم ناصر", en: "Reem Nasser" },
    roleKey: "team.roles.pr_expert",
    initials: "RN"
  },
  {
    id: "9",
    name: { ar: "سارة ناصر", en: "Sarah Nasser" },
    roleKey: "team.roles.expert_designer_v2",
    initials: "SN"
  },
  {
    id: "10",
    name: { ar: "عمر عجمي", en: "Omar Ajami" },
    roleKey: "team.roles.cv_designer",
    initials: "OA"
  },
  {
    id: "11",
    name: { ar: "أميرة إبراهيم", en: "Amira Ibrahim" },
    roleKey: "team.roles.cv_designer_v2",
    initials: "AI"
  },
  {
    id: "12",
    name: { ar: "نورة جاد", en: "Noura Gad" },
    roleKey: "team.roles.customer_service",
    initials: "NG"
  },
  {
    id: "13",
    name: { ar: "علي ناصر", en: "Ali Nasser" },
    roleKey: "team.roles.solutions_expert",
    initials: "AN"
  },
  {
    id: "14",
    name: { ar: "السمان محمود", en: "El-Samman Mahmoud" },
    roleKey: "team.roles.linkedin_specialist",
    initials: "SM"
  },
  {
    id: "15",
    name: { ar: "رضوي أمين", en: "Radwa Amin" },
    roleKey: "team.roles.cv_designer_v3",
    initials: "RA"
  },
  {
    id: "16",
    name: { ar: "رؤي جمال", en: "Ruaa Gamal" },
    roleKey: "team.roles.ui_ux",
    initials: "RG"
  }
];
