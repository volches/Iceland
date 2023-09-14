import autoComplete from '@tarekraafat/autocomplete.js';
import toursList from './../helpers/toursList';

function autoCompleteFunc() {
	const autoCompleteJS = new autoComplete({
		selector: '#autoCompleteTours',
		placeHolder: 'e.g Golden Circle',
		data: {
			src: toursList,
			cache: true,
		},
		resultItem: {
			highlight: true,
		},
		events: {
			input: {
				selection: (event) => {
					const selection = event.detail.selection.value;
					autoCompleteJS.input.value = selection;
				},
			},
		},
		resultsList: {
			maxResults: 2,
		},
		searchEngine: 'strict', // strict | loose
	});
}

export default autoCompleteFunc;
