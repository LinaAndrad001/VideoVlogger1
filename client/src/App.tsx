import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Continent from "@/pages/continent";
import Country from "@/pages/country";
import City from "@/pages/city";
import Place from "@/pages/place";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/continent/:continentSlug" component={Continent} />
      <Route path="/continent/:continentSlug/country/:countrySlug" component={Country} />
      <Route path="/continent/:continentSlug/country/:countrySlug/city/:citySlug" component={City} />
      <Route path="/continent/:continentSlug/country/:countrySlug/city/:citySlug/place/:placeSlug" component={Place} />
      <Route component={NotFound} />
    </Switch>
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
