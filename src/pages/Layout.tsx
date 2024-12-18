import React from 'react';
import { BookOpen, User, Settings, Map } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-white border-r">
        <div className="p-4">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-blue-500" />
            LearnHub
          </h1>
        </div>
        <nav className="mt-8">
          <a
            href="/"
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            <User className="h-5 w-5" />
            Dashboard
          </a>
          <a
            href="/roadmap"
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            <Map className="h-5 w-5" />
            Roadmap
          </a>
          <a
            href="/profile"
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            <User className="h-5 w-5" />
            Profile
          </a>
          <a
            href="/admin"
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            <Settings className="h-5 w-5" />
            Admin
          </a>
        </nav>
      </aside>
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}