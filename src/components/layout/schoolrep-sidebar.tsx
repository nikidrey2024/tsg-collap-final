
'use client';

import {
  LayoutDashboard,
  Settings,
  GraduationCap,
  ClipboardList,
  FileText,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

export function SchoolRepSidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/schoolrep', icon: LayoutDashboard, label: 'Dashboard' },
    { href: '/schoolrep/applications', icon: FileText, label: 'Applications' },
    { href: '/schoolrep/programs', icon: ClipboardList, label: 'Programs' },
    { href: '/schoolrep/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          href="/schoolrep"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <GraduationCap className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">COLLAPP</span>
        </Link>
        <TooltipProvider>
            {navItems.map((item) => (
                <Tooltip key={item.href}>
                    <TooltipTrigger asChild>
                    <Link
                        href={item.href}
                        className={cn(
                            'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8',
                             (pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/schoolrep')) && 'bg-accent text-accent-foreground'
                        )}
                    >
                        <item.icon className="h-5 w-5" />
                        <span className="sr-only">{item.label}</span>
                    </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">{item.label}</TooltipContent>
                </Tooltip>
            ))}
        </TooltipProvider>
      </nav>
    </aside>
  );
}
