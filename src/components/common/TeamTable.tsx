'use client';
import { useState } from 'react';
import useTeams from '@/components/hooks/useTeams';
import TeamForm from './TeamForm';
import AssignTaskModal from './AssignTaskModal'; // ✅ Ensure this path matches your file structure

export default function TeamTable() {
  const { teams, fetchTeams, deleteTeam } = useTeams();
  const [editingTeam, setEditingTeam] = useState<any | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<any | null>(null);

  return (
    <div className="space-y-6">
      {/* Assign Task Modal */}
      {selectedTeam && (
        <AssignTaskModal
          teamId={selectedTeam._id}
          teamName={selectedTeam.name}
          onClose={() => setSelectedTeam(null)}
          onSuccess={fetchTeams}
        />
      )}

      {/* Edit Form */}
      {editingTeam && (
        <div className="border p-4 rounded bg-white shadow">
          <h3 className="text-lg font-semibold mb-2">Edit Team</h3>
          <TeamForm
            teamToEdit={editingTeam}
            onSuccess={() => {
              fetchTeams();
              setEditingTeam(null);
            }}
          />
        </div>
      )}

      {/* Team Table */}
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">Team Name</th>
            <th className="p-2 border">Members</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team._id}>
              <td className="p-2 border">{team.name}</td>
              <td className="p-2 border">
                <ul className="list-disc ml-4">
                  {team.members.map((m: any, idx: number) => (
                    <li key={idx}>{m.user} ({m.role})</li>
                  ))}
                </ul>
              </td>
              <td className="p-2 border space-x-2">
                <button
                  onClick={() => setEditingTeam(team)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTeam(team._id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
                <button
                  onClick={() => setSelectedTeam(team)}
                  className="text-green-600 hover:underline"
                >
                  Assign Task
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
