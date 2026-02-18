import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <CheckCircle size={64} className="text-emerald-400 mb-4" />
      <h1 className="text-2xl font-semibold mb-2">Payment Successful</h1>
      <p className="text-zinc-400">Credits added. Redirecting to dashboard…</p>
    </div>
  );
};

export default PaymentSuccess;
