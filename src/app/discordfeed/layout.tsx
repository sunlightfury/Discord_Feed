'use client';

import { AuthGuard } from 'src/auth/guard';
import DashboardLayout from 'src/layouts/dashboard';
import DiscordFeedLayout from 'src/layouts/discordfeed';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <AuthGuard>
      <DiscordFeedLayout>{children}</DiscordFeedLayout>
    </AuthGuard>
  );
}
