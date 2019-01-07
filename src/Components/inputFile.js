import React from 'react';
import X from './x'

class InputFile extends React.Component {
constructor(props){
  super(props);

  this.state = {
    currentImage: null,
    fileSize: null,
    key: null
  }
  this.handleFile = this.handleFile.bind(this);
  this.handleFileSize = this.handleFileSize.bind(this);
  this.handleClearImage = this.handleClearImage.bind(this);
}


getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

handleFile() {
  const file = document.getElementById('myFiles').files[0];
  const fileSize = this.handleFileSize(file.size);
  
  this.getBase64(file).then(
    // set returned string to state
    data => this.setState({
      currentImage: data,
      fileSize: fileSize + ' for current file size',
      key: 1
    },
    // trigger callback function
    this.handleStorageUpdate(data))
  );
}

handleStorageUpdate(data) {
  //update localStorage with same (as getBase64()) string value
  localStorage.setItem('currentImg', data);
}

// check if there is an image in storage from previous rendering
persistCurrentImage() {
  const checkImg = localStorage.getItem('currentImg');
  // check localStorage for currentImg value
  if (checkImg !== null) {
    // if there, re-set state to this value
    this.setState({
      currentImage: checkImg,
      fileSize: 'Previous image loaded!'
    })
  }
}

// manage presentation of file size formating
handleFileSize(fileSize) {
    if (fileSize < 1024) {
      return fileSize + 'bytes';
    } else if (fileSize >= 1024 && fileSize < 1048576) {
      return (fileSize / 1024).toFixed(1) + 'KB';
    } else if (fileSize >= 1048576) {
      return (fileSize / 1048576).toFixed(1) + 'MB';
    }
}

handleClearImage(){
  if (localStorage.getItem('currentImg')) {
    localStorage.removeItem('currentImg')
    this.setState({
      currentImage: null,
      fileSize: null,
      key: null
    })
    console.log('test');
    
  } else {
    alert('There is no image to remove');
  }
}

componentWillMount() {
  this.persistCurrentImage();
}

  render() {
    console.log(this.state);
    
    return(
      <div className="file-input">
        <div className="imageBound">
          <X
            handleClearImage={this.handleClearImage}
            visibleState={this.state.key}
          />
          <img
            alt=""
            src={this.state.currentImage}
            className="current-image"
          />
        </div>
        <input
          type="file"
          id="myFiles"
          accept="image/x-png,image/gif,image/jpeg"
          onChange={this.handleFile}
          placeholder="Add profile image"
        />
        <label htmlFor="myFiles">Add profile image</label>
        
        <p className="image-info">{this.state.fileSize === 'previous image loaded!' ? this.state.fileSize + 'bob' : this.state.fileSize}</p>
      </div>
    );
  }
}

export default InputFile;