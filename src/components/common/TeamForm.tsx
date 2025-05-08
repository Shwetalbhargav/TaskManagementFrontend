// TeamForm.tsx
'use client';
import { useEffect, useState } from 'react';
import useTeams from '@/components/hooks/useTeams';

interface TeamMember {
  user: string;
  role: 'admin' | 'manager' | 'user';
}

interface Team {
  name: string;
  members: TeamMember[];
}

interface TeamFormProps {
  onSuccess?: () => void;
  teamToEdit?: any;
}

export default function TeamForm({ onSuccess, teamToEdit }: TeamFormProps) {
  const { createTeams, updateTeam } = useTeams();
  const [team, setTeam] = useState<Team>({ name: '', members: [] });
  const [member, setMember] = useState<TeamMember>({ user: '', role: 'user' });

  useEffect(() => {
    if (teamToEdit) setTeam(teamToEdit);
  }, [teamToEdit]);

  const addMember = () => {
    setTeam((prev) => ({ ...prev, members: [...prev.members, member] }));
    setMember({ user: '', role: 'user' });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (teamToEdit?._id) {
      await updateTeam(teamToEdit._id, team);
    } else {
      await createTeams(team);
    }
    onSuccess?.();
    setTeam({ name: '', members: [] });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium mb-1">Team Name</label>
        <input
          className="w-full border rounded px-4 py-2"
          value={team.name}
          onChange={(e) => setTeam({ ...team, name: e.target.value })}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <input
          className="border rounded px-4 py-2"
          placeholder="User ID"
          value={member.user}
          onChange={(e) => setMember({ ...member, user: e.target.value })}
        />
        <select
          className="border rounded px-4 py-2"
          value={member.role}
          onChange={(e) => setMember({ ...member, role: e.target.value as TeamMember['role'] })}
        >
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
          <option value="user">User</option>
        </select>
        <button type="button" onClick={addMember} className="bg-gray-100 px-4 py-2 rounded">
          Add Member
        </button>
      </div>

      <div>
        <h3 className="text-sm font-semibold">Members:</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {team.members.map((m, idx) => (
            <li key={idx}>
              {m.user} ({m.role})
            </li>
          ))}
        </ul>
      </div>

      <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded shadow">
        {teamToEdit ? 'Update Team' : 'Create Team'}
      </button>
    </form>
  );
}
