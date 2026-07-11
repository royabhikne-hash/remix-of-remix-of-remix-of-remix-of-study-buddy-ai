import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const RootGate = () => {
  const { user, loading } = useAuth();
  const onboardingDone = localStorage.getItem("onboardingComplete") === "true";

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
      </div>
    );
  }

  if (!onboardingDone) return <Navigate to="/onboarding" replace />;
  if (user) return <Navigate to="/dashboard" replace />;
  return <Navigate to="/login" replace />;
};

export default RootGate;
