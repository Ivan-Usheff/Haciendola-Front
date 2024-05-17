import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthTemplate, IndexTemplate, ProductsTemplate } from './templates/template';
import { IndexView, LogOutView, LoginView, ProductDeleteView, ProductsEditView, ProductsView, ProductsViewView, RegisterView } from './views/views';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/Auth' element={<AuthTemplate />} >
          <Route index element={<LoginView />} />
          <Route path='Register' element={<RegisterView />} />
          <Route path='LogOut' element={<LogOutView />} />
        </Route>

        <Route path="/" element={<IndexTemplate />}>
          <Route index element={<IndexView />} />
          <Route path='Products' element={<ProductsTemplate />} >
            <Route index element={<ProductsView />} />
            <Route path='View' element={<ProductsViewView />} />
            <Route path='Edit' element={<ProductsEditView />} />
            <Route path='Delete' element={<ProductDeleteView />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
