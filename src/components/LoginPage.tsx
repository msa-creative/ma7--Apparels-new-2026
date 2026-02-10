'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

export default function LoginPage({ onClose }: { onClose?: () => void }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate backdrop
    tl.from(containerRef.current, {
      duration: 0.5,
      opacity: 0,
      ease: 'power2.out',
    })
      // Animate glass container
      .from(
        '.login-glass',
        {
          duration: 0.6,
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        '-=0.3'
      )
      // Animate form elements
      .from(
        '.form-element',
        {
          duration: 0.4,
          opacity: 0,
          x: -20,
          stagger: 0.1,
        },
        '-=0.3'
      );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tl = gsap.timeline();

    tl.to('.login-glass', {
      duration: 0.3,
      scale: 0.98,
      boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)',
    })
      .to('.login-glass', {
        duration: 0.3,
        scale: 1,
        boxShadow: '0 20px 60px rgba(212, 175, 55, 0.2)',
      })
      .to(
        '.login-submit',
        {
          duration: 0.3,
          '--btn-progress': '100%',
        } as any,
        '-=0.3'
      )
      .to(
        '.login-container',
        {
          duration: 0.5,
          opacity: 0,
          scale: 0.95,
          delay: 0.5,
          onComplete: () => onClose?.(),
        }
      );
  };

  return (
    <div
      ref={containerRef}
      className="login-container fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Login form */}
      <div className="login-glass relative w-full max-w-md glass rounded-2xl p-8 shadow-2xl">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-3xl blur-2xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-tr-3xl blur-2xl" />

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="form-element mb-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full glass flex items-center justify-center">
              <span className="text-2xl font-serif font-bold text-secondary">MA7</span>
            </div>
            <h1 className="text-2xl font-serif font-bold text-foreground">Welcome Back</h1>
            <p className="text-sm text-muted-foreground mt-2">Sign in to your account</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email field */}
            <div className="form-element">
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                  required
                />
              </div>
            </div>

            {/* Password field */}
            <div className="form-element">
              <label className="block text-sm font-medium text-foreground mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="form-element flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded bg-white/5 border border-white/10" />
                <span className="text-muted-foreground">Remember me</span>
              </label>
              <a href="#" className="text-secondary hover:text-secondary/80 transition-colors">
                Forgot password?
              </a>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="login-submit form-element w-full py-3 bg-gradient-to-r from-secondary to-accent rounded-lg text-primary font-semibold hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Sign In</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            {/* Sign up link */}
            <div className="form-element text-center text-sm text-muted-foreground">
              Don't have an account?{' '}
              <a href="#" className="text-secondary hover:text-secondary/80 font-medium transition-colors">
                Create account
              </a>
            </div>
          </form>

          {/* Divider */}
          <div className="form-element my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-xs text-muted-foreground">OR</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Social login */}
          <button className="form-element w-full py-3 border border-white/10 rounded-lg text-foreground font-medium hover:bg-white/5 transition-all">
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}
