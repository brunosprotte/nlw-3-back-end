import Image from '../model/Image';

export default {
  render(image: Image) {
    return {
      id: image.id,
      path: `http://localhost:3333/uploads/${image.path}`, 
    };
  },

  rendermany(images: Image[]) {
    return images.map(image => this.render(image))
  }

};