import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { Pencil } from "lucide-react";
// import { input } from "@/components/ui/input";
// import { button } from "@/components/ui/button";
// import { div, div } from "@/components/ui/div";

export default function EditUserPage() {
  const router = useRouter();
  const { id } = useParams() || {};
  const [user, setUser] = useState({ name: "", email: "", phone: "", role: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // if (!id) return;
    async function fetchUser() {
      try {
        const response = await fetch(`/api/users/${id}`);
        if (!response.ok) throw new Error("User not found");
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      }
    }
    fetchUser();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`/api/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      if (!response.ok) throw new Error("Failed to update user");
      router.push("/users");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-6 flex justify-center">
      <div className="w-full max-w-lg">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Pencil className="w-5 h-5 mr-2" /> Edit User
          </h2>
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" value={user.name} onChange={handleChange} placeholder="Name" required />
            <input name="email" type="email" value={user.email} onChange={handleChange} placeholder="Email" required />
            <input name="phone" value={user.phone} onChange={handleChange} placeholder="Phone" required />
            <input name="role" value={user.role} onChange={handleChange} placeholder="Role" required />
            <button type="submit" disabled={loading} className="w-full">
              {loading ? "Updating..." : "Update User"}
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

