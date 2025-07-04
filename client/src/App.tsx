import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Continent from "@/pages/continent";
import Country from "@/pages/country";
import City from "@/pages/city";
import Place from "@/pages/place";
import TestImages from "@/pages/test-images";
import SimpleTest from "@/pages/simple-test";
import NotFound from "@/pages/not-found";

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/:continentSlug" component={Continent} />
        <Route path="/:continentSlug/:countrySlug" component={Country} />
        <Route path="/:continentSlug/:countrySlug/:citySlug" component={City} />
        <Route path="/:continentSlug/:countrySlug/:citySlug/:placeSlug" component={Place} />
        <Route path="/test-images" component={TestImages} />
        <Route path="/simple-test" component={SimpleTest} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
