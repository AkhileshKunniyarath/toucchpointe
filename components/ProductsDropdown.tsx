import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronDown, Zap, Rocket, Brain, LucideIcon } from "lucide-react";

interface ProductItem {
  name: string;
  description: string;
  path: string;
  icon: LucideIcon;
}

interface ProductsDropdownProps {
  items?: ProductItem[];
  onItemClick?: () => void;
  variant?: "desktop" | "mobile";
}

const defaultItems: ProductItem[] = [
  {
    name: "Touchpointe OS",
    description: "Unified operating system",
    path: "/touchpointe-os",
    icon: Zap,
  },
  {
    name: "Dynamite Framework",
    description: "Powerful development platform",
    path: "/dynamite",
    icon: Rocket,
  },
  {
    name: "Intelligent Agent",
    description: "Advanced AI automation",
    path: "/hattie-ai",
    icon: Brain,
  },
];

export const ProductsDropdown: React.FC<ProductsDropdownProps> = ({
  items = defaultItems,
  onItemClick,
  variant = "desktop",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdown when clicking outside (desktop only)
  useEffect(() => {
    if (variant !== "desktop") return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [variant]);

  const isOnProductPath = items.some((item) => location.pathname === item.path);

  const handleItemClick = () => {
    setIsOpen(false);
    onItemClick?.();
  };

  if (variant === "mobile") {
    return (
      <div className="w-full max-w-sm">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl font-semibold text-gray-200 hover:text-white transition-colors tracking-wide flex items-center gap-2 justify-center w-full"
        >
          Products
          <ChevronDown
            className={cn(
              "w-5 h-5 transition-transform duration-300",
              isOpen ? "rotate-180" : "",
            )}
          />
        </button>

        {/* Mobile Dropdown Panel */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 mt-4",
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="space-y-3 bg-white/5 rounded-xl p-4 border border-white/10">
            {items.map((item) => {
              const ItemIcon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleItemClick}
                  className="flex items-start gap-3 p-4 rounded-lg bg-white/5 hover:bg-purple-500/10 border border-white/5 hover:border-purple-400/30 transition-all duration-300 group"
                >
                  <div className="p-2.5 rounded-lg bg-white/10 group-hover:bg-purple-500/20 transition-all duration-300">
                    <ItemIcon className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Desktop variant
  return (
    <div className="relative group" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative text-sm font-medium tracking-wide transition-all duration-200 group flex items-center gap-1.5",
          isOnProductPath ? "text-white" : "text-gray-400",
          "hover:text-white",
        )}
      >
        Products
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform duration-300",
            isOpen ? "rotate-180" : "",
          )}
        />
        {/* Active / hover underline */}
        <span
          className={cn(
            "absolute -bottom-1 left-0 h-[2px] rounded-full transition-all duration-300",
            "bg-gradient-to-r from-purple-400 to-pink-500",
            isOpen ? "w-full" : "w-0 group-hover:w-full",
          )}
        />
      </button>

      {/* Desktop Dropdown Panel */}
      <div
        className={cn(
          "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-96 rounded-xl",
          "bg-[#0a0a14]/95 backdrop-blur-xl border border-white/10",
          "shadow-2xl shadow-black/50",
          "transition-all duration-300 origin-top",
          isOpen
            ? "opacity-100 visible scale-y-100"
            : "opacity-0 invisible scale-y-95",
          "z-50",
        )}
      >
        {/* Dropdown header */}
        <div className="px-6 pt-5 pb-3 border-b border-white/5">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
            Products
          </p>
        </div>

        {/* Dropdown items */}
        <div className="p-4 space-y-2">
          {items.map((item) => {
            const ItemIcon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleItemClick}
                className={cn(
                  "group/item flex items-start gap-3 p-3 rounded-lg",
                  "transition-all duration-300",
                  "border border-white/5 hover:border-purple-400/30",
                  isActive
                    ? "bg-purple-500/20 border-purple-400/30 text-white"
                    : "bg-white/5 hover:bg-white/10",
                )}
              >
                <div
                  className={cn(
                    "p-2.5 rounded-lg transition-all duration-300",
                    isActive
                      ? "bg-purple-500/30 text-purple-400"
                      : "bg-white/10 text-gray-400 group-hover/item:bg-purple-500/20 group-hover/item:text-purple-400",
                  )}
                >
                  <ItemIcon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p
                    className={cn(
                      "font-semibold text-sm transition-colors duration-300",
                      isActive
                        ? "text-white"
                        : "text-gray-200 group-hover/item:text-white",
                    )}
                  >
                    {item.name}
                  </p>
                  <p
                    className={cn(
                      "text-xs transition-colors duration-300 mt-0.5",
                      isActive
                        ? "text-purple-300"
                        : "text-gray-500 group-hover/item:text-gray-400",
                    )}
                  >
                    {item.description}
                  </p>
                </div>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-all duration-300 -rotate-90",
                    isActive
                      ? "text-purple-400 opacity-100"
                      : "text-gray-500 group-hover/item:text-purple-400 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1",
                  )}
                />
              </Link>
            );
          })}
        </div>

        {/* Dropdown footer */}
        <div className="px-6 py-3 border-t border-white/5 bg-white/[0.02]">
          <p className="text-xs text-gray-500">
            Explore our innovative product suite
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsDropdown;
