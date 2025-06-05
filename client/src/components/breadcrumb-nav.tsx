import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="container mx-auto">
        <nav className="flex items-center space-x-2 text-sm">
          {items.map((item, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
              )}
              {index === items.length - 1 ? (
                <span className="text-gray-600 font-medium">{item.label}</span>
              ) : (
                <Link href={item.href}>
                  <a className="text-ocean-blue hover:underline">
                    {item.label}
                  </a>
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
