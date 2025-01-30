# workshop-task-9
FA205_Workshop_9

Here is a URL to the webpage for this project: [link](https://jeffcai0502.github.io/workshop-task-9/)

## Task
- Make an experimental 'smart mirror' using live video capture.
- Include manipulations at the level of the pixel.

## workshop notes:
Accessing the webcam

<img width="592" alt="截屏2025-01-30 下午9 14 49" src="https://github.com/user-attachments/assets/efedbfc6-debb-4e93-93c4-f92430c0be1c" />

## Playing around

-First played around with circles, creating a more fluid and organic pattern. 

<img width="397" alt="截屏2025-01-30 下午9 22 57" src="https://github.com/user-attachments/assets/629585e5-a708-4160-b38e-befea8d7b668" />

- Experimenting with effect but wasn't great.

<img width="402" alt="截屏2025-01-30 下午9 32 26" src="https://github.com/user-attachments/assets/2c9ebebb-7830-4192-b8c5-dfbf6d0dd66f" />

- Changed the canvas size
- PixelDensity() ensures the pixel density matches the display density.
- CreateCapture(VIDEO) captures video from the webcam, and webcam.size(width / scale, height / scale) sets the size of the video feed to a scaled-down version of the canvas size.
- The webcam.hide() function hides the default video element.
- A loop initializes an array of Circle objects with random positions and sizes.
- Webcam.loadPixels() loads the pixel data from the webcam feed.
  
<img width="799" alt="截屏2025-01-30 下午9 34 54" src="https://github.com/user-attachments/assets/58db9878-24e9-441e-ab18-f58073c5f506" />

-Added a color invert filter that made it quite fun
<img width="799" alt="截屏2025-01-30 下午9 43 07" src="https://github.com/user-attachments/assets/bd60741c-fa9e-4fa1-b462-474c6d12ee59" />

Future Development
- Add mouse or keyboard interactions to control the circles.
- Experiment with different color filters, such as sepia, threshold, or custom color mappings.
- Add a toggle to switch between different filters dynamically.
