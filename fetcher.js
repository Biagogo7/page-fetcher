
const request = require('request');
const fs = require('fs')
//let content;

//let filepath = '/home/labber/w2/d3-net/page-fetcher/test.txt';

function fetcher (urll, filepath) {

  request(urll, function (error, response, body) {
     
    if (!error) {         
      
      console.log('error: ', error);
    } 
    
    fs.writeFile(filepath, body, err => {
      //console.log('response *****:',  body);
      if (err) {
        console.error(err)
        return
      }
      console.log('Downloaded and saved ', getFilesizeInBytes(filepath), ' bytes to ', filepath)
    })
  })

};

function getFilesizeInBytes(filename) {
  const stats = fs.statSync(filename);
  const fileSizeInBytes = stats.size;
  return fileSizeInBytes;
}


//console.log(module);

fetcher('http://www.example.edu', '/home/labber/w2/d3-net/page-fetcher/test.txt');



