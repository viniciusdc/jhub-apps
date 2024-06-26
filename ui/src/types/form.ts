import { SharePermissions } from './api';

export interface FormInput {
  username: string;
  password: string;
}

export interface AppFormInput {
  conda_env?: string;
  custom_command?: string;
  description?: string;
  display_name: string;
  env?: string;
  filepath?: string;
  framework: string;
  is_public: boolean;
  keep_alive: boolean;
  jhub_app: boolean;
  profile?: string;
  thumbnail?: string;
  share_with: SharePermissions;
}

export interface AppSharingItem {
  name: string;
  type: 'user' | 'group';
}
