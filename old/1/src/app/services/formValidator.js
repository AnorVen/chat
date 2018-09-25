export function isValidName(str) {
	return /^[a-zA-ZА-Яа-яЁё\s]+$/.test(str);
}

export function isValidLogin(str) {
	return !/^[А-Яа-яЁё\s]+$/.test(str);
}

export function isValidPhone(str) {
	return /\+\d\([\d]{3}\)\d{3}-\d{4}/.test(str);
}

export function isValidEmail(str) {
	return /^((\b-|\b\.)?[a-z])+@[a-z]+\.[a-z]{2,4}$/.test(str);
}

export function isValidText(str) {
	return /.{2,}/.test(str);
}

export function isValidUrl(str) {
	return /\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i.test(
		str
	);
}
