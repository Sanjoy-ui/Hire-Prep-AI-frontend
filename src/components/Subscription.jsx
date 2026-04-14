import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from "framer-motion";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserData } from '../redux/userSlice';
import { ServerUrl } from '../App';

const PricingSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // State for UI interactions
  const [selectedPlan, setSelectedPlan] = useState("basic");
  const [loadingPlan, setLoadingPlan] = useState(null);

  const plans = [
    {
      id: "free",
      name: "Free",
      price: "₹0",
      credits: 100,
      description: "Perfect for beginners starting interview preparation.",
      features: ["100 AI Credits", "Basic Report", "Voice Access", "Limited History"],
      isFree: true,
    },
    {
      id: "basic",
      name: "Starter Pack",
      price: "₹100",
      credits: 150,
      description: "Great for focused practice and skill improvement.",
      features: ["150 AI Credits", "Detailed Feedback", "Analytics", "Full History"],
      badge: "Popular"
    },
    {
      id: "pro",
      name: "Pro Pack",
      price: "₹500",
      credits: 650,
      description: "Best value for serious job preparation.",
      features: ["650 AI Credits", "Advanced AI Feedback", "Trend Analysis", "Priority Processing"],
      badge: "Best Value"
    },
  ];

  const handlePayment = async (plan) => {
    if (plan.isFree) return;
    try {
      setLoadingPlan(plan.id);
      
      const amount = plan.id === "basic" ? 100 : 500;

      const result = await axios.post(`${ServerUrl}/api/payment/order`, {
        planId: plan.id,
        amount,
        credits: plan.credits,
      }, { withCredentials: true });

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: result.data.amount,
        currency: "INR",
        name: "HirePrep AI",
        description: `${plan.name} - ${plan.credits} Credits`,
        order_id: result.data.id,
        handler: async (response) => {
          const verifypay = await axios.post(`${ServerUrl}/api/payment/verify`, response, { withCredentials: true });
          dispatch(setUserData(verifypay.data.user));
          alert("Payment Successful 🎉 Credits Added!");
          navigate("/history");
        },
        theme: { color: "#10b981" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Error:", error);
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-emerald-600 font-bold tracking-widest uppercase text-sm"
          >
            Pricing Plans
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-4xl font-extrabold text-gray-900 sm:text-5xl tracking-tight"
          >
            Ready to ace your next interview?
          </motion.p>
          <p className="mt-5 text-lg text-gray-600">
            No monthly subscriptions. Simple, transparent, one-time credit top-ups.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => {
            const isSelected = selectedPlan === plan.id;
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative flex flex-col p-8 rounded-[2rem] border transition-all duration-300 cursor-pointer ${
                  isSelected 
                    ? "border-emerald-500 shadow-2xl bg-white ring-1 ring-emerald-500" 
                    : "border-gray-200 bg-white shadow-sm hover:shadow-md"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-tighter shadow-lg">
                    {plan.badge}
                  </div>
                )}

                {/* Card Top */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-400 uppercase tracking-widest">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-5xl font-black text-gray-900">{plan.price}</span>
                    <span className="ml-2 text-gray-400 font-medium text-sm">/one-time</span>
                  </div>
                  <div className="mt-2 py-1 px-3 bg-emerald-50 inline-block rounded-md text-emerald-700 font-bold text-sm">
                    {plan.credits} Credits
                  </div>
                  <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                      <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <button
                  disabled={loadingPlan === plan.id || plan.isFree}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePayment(plan);
                  }}
                  className={`w-full py-4 rounded-2xl font-black transition-all transform active:scale-95 ${
                    plan.isFree 
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : isSelected 
                        ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200 hover:bg-emerald-700" 
                        : "bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  }`}
                >
                  {loadingPlan === plan.id ? (
                    <div className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Processing
                    </div>
                  ) : plan.isFree ? "Current Plan" : "Buy Credits"}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Note */}
        <p className="mt-12 text-center text-sm text-gray-400 font-medium italic">
          Secure payment processing via Razorpay. All credits are added instantly.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;