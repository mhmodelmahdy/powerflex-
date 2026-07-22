import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { Layout } from '@/components/layout';
import { useEffect } from 'react';

// Pages
import Home from '@/pages/home';
import ParametersBrowser from '@/pages/parameters';
import ParameterGroups from '@/pages/groups';
import HimGuide from '@/pages/him-guide';
import QuickReference from '@/pages/quick-ref';

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/parameters" component={ParametersBrowser} />
        <Route path="/groups" component={ParameterGroups} />
        <Route path="/him-guide" component={HimGuide} />
        <Route path="/quick-ref" component={QuickReference} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  // Set RTL direction and Arabic language
  useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
    document.documentElement.classList.add('dark'); // Force dark industrial theme
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
