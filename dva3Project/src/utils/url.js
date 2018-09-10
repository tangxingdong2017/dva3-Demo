import { mock } from '../../public/config.json';

export function parseSearch(searchString) {
	if (!searchString) {
		return {};
	}
	return searchString
	.substring(1)
	.split('&')
	.reduce((result, next) => {
		const pair = next.split('=');
		result[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
		return result;
	}, {})

}

export default function getURL(url, pattern = 'api') {
	if (!mock) {
		const index = url.indexOf(pattern);
		url = url.slice(index)
	}
	if (url.charAt(0) !== '/') {
		url = `/${url}`
	}
	return url;
}