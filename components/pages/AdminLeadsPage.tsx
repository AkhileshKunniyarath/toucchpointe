import React, { useEffect, useMemo, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import AdminPageWrapper from "@/components/admin/AdminPageWrapper";
import { getContactMessages, ContactMessage } from "@/lib/services/adminService";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const AdminLeadsPage = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const load = async () => {
      const data = await getContactMessages(100);
      setMessages(data);
    };

    load();
  }, []);

  const filteredMessages = useMemo(
    () =>
      messages.filter((message) =>
        `${message.name} ${message.email} ${message.message}`.toLowerCase().includes(query.toLowerCase())
      ),
    [messages, query]
  );

  return (
    <AdminPageWrapper>
      <AdminLayout>
        <div className="space-y-6">
          <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.04] p-5 backdrop-blur-xl">
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search leads by name, email, or message"
                className="h-12 rounded-full border-white/[0.08] bg-white/[0.03] pl-11 text-white"
              />
            </div>
          </div>

          <div className="grid gap-4">
            {filteredMessages.length === 0 ? (
              <div className="rounded-[2rem] border border-dashed border-white/[0.1] bg-white/[0.04] p-12 text-center text-slate-400 backdrop-blur-xl">
                No lead messages found.
              </div>
            ) : (
              filteredMessages.map((message) => (
                <article key={message.id} className="rounded-[2rem] border border-white/[0.08] bg-white/[0.04] p-6 backdrop-blur-xl">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h2 className="text-xl font-black text-white">{message.name}</h2>
                      <a href={`mailto:${message.email}`} className="mt-1 inline-block text-sm text-cyan-300">
                        {message.email}
                      </a>
                    </div>
                    <p className="text-sm text-slate-500">
                      {new Date(message.created_at).toLocaleString()}
                    </p>
                  </div>
                  <p className="mt-5 whitespace-pre-wrap text-sm leading-7 text-slate-300">{message.message}</p>
                </article>
              ))
            )}
          </div>
        </div>
      </AdminLayout>
    </AdminPageWrapper>
  );
};

export default AdminLeadsPage;
