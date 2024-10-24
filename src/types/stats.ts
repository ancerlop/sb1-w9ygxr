export interface FeedbackGessanStats {
  total: number;
  today: number;
  this_week: number;
}

export interface IABuilderStats {
  total: number;
  today: number;
  this_week: number;
}

export interface DashboardData {
  today_feedback: number;
  week_feedback: number;
  total_feedback: number;
  today_iabuilder: number;
  week_iabuilder: number;
  total_iabuilder: number;
  matching_files: string[];
}