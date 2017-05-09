export default class IllegalArgumentError extends Error {
	constructor(message) {
		super(message);
		this.message = message || "Wrong call of the selected API";
	}
}
