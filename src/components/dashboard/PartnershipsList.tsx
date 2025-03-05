import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Partnership } from '@/types';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';

interface PartnershipsListProps {
  partnerships: Partnership[];
}

export function PartnershipsList({ partnerships }: PartnershipsListProps) {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Strategic Partnerships</CardTitle>
        <CardDescription>
          Your active business partnerships
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {partnerships.map((partnership) => {
            const initials = partnership.partnerName
              .split(' ')
              .map((n) => n[0])
              .join('')
              .toUpperCase();

            return (
              <div key={partnership.id} className="flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={partnership.partnerLogo} alt={partnership.partnerName} />
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">
                      {partnership.partnerName}
                    </p>
                    <Badge variant={
                      partnership.status === 'Active' ? 'default' :
                      partnership.status === 'Pending' ? 'outline' : 'secondary'
                    }>
                      {partnership.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {partnership.partnershipType} Partnership
                  </p>
                </div>
                <div className="ml-auto text-sm text-muted-foreground">
                  {partnership.endDate ? 
                    `Expires: ${format(partnership.endDate, 'MMM dd, yyyy')}` : 
                    `Since: ${format(partnership.startDate, 'MMM dd, yyyy')}`
                  }
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}