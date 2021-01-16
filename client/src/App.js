import './App.less';
import 'antd/dist/antd.less'

import HomeLayout from './components/layout/HomeLayout';
import { CoreProvider } from './components/Provider'
import UploadModal from './components/modals/UploadModal';

function App() {

  return (
    <div className="App">
      <CoreProvider>
        <HomeLayout/>
        <UploadModal/>
      </CoreProvider>
    </div>
  );
}

export default App;