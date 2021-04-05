const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulLink = document.querySelector('ul');

const makeGallery = images => {
  return images.map(image => {
    const itemEl = document.createElement('li');
    const imageEl = document.createElement('img');
    imageEl.src = image.url;
    imageEl.alt = image.alt;
    imageEl.style.width = '80%';
    itemEl.style.marginBottom = "20px";
    itemEl.style.listStyle = 'none';
    imageEl.style.display = 'block';
    imageEl.style.margin = '0 auto';
      
    itemEl.append(imageEl);

    return itemEl;
  });
};

const allImages = makeGallery(images);

ulLink.append(...allImages);