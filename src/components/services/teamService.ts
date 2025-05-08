import axios from "axios";
import { Team, TeamMember } from "@/components/types/teamTypes";

const API = process.env.NEXT_PUBLIC_API_URL;

export const createTeam = async (teamData: Team): Promise<Team> => {
  const res = await axios.post(`${API}/teams/create`, teamData);
  return res.data;
};

export const getTeams = async () => {
  const res = await axios.get(`${API}/teams`);
  return res.data;
};


export const updateTeam = async (id: string, data: any) => {
  const res = await axios.put(`${API}/teams/${id}`, data);
  return res.data;
};

export const deleteTeam = async (id: string) => {
  const res = await axios.delete(`${API}/teams/${id}`);
  return res.data;
};

export const updateTeamMembers = async (teamId: string, members: TeamMember[]): Promise<Team> => {
  const res = await axios.put(`${API}/teams/${teamId}/members`, { members });
  return res.data;
};

export const assignTaskToTeam = async (teamId: string, taskData: any): Promise<any> => {
  const res = await axios.post(`${API}/teams/${teamId}/assign-task`, { ...taskData, teamId });
  return res.data;
};


