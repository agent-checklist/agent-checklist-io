import { Switch, Route } from "wouter";
import Home from "@/pages/home";
import Vision from "@/pages/vision";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/vision" component={Vision} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
