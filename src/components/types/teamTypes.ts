export type UserRole = 'admin' | 'manager' | 'user';

export interface TeamMember {
  user: string;
  role: UserRole;
}

export interface Team {
  name: string;
  members: TeamMember[];
}
