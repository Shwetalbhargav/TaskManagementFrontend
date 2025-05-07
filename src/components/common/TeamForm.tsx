'use client';
import { useState } from 'react';
import useTeams from '@/components/hooks/useTeams';

export default function TeamForm({ onSuccess }) {
  const { createTeams } = useTeams();
  const [team, setTeam] = useState({ name: '', members: [] });
  const [member, setMember] = useState({ user: '', role: 'user' });

  const addMember = () => {
    setTeam((prev) => ({ ...prev, members: [...prev.members, member] }));
    setMember({ user: '', role: 'user' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTeams(team);
    onSuccess?.();
    setTeam({ name: '', members: [] });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input className="input" placeholder="Team Name" value={team.name} onChange={(e) => setTeam({ ...team, name: e.target.value })} />
      <div className="flex gap-2">
        <input className="input" placeholder="User ID" value={member.user} onChange={(e) => setMember({ ...member, user: e.target.value })} />
        <select className="input" value={member.role} onChange={(e) => setMember({ ...member, role: e.target.value })}>
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
          <option value="user">User</option>
        </select>
        <button type="button" onClick={addMember} className="btn">Add</button>
      </div>
      <button type="submit" className="btn">Create Team</button>
    </form>
  );
}
