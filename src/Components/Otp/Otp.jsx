import { useNavigate, useLocation } from "react-router-dom";
import OTPInput from "react-otp-input";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useVerifyEmailMutation } from "../../redux/features/auth/authApi";


const Otp = () => {
  const [otp, setOtp] = useState("");
  console.log(otp)
  const navigate = useNavigate();
  const location = useLocation();
  const [verifyOtp, { isLoading }] = useVerifyEmailMutation();

  // Get email from query parameter
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get("email");
  console.log(email)

  // Optional: Redirect if email not found
  useEffect(() => {
    if (!email) {
      toast.error("Email not found in URL");
      navigate("/auth/login");
    }
  }, [email, navigate]);

  const handleOtpChange = (otpValue) => {
    setOtp(otpValue);
  };

  const handleMatchOtp = async () => {
    
    try {
      const res = await verifyOtp({
        email,
        otp: otp,
      });
      console.log(res);
      if (res.error) {
        toast.error(res?.error?.data?.message || "Verification failed");
      }
      if (res.data) {
        toast.success(res?.data?.message || "Verified successfully");
        navigate(`/signIn`);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto h-full md:h-screen grid grid-cols-1 md:grid-cols-2 place-content-center px-5 py-10 gap-8 bg-white">
      <div className="mt-16 md:mt-[115px]">
        <div className="mb-5 space-y-5">
          <h1 className="text-black">
            {`We'll send a verification code to your email. Check your inbox and enter the code here.`}
          </h1>
        </div>

        <OTPInput
          value={otp}
          onChange={handleOtpChange}
          numInputs={4}
          renderInput={(props) => <input {...props} />}
          containerStyle="otp-container"
          inputStyle={{
            width: "100%",
            maxWidth: "6.5rem",
            height: "3rem",
            margin: "0 0.5rem",
            fontSize: "2rem",
            fontWeight: "bold",
            border: "1px solid #1397D5",
            textAlign: "center",
            outline: "none",
            color: "black"
          }}
        />

        <div onClick={handleMatchOtp} className="mt-5">
          <button disabled={isLoading} className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            {isLoading ? "Verifying..." : "Verify"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Otp;
