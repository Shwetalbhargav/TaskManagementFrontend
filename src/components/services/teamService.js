import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL;

export const createTeam = async(teamData) =>{
    const res = await axios.post(`${API}/teams/create`, teamData);
    return res.data;
};

export const updateTeamMembers = async(teamId, members) =>{
    const res = await axios.put(`${API}/teams/${teamId}/members`, {members});
    return res.data;
};

export const assignTaskToTeam = async(teamId, taskData) =>{
    const res = await axios.post(`${API}/teams/${teamId}/assign-task`, { ...taskData, teamId });
    return res.data;
};