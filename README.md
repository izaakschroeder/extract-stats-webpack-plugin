# extract-stats-webpack-plugin

Extract a `stats.json` file for offline processing.

```javascript
{
	...

	plugins: [
		new ExtractStatsPlugin('stats.json', {
			hash: true,
			assets: false,
			reasons: false,
			chunks: true,
			source: false
		})
	]
}
```
