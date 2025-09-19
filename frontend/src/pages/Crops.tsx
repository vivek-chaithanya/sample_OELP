import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRole } from '@/contexts/RoleContext';
import { Wheat, Droplets, Thermometer, Sun } from 'lucide-react';

const CROP_DATA = [
  {
    id: 1,
    name: 'Corn Field A',
    type: 'Corn',
    area: '125 acres',
    health: 'Excellent',
    healthScore: 95,
    planted: '2024-03-15',
    expectedHarvest: '2024-09-20',
    moisture: '68%',
    temperature: '24°C',
    sunlight: '8.5h/day',
    status: 'Growing'
  },
  {
    id: 2,
    name: 'Wheat Field B',
    type: 'Wheat',
    area: '89 acres',
    health: 'Good',
    healthScore: 82,
    planted: '2024-02-28',
    expectedHarvest: '2024-08-15',
    moisture: '45%',
    temperature: '22°C',
    sunlight: '9.2h/day',
    status: 'Flowering'
  },
  {
    id: 3,
    name: 'Soybean Field C',
    type: 'Soybean',
    area: '67 acres',
    health: 'Fair',
    healthScore: 71,
    planted: '2024-04-10',
    expectedHarvest: '2024-10-05',
    moisture: '52%',
    temperature: '26°C',
    sunlight: '7.8h/day',
    status: 'Vegetative'
  }
];

const getHealthColor = (health: string) => {
  switch (health) {
    case 'Excellent': return 'bg-success text-success-foreground';
    case 'Good': return 'bg-primary text-primary-foreground';
    case 'Fair': return 'bg-warning text-warning-foreground';
    default: return 'bg-destructive text-destructive-foreground';
  }
};

export default function Crops() {
  const { currentRole } = useRole();
  
  const isDetailedView = currentRole === 'Agronomist' || currentRole === 'SuperAdmin';

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Crop Management</h2>
        <p className="text-muted-foreground">
          {isDetailedView 
            ? 'Monitor and manage crop health, growth conditions, and field performance.'
            : 'Overview of crop fields and basic status information.'
          }
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CROP_DATA.map((crop) => (
          <Card key={crop.id} className="dashboard-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{crop.name}</CardTitle>
                <Wheat className="h-5 w-5 text-primary" />
              </div>
              <CardDescription>
                {crop.type} • {crop.area}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Health Score</span>
                <Badge className={getHealthColor(crop.health)}>
                  {crop.health} ({crop.healthScore}%)
                </Badge>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Status</span>
                  <span className="font-medium">{crop.status}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Planted</span>
                  <span>{new Date(crop.planted).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Harvest</span>
                  <span>{new Date(crop.expectedHarvest).toLocaleDateString()}</span>
                </div>
              </div>

              {isDetailedView && (
                <div className="pt-4 border-t space-y-3">
                  <div className="flex items-center gap-2">
                    <Droplets className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">Moisture: {crop.moisture}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Thermometer className="h-4 w-4 text-red-500" />
                    <span className="text-sm">Temperature: {crop.temperature}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sun className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">Sunlight: {crop.sunlight}</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {isDetailedView && (
        <Card>
          <CardHeader>
            <CardTitle>Field Management Actions</CardTitle>
            <CardDescription>Quick actions for crop management</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              <button className="p-4 rounded-lg border hover:bg-accent transition-colors text-left">
                <div className="font-medium">Schedule Irrigation</div>
                <div className="text-sm text-muted-foreground">Plan watering schedule</div>
              </button>
              <button className="p-4 rounded-lg border hover:bg-accent transition-colors text-left">
                <div className="font-medium">Apply Fertilizer</div>
                <div className="text-sm text-muted-foreground">Nutrient management</div>
              </button>
              <button className="p-4 rounded-lg border hover:bg-accent transition-colors text-left">
                <div className="font-medium">Pest Control</div>
                <div className="text-sm text-muted-foreground">Monitor and treat</div>
              </button>
              <button className="p-4 rounded-lg border hover:bg-accent transition-colors text-left">
                <div className="font-medium">Health Assessment</div>
                <div className="text-sm text-muted-foreground">Detailed crop analysis</div>
              </button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}