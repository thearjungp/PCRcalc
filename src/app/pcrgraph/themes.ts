export let darkTheme = {
	chart: {
		layout: {
			background: {
				type: 'solid',
				color: '#000000',
			},
			lineColor: '#2B2B43',
			textColor: '#D9D9D9',
		},
		watermark: {
			color: 'rgba(0, 0, 0, 0)',
		},
		crosshair: {
			color: '#758696',
		},
		grid: {
			vertLines: {
				color: '#000000',
			},
			horzLines: {
				color: '#000000',
			},
		},
	},
	series: {
			topColor: 'rgba(63, 81, 181, 0.56)',
			bottomColor: 'rgba(63, 81, 181, 0.04)',
			lineColor: 'rgba(63, 81, 181, 1)',
	},
};

export let lightTheme = {
	chart: {
		layout: {
			background: {
				type: 'solid',
				color: '#FFFFFF',
			},
			lineColor: '#2B2B43',
			textColor: '#191919',
		},
		watermark: {
			color: 'rgba(0, 0, 0, 0)',
		},
		grid: {
			vertLines: {
				visible: false,
			},
			horzLines: {
				color: '#f0f3fa',
			},
		},
	},
	series: {
			topColor: 'rgba(33, 150, 243, 0.56)',
			bottomColor: 'rgba(33, 150, 243, 0.04)',
			lineColor: 'rgba(33, 150, 243, 1)',
	},
};

 