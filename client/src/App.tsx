import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Visit from "@/pages/visit";
import Designers from "@/pages/designers";
import Lookbook from "@/pages/lookbook";
import Shop from "@/pages/shop";
import Accessories from "@/pages/accessories";
import Yacht from "@/pages/yacht";
import Cocktail from "@/pages/cocktail";
import Tea from "@/pages/tea";
import WhiteParty from "@/pages/whiteparty";
import Gala from "@/pages/gala";
import DayEvening from "@/pages/dayevening";
import Events from "@/pages/events";

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/visit" component={Visit} />
      <Route path="/designers" component={Designers} />
      <Route path="/lookbook" component={Lookbook} />
      <Route path="/shop/accessories" component={Accessories} />
      <Route path="/shop/yacht" component={Yacht} />
      <Route path="/shop/cocktail" component={Cocktail} />
      <Route path="/shop/tea" component={Tea} />
      <Route path="/shop/whiteparty" component={WhiteParty} />
      <Route path="/shop/gala" component={Gala} />
      <Route path="/shop/dayevening" component={DayEvening} />
      <Route path="/shop" component={Shop} /> 
      <Route path="/events" component={Events} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
