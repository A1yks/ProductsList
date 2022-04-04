function formatPrice(price: number): string {
	return price.toFixed(2).replace(/\./g, ',');
}

export default formatPrice;
