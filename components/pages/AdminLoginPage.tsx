import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";
import { supabase } from "@/lib/supabase/client";
import { isAuthenticated } from "@/lib/auth-utils";

const loginSchema = z.object({
  email: z.string()
    .email("Invalid email address")
    .refine(email => email.endsWith("@touchpointe.digital"), {
      message: "Only touchpointe.digital email addresses are allowed"
    }),
  password: z.string()
    .min(6, "Password must be at least 6 characters")
});

const AdminLoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Check if user is already authenticated - with improved status handling
  useEffect(() => {
    const checkAuth = async () => {
      try {
        setCheckingAuth(true);
        const isAuthed = await isAuthenticated();
        
        if (isAuthed) {
          // Add a small delay to prevent flickering during redirection
          setTimeout(() => {
            navigate("/admin/dashboard", { replace: true });
          }, 100);
        }
      } catch (error) {
        console.error("Auth check error:", error);
      } finally {
        setCheckingAuth(false);
      }
    };
    
    checkAuth();
  }, [navigate]);

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (values: z.infer<typeof loginSchema>) => {
    if (isLoading) return;
    setIsLoading(true);
    
    try {
      const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
      const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

      if (adminEmail && adminPassword && values.email === adminEmail && values.password === adminPassword) {
        // Local env login match
        localStorage.setItem("touchpointe_auth", JSON.stringify({
          timestamp: new Date().toISOString(),
          email: values.email
        }));
        
        toast({
          title: "Login successful",
          description: "Welcome to the Touchpointe admin dashboard",
        });

        navigate("/admin/dashboard", { replace: true });
        return;
      }

      // Fallback to Supabase login
      const { data, error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (error) throw error;
      
      localStorage.setItem('supabase.auth.token', JSON.stringify(data.session));
      localStorage.setItem("touchpointe_auth", JSON.stringify({
        timestamp: new Date().toISOString(),
        email: values.email
      }));
      
      toast({
        title: "Login successful",
        description: "Welcome to the Touchpointe admin dashboard",
      });

      navigate("/admin/dashboard", { replace: true });
    } catch (error: any) {
      console.error("Login error:", error);
      let errorMessage = "Authentication failed. Please check your credentials and try again.";
      if (error.message) {
        errorMessage = error.message;
      }
      toast({
        title: "Authentication failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#06060f] p-4 font-sans">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-violet-600/10 pointer-events-none" />
        <div className="text-center relative z-10">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent mx-auto mb-6 shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
          <p className="text-gray-400 font-black uppercase tracking-widest text-xs">Securing Session...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#06060f] p-4 relative overflow-hidden font-sans">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-violet-600/10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[520px] h-[520px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[520px] h-[520px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(120,120,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(120,120,255,1) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <Card className="w-full max-w-md bg-[#06060f]/75 backdrop-blur-2xl border-white/[0.08] shadow-2xl relative z-10 rounded-[2rem] overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-violet-500/50" />
        <CardHeader className="space-y-4 pt-12">
          <div className="flex justify-center mb-4">
            <img 
              src="/lovable-uploads/40e1cbf6-8a11-4c6d-9513-32e74c66bc1d.png" 
              alt="Touchpointe Digital" 
              className="h-10 drop-shadow-[0_0_12px_rgba(100,130,255,0.45)]"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.src = "https://via.placeholder.com/180x60?text=Touchpointe+Digital";
                target.onerror = null;
              }}
            />
          </div>
          <CardTitle className="text-3xl font-black text-center text-white tracking-tight uppercase">Admin <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Portal</span></CardTitle>
          <CardDescription className="text-center text-gray-400 font-medium">
            Same visual system as the website, tuned for internal operations
          </CardDescription>
        </CardHeader>
        <CardContent className="px-8 pb-12">
              <Form {...loginForm}>
                <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-6">
                  <FormField
                    control={loginForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400 font-black uppercase tracking-widest text-[10px] ml-1">Command Email</FormLabel>
                        <FormControl>
                          <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                            <Input 
                              placeholder="operator@touchpointe.digital" 
                              className="h-14 pl-12 bg-white/[0.05] border-white/[0.08] text-white placeholder:text-gray-600 rounded-full focus:ring-1 focus:ring-blue-500/50 transition-all text-sm"
                              {...field} 
                              disabled={isLoading}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs font-bold text-red-400" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={loginForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400 font-black uppercase tracking-widest text-[10px] ml-1">Access Cipher</FormLabel>
                        <FormControl>
                          <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                            <Input 
                              type={showPassword ? "text" : "password"}
                              placeholder="••••••••" 
                              className="h-14 pl-12 pr-12 bg-white/[0.05] border-white/[0.08] text-white placeholder:text-gray-600 rounded-full focus:ring-1 focus:ring-blue-500/50 transition-all text-sm"
                              {...field} 
                              disabled={isLoading}
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors focus:outline-none"
                            >
                              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs font-bold text-red-400" />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full h-14 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-black uppercase tracking-widest text-xs transition-all shadow-lg shadow-blue-700/30 hover:shadow-blue-600/50 border-none mt-2" 
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-3">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Decrypting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-3">
                        <Lock className="h-4 w-4" />
                        Authorize Access
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
        </CardContent>
        <CardFooter className="flex justify-center bg-white/[0.02] border-t border-white/[0.08] py-6">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
            Restricted Entry • Touchpointe Personnel Only
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AdminLoginPage;
