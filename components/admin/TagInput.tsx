import React, { useState } from "react";
import { X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TagInputProps {
  availableTags: string[];
  selectedTags: string[];
  onChange: (tags: string[]) => void;
}

const TagInput: React.FC<TagInputProps> = ({ 
  availableTags, 
  selectedTags, 
  onChange 
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isAddingCustomTag, setIsAddingCustomTag] = useState(false);

  const handleRemoveTag = (tag: string) => {
    onChange(selectedTags.filter((t) => t !== tag));
  };

  const handleAddTag = (tag: string) => {
    if (tag && !selectedTags.includes(tag)) {
      onChange([...selectedTags, tag]);
    }
    setInputValue("");
    setIsAddingCustomTag(false);
  };

  const unselectedTags = availableTags.filter(
    (tag) => !selectedTags.includes(tag)
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 min-h-14 p-3 border border-white/[0.08] rounded-2xl bg-white/[0.03] backdrop-blur-md">
        {selectedTags.map((tag) => (
          <div
            key={tag}
            className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all hover:bg-blue-500/20"
          >
            {tag}
            <button
              type="button"
              onClick={() => handleRemoveTag(tag)}
              className="text-blue-400 hover:text-white transition-colors"
            >
              <X className="h-3 w-3" />
              <span className="sr-only">Remove {tag}</span>
            </button>
          </div>
        ))}

        {isAddingCustomTag ? (
          <div className="flex items-center px-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddTag(inputValue.trim());
                } else if (e.key === "Escape") {
                  setIsAddingCustomTag(false);
                  setInputValue("");
                }
              }}
              autoFocus
              className="bg-transparent border-0 outline-none flex-1 text-xs text-white placeholder:text-gray-600 font-bold uppercase tracking-widest"
              placeholder="TYPE TAG..."
            />
          </div>
        ) : (
          <Button
            type="button"
            variant="ghost"
            className="h-8 px-4 rounded-xl bg-white/[0.05] border border-white/[0.1] text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all"
            onClick={() => setIsAddingCustomTag(true)}
          >
            <Plus className="h-3 w-3 mr-2" />
            Add Taxonomy
          </Button>
        )}
      </div>

      {unselectedTags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest mr-2 flex items-center">Suggested:</span>
          {unselectedTags.slice(0, 10).map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => handleAddTag(tag)}
              className="text-[9px] font-black uppercase tracking-widest bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.1] hover:text-white transition-all px-3 py-1.5 rounded-lg text-gray-500"
            >
              {tag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TagInput;
