function getTextPart(text: string, wordsCount: number = 2): string {
	const textArr = text.split(' ');

	return textArr.slice(0, wordsCount).join(' ');
}

export default getTextPart;
