import './App.less';
import 'antd/dist/antd.less'

import { Button, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons';

import axios from 'axios';

function App() {

  const uploadFile = ({file, onSuccess}) => {
    console.log(file)
    onSuccess("Ok")

    let formData = new FormData()
    formData.append("upload", file)
    formData.append("args", JSON.stringify({
      title: "Scissor",
      description: "Cool scissors"
    }))

    axios.post(
      "http://localhost:5000/api/image/upload",
      formData,
      {
        headers: {'Content-Type': 'multipart/form-data'}
      }
    )
  }

  return (
    <div className="App">
      <p>hello world</p>

      <Upload
        name="file"
        customRequest={uploadFile}
        accept="image/png, image/jpeg"
      >
        <Button>
          <UploadOutlined/> Click to Upload
        </Button>
      </Upload>

    </div>
  );
}

export default App;
