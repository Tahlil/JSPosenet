const extractFrames = require('ffmpeg-extract-frames')
 
// extract 3 frames at 1s, 2s, and 3.5s respectively

async function extractFramesFromImage(fileName, imageNumber){
    await extractFrames({
        input: 'media/'+fileName+'.mp4',
        output: './frame'+imageNumber+'-%d.png'
      });
}

extractFramesFromImage("ex", 1);
extractFramesFromImage("ex2", 2);
  