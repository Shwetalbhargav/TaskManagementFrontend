import * as teamService from "../services/teamService";

const useTeams = () =>{
    const createTeams =  async(teamData) =>{
        return await teamService.createTeam(teamData);
    };

const updateMambers = async(teamId, members) =>{
    return await teamService.updateTeamMembers(teamId,members);
};

const assignTask = async(teamId,taskData ) =>{
    return await teamService.assignTaskToTeam(teamId,taskData);
};

return{
    useTeams,
    createTeams,
    updateMambers,
    assignTask
};
};

export default useTeams;