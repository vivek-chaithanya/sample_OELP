import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useRole } from '@/contexts/RoleContext';
import { UserRole } from '@/types/roles';

const ROLES: UserRole[] = [
  'SuperAdmin',
  'Agronomist', 
  'Analytics',
  'Business',
  'Development',
  'Manager',
  'Support'
];

export default function RoleSwitcher() {
  const { currentRole, setCurrentRole } = useRole();

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-muted-foreground">Role:</span>
      <Select value={currentRole} onValueChange={setCurrentRole}>
        <SelectTrigger className="w-32">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {ROLES.map((role) => (
            <SelectItem key={role} value={role}>
              {role}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}