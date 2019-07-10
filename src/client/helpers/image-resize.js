export default async ([file], MAX_WIDTH, MAX_HEIGHT) => {
	let img = document.createElement('img');
	img.src = await new Promise(resolve => {
		let reader = new FileReader();
		reader.onload = e => resolve(e.target.result);
		reader.readAsDataURL(file);
	});
	await new Promise(resolve => (img.onload = resolve));
	let canvas = document.createElement('canvas');
	let ctx = canvas.getContext('2d');
	ctx.drawImage(img, 0, 0);
	let width = img.naturalWidth;
	let height = img.naturalHeight;
	if (width > height) {
		if (width > MAX_WIDTH) {
			height *= MAX_WIDTH / width;
			width = MAX_WIDTH;
		}
	} else {
		if (height > MAX_HEIGHT) {
			width *= MAX_HEIGHT / height;
			height = MAX_HEIGHT;
		}
	}
	canvas.width = width;
	canvas.height = height;
	ctx = canvas.getContext('2d');
	ctx.drawImage(img, 0, 0, width, height);
	let result = await new Promise(resolve => resolve(canvas.toDataURL(file.type, 0.95)));
	return result;
};
