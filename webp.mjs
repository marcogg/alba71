import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

const files = await imagemin(['img/*/*.{jpg,png}'], {
	// Para seleccionar todas las carpetas de los niveles existentes y lod dos formatos
	// img/*/*.{jpg,png}
  destination: 'img/webp',
  plugins: [
    imageminWebp({
      quality: [75]
    })
  ]
});

console.log(files);
//=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]

// const webp=require('webp-converter');

// //pass input image(.jpeg,.pnp .....) path ,output image(give path where to save and image file name with .webp extension)
// //pass option(read  documentation for options)

// //cwebp(input,output,option)

// const result = webp.cwebp("img/galeria/*.png, .jpg","img/galeria/.webp","-q 80",logging="-v");
// result.then((response) => {
//   console.log(response);
// });