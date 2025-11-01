import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919876543210";
    const message = encodeURIComponent("Hi! I'm interested in Veluxe Interiors' design services.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <Button
      size="icon"
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-xl z-40 animate-pulse hover:animate-none"
      onClick={handleWhatsAppClick}
      data-testid="button-whatsapp"
    >
      <MessageCircle className="w-6 h-6" />
    </Button>
  );
}
