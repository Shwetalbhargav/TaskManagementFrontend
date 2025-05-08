'use client';

import { useState } from 'react';
import * as teamService from '@/components/services/teamService';

export default function useTeams() {
  const [teams, setTeams] = useState([]);

  const fetchTeams = async () => {
    const data = await teamService.getTeams();
    setTeams(data);
  };

  const createTeams = async (team: any) => {
    await teamService.createTeam(team);
    await fetchTeams();
  };

  const updateTeam = async (id: string, team: any) => {
    await teamService.updateTeam(id, team);
    await fetchTeams();
  };

  const deleteTeam = async (id: string) => {
    await teamService.deleteTeam(id);
    await fetchTeams();
  };

  
  const updateTeamMembers = async (id: string, members: any[]) => {
    await teamService.updateTeamMembers(id, members);
    await fetchTeams();
  };

  
  const assignTaskToTeam = async (teamId: string, taskData: any) => {
    await teamService.assignTaskToTeam(teamId, taskData);
  };

  return {
    teams,
    fetchTeams,
    createTeams,
    updateTeam,
    deleteTeam,
    updateTeamMembers,
    assignTaskToTeam,
  };
}
