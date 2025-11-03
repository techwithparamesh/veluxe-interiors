import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Portfolio from "@/pages/Portfolio";
import ModularKitchen from "@/pages/ModularKitchen";
import Wardrobes from "@/pages/Wardrobes";
import LivingRoom from "@/pages/LivingRoom";
import Bedroom from "@/pages/Bedroom";
import Contact from "@/pages/Contact";
import BookConsultation from "@/pages/BookConsultation";
import NotFound from "@/pages/not-found";
import PoojaMandir from "@/pages/PoojaMandir";
import TVUnit from "./pages/TVUnit";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/modular-kitchen" component={ModularKitchen} />
      <Route path="/wardrobes" component={Wardrobes} />
      <Route path="/living-room" component={LivingRoom} />
      <Route path="/bedroom" component={Bedroom} />
  <Route path="/contact" component={Contact} />
  <Route path="/book-consultation" component={BookConsultation} />
  <Route path="/pooja-mandir" component={PoojaMandir} />
  <Route path="/tv-unit" component={TVUnit} />
  <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 pt-16">
            <Router />
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
