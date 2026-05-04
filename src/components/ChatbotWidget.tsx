import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { KBH_KNOWLEDGE } from "../knowledgeBase";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "model"; text: string }[]>([
    { role: "model", text: "Chào bạn, tôi là trợ lý ảo tư vấn của Kênh Bảo Hiểm. Tôi có thể giúp gì cho bạn?" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    
    // Bỏ qua lời chào đầu tiên nếu cần, hoặc cứ thêm vào history vì model (Gemini)
    // cũng hỗ trợ context lịch sử. Ở đây ta giữ nguyên history.
    const updatedMessages = [...messages, { role: "user" as const, text: userMessage }];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const contents = updatedMessages.map((m) => ({
        role: m.role,
        parts: [{ text: m.text }],
      }));

      const body = {
        system_instruction: {
          parts: {
            text: "Bạn là trợ lý ảo tư vấn của Kênh Bảo Hiểm. Luôn trả lời ngắn gọn, lịch sự, chuyên nghiệp. Dưới đây là tài liệu nghiệp vụ của bạn: " + KBH_KNOWLEDGE + " Hãy dựa sát vào tài liệu này để trả lời. Nếu câu hỏi vượt quá tài liệu hoặc khách hỏi giá chi tiết, hãy khuyên khách gọi Hotline 0912.660.869 để chuyên viên hỗ trợ."
          }
        },
        contents: contents
      };

      const apiKey = "AIzaSyBAlSGNFn3mpsbWdLFf6kKVeYmEXxZMFgM";
      const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        throw new Error("Lỗi kết nối API: " + response.statusText);
      }

      const data = await response.json();
      const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Xin lỗi, tôi không thể trả lời lúc này.";
      
      setMessages((prev) => [...prev, { role: "model", text: responseText }]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "model", text: "Xin lỗi, đã xảy ra lỗi kết nối. Vui lòng thử lại sau." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:right-6 lg:right-10 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[calc(100vw-2rem)] sm:w-96 overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-100 flex flex-col h-[500px] max-h-[80vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-brand-accent p-4 text-white">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium leading-none">Trợ lý KBH</h3>
                  <span className="text-xs text-white/80 mt-1 block">Trợ lý ảo Kênh Bảo Hiểm</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 hover:bg-white/20 transition-colors"
                aria-label="Đóng chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                      msg.role === "user"
                        ? "bg-gray-100 text-gray-800 rounded-br-none"
                        : "bg-brand-accent text-white rounded-bl-none shadow-sm"
                    }`}
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl px-4 py-3 bg-brand-accent text-white rounded-bl-none shadow-sm flex items-center gap-2 text-sm text-white/90">
                    Đang gõ
                    <span className="flex gap-1 ml-1 cursor-default">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce" style={{ animationDelay: "0.15s" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce" style={{ animationDelay: "0.3s" }} />
                    </span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div className="p-3 bg-white border-t border-gray-100">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Nhập tin nhắn..."
                  className="flex-1 rounded-full border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-accent text-white disabled:bg-gray-300 disabled:text-gray-500 hover:opacity-90 transition-opacity"
                >
                  <Send className="h-4 w-4 ml-[-2px]" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-accent text-white shadow-lg hover:opacity-90 active:scale-95 transition-all"
        aria-label="Mở khung chat"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}
