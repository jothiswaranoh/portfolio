import { useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "3b458985-f645-4cb0-910f-9884fbfda197",
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio Contact from ${form.name}`,
          replyto: form.email,
          // 🔧 TESTING: change to jothiswaranoh517@gmail.com when ready
          to: "mohdrazeen885@gmail.com",
        }),
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let's Connect"
          sub="💬 Have questions or ideas? Let's talk! 🚀"
        />

        <div className="grid-12-cols mt-16">
          {/* ── Form Card ── */}
          <div className="xl:col-span-5">
            <div
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "24px",
                padding: "40px",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
              }}
            >
              {/* Status banners */}
              {status === "success" && (
                <div style={{
                  background: "linear-gradient(135deg,rgba(34,197,94,0.18),rgba(34,197,94,0.06))",
                  border: "1px solid rgba(34,197,94,0.5)",
                  borderRadius: "12px",
                  padding: "16px 20px",
                  marginBottom: "24px",
                  color: "#4ade80",
                  textAlign: "center",
                  fontWeight: "600",
                  fontSize: "15px",
                  letterSpacing: "0.02em",
                }}>
                  ✅ Message sent! I&apos;ll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div style={{
                  background: "linear-gradient(135deg,rgba(239,68,68,0.15),rgba(239,68,68,0.05))",
                  border: "1px solid rgba(239,68,68,0.5)",
                  borderRadius: "12px",
                  padding: "16px 20px",
                  marginBottom: "24px",
                  color: "#f87171",
                  textAlign: "center",
                  fontWeight: "600",
                  fontSize: "15px",
                }}>
                  ❌ Something went wrong. Please try again.
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

                {/* Name */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "rgba(255,255,255,0.5)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your good name?"
                    required
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "12px",
                      padding: "14px 18px",
                      color: "#fff",
                      fontSize: "15px",
                      outline: "none",
                      transition: "border 0.2s",
                      width: "100%",
                    }}
                    onFocus={e => e.target.style.border = "1px solid rgba(255,255,255,0.35)"}
                    onBlur={e => e.target.style.border = "1px solid rgba(255,255,255,0.1)"}
                  />
                </div>

                {/* Email */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "rgba(255,255,255,0.5)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email address?"
                    required
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "12px",
                      padding: "14px 18px",
                      color: "#fff",
                      fontSize: "15px",
                      outline: "none",
                      transition: "border 0.2s",
                      width: "100%",
                    }}
                    onFocus={e => e.target.style.border = "1px solid rgba(255,255,255,0.35)"}
                    onBlur={e => e.target.style.border = "1px solid rgba(255,255,255,0.1)"}
                  />
                </div>

                {/* Message */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "rgba(255,255,255,0.5)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}>
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "12px",
                      padding: "14px 18px",
                      color: "#fff",
                      fontSize: "15px",
                      outline: "none",
                      resize: "none",
                      transition: "border 0.2s",
                      width: "100%",
                      fontFamily: "inherit",
                    }}
                    onFocus={e => e.target.style.border = "1px solid rgba(255,255,255,0.35)"}
                    onBlur={e => e.target.style.border = "1px solid rgba(255,255,255,0.1)"}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    background: loading
                      ? "rgba(255,255,255,0.08)"
                      : "linear-gradient(135deg, #fff 0%, #d4d4d4 100%)",
                    color: loading ? "rgba(255,255,255,0.4)" : "#000",
                    border: "none",
                    borderRadius: "14px",
                    padding: "16px 28px",
                    fontSize: "15px",
                    fontWeight: "700",
                    letterSpacing: "0.04em",
                    cursor: loading ? "not-allowed" : "pointer",
                    transition: "all 0.25s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    boxShadow: loading ? "none" : "0 4px 20px rgba(255,255,255,0.15)",
                  }}
                  onMouseEnter={e => {
                    if (!loading) {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 8px 30px rgba(255,255,255,0.25)";
                    }
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(255,255,255,0.15)";
                  }}
                >
                  {loading ? (
                    <>
                      <span style={{
                        width: "16px", height: "16px",
                        border: "2px solid rgba(255,255,255,0.2)",
                        borderTopColor: "rgba(255,255,255,0.7)",
                        borderRadius: "50%",
                        display: "inline-block",
                        animation: "spin 0.8s linear infinite",
                      }} />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span style={{ fontSize: "18px" }}>→</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* ── 3D Scene ── */}
          <div className="xl:col-span-7 min-h-96">
            <div
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                height: "100%",
                minHeight: "384px",
                boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
              }}
              className="bg-[#cd7c2e] w-full hover:cursor-grab"
            >
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        input::placeholder, textarea::placeholder {
          color: rgba(255,255,255,0.25);
        }
      `}</style>
    </section>
  );
};

export default Contact;
