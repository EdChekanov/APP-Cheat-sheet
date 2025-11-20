import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';

import MainLayout from './components/MainLayout.jsx';
import Intro from './components/content/Intro.jsx';
import Components from './components/content/Components.jsx';
import Props from './components/content/Props.jsx';
import State from './components/content/State.jsx';
import LifeCycle from './components/content/LifeCycle.jsx';
import VirtualDOM from './components/content/VirtualDOM.jsx';
import Events from './components/content/Events.jsx';
import RefsFragmentKey from './components/content/RefsFragmentKey.jsx';
import Optimization from './components/content/Optimization.jsx';
import Context from './components/content/Context.jsx';
import HOC from './components/content/HOC.jsx';
import Routing from './components/content/Routing.jsx';
import ReactHookForm from './components/content/ReactHookForm.jsx';
import Storages from './components/content/Storages.jsx';
import Hooks from './components/content/Hooks.jsx';
import NotFound from './components/content/NotFound.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Intro />} />
            <Route path="components" element={<Components />} />
            <Route path="props" element={<Props />} />
            <Route path="state" element={<State />} />
            <Route path="life-cycle" element={<LifeCycle />} />
            <Route path="virtual-dom" element={<VirtualDOM />} />
            <Route path="events" element={<Events />} />
            <Route path="refs-fragment-key" element={<RefsFragmentKey />} />
            <Route path="optimization" element={<Optimization />} />
            <Route path="context" element={<Context />} />
            <Route path="hoc" element={<HOC />} />
            <Route path="routing" element={<Routing />} />
            <Route path="react-hook-form" element={<ReactHookForm />} />
            <Route path="storages" element={<Storages />} />
            <Route
              path="/hooks-id-reducer-transition-optimistic"
              element={<Hooks />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
