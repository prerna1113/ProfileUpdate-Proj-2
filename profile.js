
const EditFunction = () => {
   
    const editableElements = document.querySelectorAll("#SchoolTag, #adrsTag, #locationTag");
    editableElements.forEach((element) => {
        const isEditable = element.getAttribute("contenteditable");
           if (isEditable === "true") {
            element.setAttribute("contenteditable", "false");
            element.style.border = "none"; 
            const SaveBtn = document.createElement("Button")
        } else {
            
            element.setAttribute("contenteditable", "true");
            element.style.border = "1px solid grey";
            element.style.padding = "2px";
            element.focus(); 
        }
    });
};
const backgroundImages = [
    'https://c4.wallpaperflare.com/wallpaper/977/560/879/background-pictures-nature-hd-images-1920x1200-wallpaper-preview.jpg',
    'https://t4.ftcdn.net/jpg/08/38/89/25/360_F_838892548_k5ay5ASsmp6p6yqAzqplqfZfS6Z4Nrip.jpg',
    'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAzL3Jhd3BpeGVsX29mZmljZV8zOV9mbG93X2FuZF9mbHV0dGVyX29mX2FfbGlnaHRfaW5kaWFuX2dhcmRlbl9zdF8xMjYyYjIzMC04MDFmLTQyOWUtYjU1Ny1iY2I0NTc5NGExZTVfMS5qcGc.jpg'
  ];

  const Images=[
    'https://t4.ftcdn.net/jpg/06/80/66/53/360_F_680665394_hupCtS6aHnDddNHJYOoIMR00RQNq5t9g.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjAc2QPEdF8VDUdqyMzE38NXJMxRFvo6lsg&s',
    'https://burst.shopifycdn.com/photos/calm-water-in-european-city.jpg?width=1000&format=pjpg&exif=0&iptc=0'
  ] 
  let currentIndex = 0;
  let index=0;
  document.getElementById('editProfile').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % backgroundImages.length;
   document.getElementById('bgImg').src = backgroundImages[currentIndex];
    index = (index +1)% Images.length;
      document.getElementById('imgTag').src=Images[index];
  });