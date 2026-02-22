import { Search, Menu } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Header = ({ searchText, onSearchChange }) => {
  return (
    <header className="sticky top-0 z-20 flex h-14 w-full items-center justify-between bg-primary px-4 shadow-md sm:px-6">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="text-primary-foreground hover:bg-primary-foreground/10" />
        <h1 className="text-lg font-bold tracking-tight text-primary-foreground">
          Staff Wall
        </h1>
      </div>
      <div className="relative w-48 sm:w-64">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary-foreground/60" />
        <input
          type="text"
          placeholder="Quick search…"
          value={searchText}
          onChange={(e) => onSearchChange(e.target.value)}
          className="flex h-9 w-full rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 pl-9 pr-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/30"
        />
      </div>
    </header>
  );
};

export default Header;
