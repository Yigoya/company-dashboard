import { CompanyProfileForm } from '@/components/forms/CompanyProfileForm';

export function CompanyProfile() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Company Profile</h2>
        <p className="text-muted-foreground">
          Manage your company information and settings
        </p>
      </div>

      <CompanyProfileForm />
    </div>
  );
}