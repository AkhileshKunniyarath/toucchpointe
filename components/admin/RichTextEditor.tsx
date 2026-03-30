import React, { useState, useEffect } from "react";
import { Bold, Italic, Underline, List, ListOrdered, Image, Link, AlignLeft, AlignCenter, AlignRight, Heading1, Heading2, Heading3 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange }) => {
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [linkText, setLinkText] = useState("");
  const editorRef = React.useRef<HTMLDivElement>(null);
  const [editorContent, setEditorContent] = useState(value);

  // Initialize content when the component mounts or value changes
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = value || "";
    }
  }, []);

  // Handle content changes from the form
  useEffect(() => {
    if (editorRef.current && value !== editorContent && document.activeElement !== editorRef.current) {
      editorRef.current.innerHTML = value || "";
      setEditorContent(value);
    }
  }, [value]);

  const handleEditorChange = () => {
    if (editorRef.current) {
      const content = editorRef.current.innerHTML;
      setEditorContent(content);
      onChange(content);
    }
  };

  const execCommand = (command: string, value: string = "") => {
    document.execCommand(command, false, value);
    handleEditorChange();
    editorRef.current?.focus();
  };

  const handleLinkInsert = () => {
    if (linkUrl) {
      const linkHtml = `<a href="${linkUrl}" target="_blank" class="text-blue-400 underline">${linkText || linkUrl}</a>`;
      document.execCommand("insertHTML", false, linkHtml);
      handleEditorChange();
      setIsLinkModalOpen(false);
      setLinkUrl("");
      setLinkText("");
    }
  };

  return (
    <div className="border border-white/[0.08] rounded-2xl overflow-hidden bg-white/[0.03] backdrop-blur-md shadow-2xl">
      <div className="flex flex-wrap items-center gap-1 border-b border-white/[0.08] p-3 bg-white/[0.05]">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-9 w-9 p-0 hover:bg-blue-600 hover:text-white transition-all rounded-lg"
          onClick={() => execCommand("bold")}
        >
          <Bold className="h-4 w-4" />
          <span className="sr-only">Bold</span>
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-9 w-9 p-0 hover:bg-blue-600 hover:text-white transition-all rounded-lg"
          onClick={() => execCommand("italic")}
        >
          <Italic className="h-4 w-4" />
          <span className="sr-only">Italic</span>
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-9 w-9 p-0 hover:bg-blue-600 hover:text-white transition-all rounded-lg"
          onClick={() => execCommand("underline")}
        >
          <Underline className="h-4 w-4" />
          <span className="sr-only">Underline</span>
        </Button>

        <span className="mx-2 w-px h-6 bg-white/[0.1]" />

        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-9 px-3 hover:bg-blue-600 hover:text-white transition-all rounded-lg"
          onClick={() => execCommand("formatBlock", "<h1>")}
        >
          <Heading1 className="h-4 w-4 mr-2" />
          <span className="text-[10px] font-black uppercase tracking-widest">H1</span>
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-9 px-3 hover:bg-blue-600 hover:text-white transition-all rounded-lg"
          onClick={() => execCommand("formatBlock", "<h2>")}
        >
          <Heading2 className="h-4 w-4 mr-2" />
          <span className="text-[10px] font-black uppercase tracking-widest">H2</span>
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-9 px-3 hover:bg-blue-600 hover:text-white transition-all rounded-lg"
          onClick={() => execCommand("formatBlock", "<h3>")}
        >
          <Heading3 className="h-4 w-4 mr-2" />
          <span className="text-[10px] font-black uppercase tracking-widest">H3</span>
        </Button>

        <span className="mx-2 w-px h-6 bg-white/[0.1]" />

        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-9 w-9 p-0 hover:bg-blue-600 hover:text-white transition-all rounded-lg"
          onClick={() => execCommand("insertUnorderedList")}
        >
          <List className="h-4 w-4" />
          <span className="sr-only">Bullet List</span>
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-9 w-9 p-0 hover:bg-blue-600 hover:text-white transition-all rounded-lg"
          onClick={() => execCommand("insertOrderedList")}
        >
          <ListOrdered className="h-4 w-4" />
          <span className="sr-only">Numbered List</span>
        </Button>

        <span className="mx-2 w-px h-6 bg-white/[0.1]" />

        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-9 w-9 p-0 hover:bg-blue-600 hover:text-white transition-all rounded-lg"
          onClick={() => execCommand("justifyLeft")}
        >
          <AlignLeft className="h-4 w-4" />
          <span className="sr-only">Align Left</span>
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-9 w-9 p-0 hover:bg-blue-600 hover:text-white transition-all rounded-lg"
          onClick={() => execCommand("justifyCenter")}
        >
          <AlignCenter className="h-4 w-4" />
          <span className="sr-only">Align Center</span>
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-9 w-9 p-0 hover:bg-blue-600 hover:text-white transition-all rounded-lg"
          onClick={() => execCommand("justifyRight")}
        >
          <AlignRight className="h-4 w-4" />
          <span className="sr-only">Align Right</span>
        </Button>

        <span className="mx-2 w-px h-6 bg-white/[0.1]" />

        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-9 w-9 p-0 hover:bg-blue-600 hover:text-white transition-all rounded-lg"
          onClick={() => setIsLinkModalOpen(true)}
        >
          <Link className="h-4 w-4" />
          <span className="sr-only">Insert Link</span>
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-9 w-9 p-0 hover:bg-blue-600 hover:text-white transition-all rounded-lg"
          onClick={() => {
            const imageUrl = prompt("Enter image URL:");
            if (imageUrl) {
              execCommand("insertImage", imageUrl);
            }
          }}
        >
          <Image className="h-4 w-4" />
          <span className="sr-only">Insert Image</span>
        </Button>
      </div>

      <div
        ref={editorRef}
        contentEditable
        className="min-h-[400px] p-8 outline-none overflow-auto prose prose-invert max-w-none prose-sm sm:prose-base text-gray-300 selection:bg-blue-500/30"
        onInput={handleEditorChange}
        onBlur={handleEditorChange}
      />

      {isLinkModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-[#0a0a1a] border border-white/[0.08] p-8 rounded-[2rem] shadow-2xl w-[400px] space-y-6">
            <h3 className="text-2xl font-black text-white uppercase tracking-tight">Insert Hyperlink</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Destination URL</label>
                <input
                  type="text"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  className="w-full h-12 bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                  placeholder="https://example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Display Text</label>
                <input
                  type="text"
                  value={linkText}
                  onChange={(e) => setLinkText(e.target.value)}
                  className="w-full h-12 bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                  placeholder="Link text"
                />
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-4">
              <Button
                variant="ghost"
                className="h-12 rounded-xl text-gray-400 hover:text-white font-black uppercase tracking-widest text-[10px]"
                onClick={() => setIsLinkModalOpen(false)}
              >
                Abort
              </Button>
              <Button 
                onClick={handleLinkInsert}
                className="h-12 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-widest text-[10px]"
              >
                Inject Link
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RichTextEditor;
